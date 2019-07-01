'use strict'

import Asset from './interfaces/Asset';

import Fetch from './fetch/Fetch';
import Cache from './cache/Cache';
import * as media from './utils/media';
import Eventverse from 'eventverse/lib/index';

/**
 * Loads the specified assets and adds them to the cache.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 3.1.0
 */
export default class MuskOx extends Eventverse {

	/**
	 * A reference to the cache used to store assets.
	 * 
	 * @since 2.0.0
	 * 
	 * @property {Cache}
	 */
	cache: Cache = new Cache();

	/**
	 * Initialize the fetch module to retrieve assets from the cache.
	 * 
	 * @since 2.0.0
	 * @readonly
	 */
	fetch: Fetch = new Fetch(this.cache);

	/**
	 * The crossOrigin option passed to MuskOx on initialization.
	 * 
	 * @since 3.0.0
	 * 
	 * @property {string}
	 * @readonly
	 */
	crossOrigin: string;

	/**
	 * Stores assets that still have yet to be loaded.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {Array<Asset>}
	 */
	queue: Array<Asset> = [];

	/**
	 * The current number of assets that have been loaded.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {number}
	 */
	assetsLoaded: number = 0;

	/**
	 * The current number of assets that have yet to be loaded.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {number}
	 */
	assetsToLoad: number = 0;

	/**
	 * A percent value that represents the current loading progress.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {number} 
	 */
	_progress: number = 0;

	/**
	 * @param {Cache} cache A reference to the MuskOx cache.
	 * @param {string} crossOrigin The crossOrigin option passed to MuskOx on initialization.
	 */
	constructor(crossOrigin: string) {

		super();

		this.crossOrigin = crossOrigin;

	}

	/**
	 * Returns the current loading progress.
	 * 
	 * @since 0.1.0
	 * 
	 * @returns {number}
	 */
	get progress(): number {

		return this._progress;

	}

	/**
	 * Takes the assets from the load queue and one by one it uses the appropriate 
	 * method to load it and then add it to the cache.
	 * 
	 * @since 0.1.0
	 */
	start() {

		for (const asset of this.queue) {

			switch (asset.type) {

				case 'image':
					this.loadDefault(asset);
					break;

				case 'audio':
				case 'video':
					this.loadCanPlayThrough(asset);
					break;

				case 'text':
				case 'binary':
				case 'json':
					this.loadXHR(asset);
					break;

			}

		}

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
	image(key: string, src: string, replace: boolean = false) {

		this.addToQueue('image', key, src, replace);

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
	audio(key: string, srcs: Array<string>, replace: boolean = false) {

		this.addToQueue('audio', key, srcs, replace);

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
	video(key: string, srcs: Array<string>, replace: boolean = false) {

		this.addToQueue('video', key, srcs, replace);

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
	text(key: string, src: string, replace: boolean = false) {

		this.addToQueue('text', key, src, replace);

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
	binary(key: string, src: string, replace: boolean = false) {

		this.addToQueue('binary', key, src, replace);

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
	json(key: string, src: string, replace: boolean = false) {

		this.addToQueue('json', key, src, replace);

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
	 * @param {string|Array<string>} src The path/s to the asset.
	 * @param {boolean} replace Indicates whether an asset with the same key should be replaced in the cache or not.
	 */
	private addToQueue(type: string, key: string, src: (string | Array<string>), replace: boolean) {

		const asset: Asset = { type: type, key: key, src: src };

		this.queue.push(asset);

		this.assetsToLoad++;

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
	private loadDefault(asset: Asset) {

		asset.data = new Image();

		asset.data.addEventListener('load', () => {

			this.cacheAsset(asset);

		}, false);

		asset.data.addEventListener('error', () => {

			// this.handleAssetError(asset);

		}, false);

		asset.data.src = asset.src.toString();

		if (this.crossOrigin)	asset.data.crossOrigin = this.crossOrigin;

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
	private loadCanPlayThrough(asset: Asset) {

		if (!Array.isArray(asset.src)) asset.src = [asset.src];

		if (asset.type === 'audio') asset.data = new Audio();

		else asset.data = document.createElement('video');

		asset.data.addEventListener('canplaythrough', () => {

			this.cacheAsset(asset);

		}, false);

		asset.data.addEventListener('error', () => {

			// this.handleAssetError(asset);

		}, false);

		asset.data.src = media.getPlayableMedia(asset.type, asset.src);

	}

	/**
	 * Load assets that can be loaded through XHR.
	 * 
	 * @since 2.0.0
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
	private loadXHR(asset: Asset) {

		asset.data = new XMLHttpRequest();

		asset.data.addEventListener('readystatechange', () => {

			if (asset.data.readyState == 4 && asset.data.status == 200) {

				switch (asset.type) {

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

				this.cacheAsset(asset);

			}

		}, false);

		asset.data.addEventListener('error', () => {

			// this.handleAssetError(asset);

		}, false);

		if (asset.type == 'binary') asset.data.responseType = 'arraybuffer';

		asset.data.open('GET', asset.src);

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
	private cacheAsset(asset: Asset) {

		this.cache.set(asset.type, asset.key, asset.data);

		this.assetsLoaded++;

		this.updateLoadStatus(asset);

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
	private updateLoadStatus(asset: Asset) {

		this._progress = parseInt(((this.assetsLoaded / this.assetsToLoad) * 100).toFixed(0));

		this.emit('asset-loaded', asset.data);

		if (this.assetsLoaded === this.assetsToLoad) this.emit('load-complete');

	}

}
