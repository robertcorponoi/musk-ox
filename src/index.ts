'use strict'

import Asset from './interfaces/Asset';

import Fetch from './fetch/Fetch';
import Cache from './cache/Cache';
import * as media from './utils/media';

import Hypergiant from 'hypergiant';

/**
 * Musk Ox takes a collection of assets that need to be loaded for use in the browser and adds them to cache
 * so that they can be used whenever.
 */
export default class MuskOx {

	/**
	 * A reference to the cache used to store assets.
   * 
   * @private
	 * 
	 * @property {Cache}
	 */
  private _cache: Cache = new Cache();

	/**
	 * A reference to the fetch module used to retrieve assets.
   * 
   * @property {Fetch}
   * 
   * @private
	 */
  private _fetch: Fetch = new Fetch(this.cache);

	/**
	 * A reference to the assets that still have yet to be loaded.
	 * 
	 * @property {Array<Asset>}
   * 
   * @private
	 */
  private _queue: Array<Asset> = [];

	/**
	 * The current number of assets that have been loaded.
	 * 
	 * @property {number}
   * 
   * @private
	 */
  private _assetsLoaded: number = 0;

	/**
	 * The current number of assets that have yet to be loaded.
	 * 
	 * @property {number}
   * 
   * @private
	 */
  private _assetsToLoad: number = 0;

  /**
   * The crossOrigin option passed to MuskOx on initialization.
   * 
   * @private
   * 
   * @property {string}
   */
  private _crossOrigin: string;

	/**
	 * A percent value that represents the current loading progress.
	 * 
	 * @property {number} 
   * 
   * @private
	 */
  private _progress: number = 0;

  /**
   * The signal that gets dispatched whenever the loading progress is updated.
   * 
   * When this signal gets dispatched it contains the load progress as a percentage.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */
  private _onProgress: Hypergiant = new Hypergiant();

  /**
   * The signal that gets dispatched each time an individual asset is loaded.
   * 
   * When this signal gets dispatched it contains the asset that was loaded.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */
  private _onLoad: Hypergiant = new Hypergiant();

  /**
   * The signal that gets dispatched when an asset encounters an error while loading.
   * 
   * When this signal gets dispatched it contains the error that was thrown.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */
  private _onError: Hypergiant = new Hypergiant();

  /**
   * The signal that gets dispatched when loading is complete.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */
  private _onComplete: Hypergiant = new  Hypergiant();

	/**
	 * @param {string} crossOrigin The crossOrigin option passed to MuskOx on initialization.
	 */
  constructor(crossOrigin: string = '') {
    this._crossOrigin = crossOrigin;
  }

  /**
   * Returns the cache module.
   * 
   * @returns {Cache}
   */
  get cache(): Cache { return this._cache; }

  /**
   * Returns the fetch module.
   * 
   * @returns {Fetch}
   */
  get fetch(): Fetch { return this._fetch; }

	/**
	 * Returns the current loading progress.
	 * 
	 * @returns {number}
	 */
  get progress(): number { return this._progress; }

  /**
   * Returns the onProgress signal.
   * 
   * @returns {Hypergiant}
   */
  get onProgress(): Hypergiant { return this._onProgress; }

  /**
   * Returns the assetLoaded signal.
   * 
   * @returns {Hypergiant}
   */
  get onLoad(): Hypergiant { return this._onLoad; }

  /**
   * Returns the onError signal.
   * 
   * @returns {Hypergiant}
   */
  get onError(): Hypergiant { return this._onError; }

  /**
   * Returns the onComplete signal.
   * 
   * @returns {Hypergiant}
   */
  get onComplete(): Hypergiant { return this._onComplete; }

	/**
	 * Takes the assets from the load queue and one by one it uses the appropriate  method to load it and then add it to the cache.
	 */
  start() {
    if (this._queue.length === 0) this._updateLoadStatus();

    for (const asset of this._queue) {
      switch (asset.type) {
        case 'image':
          this._loadDefault(asset);
          break;
        case 'audio':
        case 'video':
          this._loadCanPlayThrough(asset);
          break;
        case 'text':
        case 'binary':
        case 'json':
          this._loadXHR(asset);
          break;
      }
    }
  }

	/**
	 * Adds an image asset to the load queue.
	 * 
	 * @param {string} key A unique key to reference this image asset by.
	 * @param {string} src The path to the image asset.
	 * @param {boolean} [replace=false] Indicates whether an image asset with the same key should be replaced in the cache or not.
	 */
  image(key: string, src: string, replace: boolean = false) {
    this._addToQueue('image', key, src, replace);
  }

	/**
	 * Adds an audio asset to the load queue.
	 * 
	 * Muliple `src` paths can be provided in case one or more are not supported by the user's browser.
	 * 
	 * @param {string} key A unique key to reference this audio asset by.
	 * @param {string|Array<string>} src A path to the audio asset or an array of paths to an audio asset and its fallbacks.
	 * @param {boolean} [replace=false] Indicates whether an audio asset with the same key should be replaced in the cache or not.
	 */
  audio(key: string, srcs: Array<string>, replace: boolean = false) {
    this._addToQueue('audio', key, srcs, replace);
  }

