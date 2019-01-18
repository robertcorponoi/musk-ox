'use strict'

import Asset from '../asset/Asset.js';
import { getPlayableMedia } from '../utils/media.js';

/**
 * The loader is responsible for taking the provided assets, loading 
 * them asynchronously, and adding them to the cache.
 * 
 * @since 0.1.0
 */
export default class Loader {

	/**
	 * @param {MuskOx} muskox A reference to the MuskOx module.
	 */
	constructor(muskox) {

		/**
		 * A reference to the MuskOx module.
		 * 
		 * @since 2.0.0
		 * 
		 * @property {MuskOx}
		 * @readonly
		 */
		this._muskox = muskox;

		/**
		 * A reference to the MuskOx cache.
		 * 
		 * @since 2.0.0
		 * 
		 * @property {Cache}
		 * @readonly
		 */
		this._cache = muskox._cache;

		/**
		 * A reference to the options passed to MuskOx on initialization.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Object}
		 * @readonly
		 */
		this._options = muskox._options;

		/**
		 * Stores assets that still have yet to be loaded.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Array}
		 * @readonly
		 */
		this._queue = [];

		/**
		 * The current number of assets that have been loaded.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {number}
		 * @readonly
		 */
		this._assetsLoaded = 0;

		/**
		 * The current number of assets that still have yet to be loaded.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {number}
		 * @readonly
		 */
		this._assetsToLoad = 0;

		/**
		 * A percent value that represents the current loading progress.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {number}
		 * @readonly
		 */
		this._progress = 0;

	}

	/**
	 * Returns the current loading progress.
	 * 
	 * @since 0.1.0
	 * 
	 * @returns {number}
	 */
	get progress() {

		return this._progress;

	}

	/**
	 * Adds an image asset to the load queue.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key A unique key to reference this image asset by.
	 * @param {string} src The path to the image asset.
	 * @param {boolean} [replace=false] Indicates whether an image asset with the same key should be replaced in the cache or not.
	 */
	image(key, src, replace = false) {

		this._addToQueue('image', key, src, replace);

	}

	/**
	 * Adds an audio asset to the load queue.
	 * 
	 * Muliple `src` paths can be provided in case one or more are not supported
	 * by the user's browser.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key A unique key to reference this audio asset by.
	 * @param {string|Array<string>} src A path to the audio asset or an array of paths to an audio asset and its fallbacks.
	 * @param {boolean} [replace=false] Indicates whether an audio asset with the same key should be replaced in the cache or not.
	 */
	audio(key, srcs, replace = false) {

		this._addToQueue('audio', key, srcs, replace);

	}

	/**
	 * Adds a video asset to the load queue.
	 * 
	 * Muliple `src` paths can be provided in case one or more are not supported
	 * by the user's browser.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key A unique key to reference this video asset by.
	 * @param {string|Array<string>} src A path to the video asset or an array of paths to a video asset and its fallbacks.
	 * @param {boolean} [replace=false] Indicates whether a video asset with the same key should be replaced in the cache or not.
	 */
	video(key, srcs, replace = false) {

		this._addToQueue('video', key, srcs, replace);

	}

	/**
	 * Adds the contents of a text file to the load queue.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key A unique key to reference this text asset by.
	 * @param {string} src The path to the text asset.
	 * @param {boolean} [replace=false] Indicates whether a text asset with the same key should be replaced in the cache or not.
	 */
	text(key, src, replace = false) {

		this._addToQueue('text', key, src, replace);

	}

	/**
	 * Adds the binary contents of a file to the load queue.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key A unique key to reference this binary asset by.
	 * @param {string} src The path to the binary asset.
	 * @param {boolean} [replace=false] Indicates whether a binary asset with the same key should be replaced in the cache or not.
	 */
	binary(key, src, replace = false) {

		this._addToQueue('binary', key, src, replace);

	}

	/**
   * Add the contents of a JSON file as a parsed object to the load queue.
   * 
   * @since 0.1.0
   * 
   * @param {string} key A unique key to reference this JSON asset by.
   * @param {string} src The path to the JSON asset.
   * @param {boolean} [replace=false] Indicates whether a JSON asset with the same key should be replaced in the cache or not.
	 */
	json(key, src, replace = false) {

		this._addToQueue('json', key, src, replace);

	}