	/**
	 * Adds a video asset to the load queue.
	 * 
	 * Muliple `src` paths can be provided in case one or more are not supported by the user's browser.
	 * 
	 * @param {string} key A unique key to reference this video asset by.
	 * @param {string|Array<string>} src A path to the video asset or an array of paths to a video asset and its fallbacks.
	 * @param {boolean} [replace=false] Indicates whether a video asset with the same key should be replaced in the cache or not.
	 */
  video(key: string, srcs: Array<string>, replace: boolean = false) {
    this._addToQueue('video', key, srcs, replace);
  }

	/**
	 * Adds the contents of a text file to the load queue.
	 * 
	 * @param {string} key A unique key to reference this text asset by.
	 * @param {string} src The path to the text asset.
	 * @param {boolean} [replace=false] Indicates whether a text asset with the same key should be replaced in the cache or not.
	 */
  text(key: string, src: string, replace: boolean = false) {
    this._addToQueue('text', key, src, replace);
  }

	/**
	 * Adds the binary contents of a file to the load queue.
	 * 
	 * @param {string} key A unique key to reference this binary asset by.
	 * @param {string} src The path to the binary asset.
	 * @param {boolean} [replace=false] Indicates whether a binary asset with the same key should be replaced in the cache or not.
	 */
  binary(key: string, src: string, replace: boolean = false) {
    this._addToQueue('binary', key, src, replace);
  }

	/**
   * Add the contents of a JSON file as a parsed object to the load queue.
   * 
   * @param {string} key A unique key to reference this JSON asset by.
   * @param {string} src The path to the JSON asset.
   * @param {boolean} [replace=false] Indicates whether a JSON asset with the same key should be replaced in the cache or not.
	 */
  json(key: string, src: string, replace: boolean = false) {
    this._addToQueue('json', key, src, replace);
  }

	/**
	 * Takes the supplied asset, creates an asset instance out of it, and
	 * adds it to the load queue.
   * 
	 * @private
	 * 
	 * @param {string} type The type of asset this asset is.
	 * @param {string} key The key for the asset.
	 * @param {string|Array<string>} src The path/s to the asset.
	 * @param {boolean} replace Indicates whether an asset with the same key should be replaced in the cache or not.
	 */
  private _addToQueue(type: string, key: string, src: (string | Array<string>), replace: boolean) {
    const asset: Asset = { type: type, key: key, src: src };

    this._queue.push(asset);

    this._assetsToLoad++;
  }

	/**
	 * Load assets that can be loaded through the simple use of an event listener
	 * that listens to the asset's load event.
   * 
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
  private _loadDefault(asset: Asset) {
    asset.data = new Image();

    asset.data.addEventListener('load', () => {
      this._cacheAsset(asset);
    }, false);

    asset.data.addEventListener('error', (err: string) => {
      this._handleAssetError(asset, err);
    }, false);

    asset.data.src = asset.src.toString();

    if (this._crossOrigin) asset.data.crossOrigin = this._crossOrigin;
  }

	/**
	 * Load assets that can be loaded through the use of the `canPlayThrough` event
	 * listener.
   * 
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
  private _loadCanPlayThrough(asset: Asset) {
    if (!Array.isArray(asset.src)) asset.src = [asset.src];

    if (asset.type === 'audio') asset.data = new Audio();

    else asset.data = document.createElement('video');

    asset.data.addEventListener('canplaythrough', () => {
      this._cacheAsset(asset);
    }, false);

    asset.data.addEventListener('error', (err: string) => {
      this._handleAssetError(asset, err);
    }, false);

    asset.data.src = media.getPlayableMedia(asset.type, asset.src);
  }

	/**
	 * Load assets that can be loaded through XHR.
   * 
	 * @private
	 * 
	 * @param {Asset} asset The asset to load.
	 */
  private _loadXHR(asset: Asset) {
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
        this._cacheAsset(asset);
      }
    }, false);

    asset.data.addEventListener('error', (err: string) => {
      this._handleAssetError(asset, err);
    }, false);

    if (asset.type == 'binary') asset.data.responseType = 'arraybuffer';

    asset.data.open('GET', asset.src);

    asset.data.send();
  }

	/**
	 * Takes the loaded asset and adds it to the cache while updating properties of this module including the load progress.
   * 
	 * @private
	 * 
	 * @param {Asset} asset The loaded asset.
	 */
  private _cacheAsset(asset: Asset) {
    this.cache.set(asset.type, asset.key, asset.data);

    this._assetsLoaded++;

    this._updateLoadStatus(asset);
  }

	/**
	 * Check to see if the queue has finished processing and all of the assets have been loaded.
	 * 
	 * This also updates the progress property to reflect the most update to date progress.
	 * 
	 * Finally, if all of the items are loaded, the load complete event is emitted signaling that it is safe to use all of the 
   * loaded assets.
   * 
	 * @private
	 * 
	 * @param {Asset} [asset] The most recently loaded asset.
	 */
  private _updateLoadStatus(asset?: Asset) {
    this._progress = parseInt(((this._assetsLoaded / this._assetsToLoad) * 100).toFixed(0));

    this.onProgress.dispatch(this._progress);

    this.onLoad.dispatch(asset);

    if (this._assetsLoaded === this._assetsToLoad) this.onComplete.dispatch();
  }

  /**
   * When an asset encounters an error while loading this will dispatch the onError event.
   * 
   * @private
   * 
   * @param {Asset} asset The asset that encountered an error while loading.
   * @param {string} err The error that was dispatched.
   */
  private _handleAssetError(asset: Asset, err: string) {
    this.onError.dispatch(asset, err);
  }
}