	/**
	 * Takes the supplied asset, creates an asset instance out of it, and
	 * adds it to the load queue.
	 * 
	 * @since 0.1.0
	 * @private
	 * 
	 * @param {string} type The type of asset this asset is.
	 * @param {string} key The key for the asset.
	 * @param {string} src The path to the asset.
	 * @param {boolean} replace Indicates whether an asset with the same key should be replaced in the cache or not.
	 */
	_addToQueue(type, key, src, replace) {

		const asset = new Asset(type, key, src);

		this._queue.push(asset);

		this._assetsToLoad++;

	}

	/**
	 * When MuskOx's `load` method is called, this takes the assets from the
	 * load queue and one by one it uses the appropriate method to load it and
	 * then add it to the cache.
	 * 
	 * @since 0.1.0
	 * @private
	 */
	_loadAssets() {

		for (const asset of this._queue) {

			switch (asset._type) {
				case 'image':
					this._loadDefault(asset);
					break;

				case 'audio':
				case 'video':
					this._loadCanPlayThrough(asset);
					break;

				case 'text':
				case 'json':
				case 'binary':
					this._loadXHR(asset);
					break;
			}

		}

	}

	/**
	 * Load assets that can be loaded through the simple use of an event listener
	 * that listens to the asset's load event.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
	_loadDefault(asset) {

		asset.data = new Image();

		asset.data.addEventListener('load', function load() {

			this._cacheAsset(asset);

			asset.data.removeEventListener('load', load);

		}.bind(this), false);

		asset.data.addEventListener('error', function loadError() {

			this._handleAssetError(asset);

			asset.data.removeEventListener('error', loadError);

		}.bind(this), false);

		asset.data.src = asset._src;

		if (this._options.crossOrigin) {

			asset.data.crossOrigin = this._options.crossOrigin;

		}

	}

	/**
	 * Load assets that can be loaded through the use of the `canPlayThrough` event
	 * listener.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
	_loadCanPlayThrough(asset) {

		if (!Array.isArray(asset._src)) asset._src = [asset._src];

		if (asset._type === 'audio') asset.data = new Audio();

		else asset.data = document.createElement('video');

		asset.data.addEventListener('canplaythrough', function load() {

			this._cacheAsset(asset);

			asset.data.removeEventListener('canplaythrough', load);

		}.bind(this), false);

		asset.data.addEventListener('error', function loadError() {

			this._handleAssetError(asset);

			asset.data.removeEventListener('error', loadError);

		}.bind(this), false);

		asset.data.src = getPlayableMedia(asset._type, asset._src);

	}

	/**
	 * Load assets that can be loaded through XHR.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
	_loadXHR(asset) {

		asset.data = new XMLHttpRequest();

		asset.data.addEventListener('readystatechange', function load() {

			if (asset.data.readyState == 4 && asset.data.status == 200) {

				switch (asset._type) {
					case 'text':
						asset.data = asset.data.responseText;
						break;

					case 'binary':
						const arrayBuffer = asset.data.response;

						if (arrayBuffer) asset.data = new Uint8Array(arrayBuffer);
						break;

					case 'json':
						asset.data = JSON.parse(asset.data.responseText);
						break;
				}

				this._cacheAsset(asset);

			}

		}.bind(this), false);

		asset.data.addEventListener('error', function loadError() {

			this._handleAssetError(asset);

			asset.data.removeEventListener('error', loadError);

		}.bind(this), false);

		if (asset._type == 'binary') asset.data.responseType = 'arraybuffer';

		asset.data.open('GET', asset._src);

		asset.data.send();

	}

	/**
	 * Takes the loaded asset and adds it to the cache while updating properties of this
	 * module including the load progress.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The loaded asset.
	 */
	_cacheAsset(asset) {

		this._cache._set(asset._type, asset._key, asset.data);

		this._assetsLoaded++;

		this._updateLoadStatus(asset);

	}

	/**
	 * Check to see if the queue has finished processing and all of the assets have
	 * been loaded.
	 * 
	 * This also updates the progress property to reflect the most update to date
	 * progress.
	 * 
	 * Finally, if all of the items are loaded, the load complete event is emitted
	 * signaling that it is safe to use all of the loaded assets.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The most recently loaded asset.
	 */
	_updateLoadStatus(asset) {

		this._progress = ((this._assetsLoaded / this._assetsToLoad) * 100).toFixed(0);

		this._muskox.emit('asset-loaded', asset.data);

		if (this._assetsLoaded === this._assetsToLoad) this._muskox.emit('load-complete');

	}

}