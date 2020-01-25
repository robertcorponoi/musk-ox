import Fetch from './fetch/Fetch';
import Cache from './cache/Cache';
import Hypergiant from 'hypergiant';
/**
 * Musk Ox takes a collection of assets that need to be loaded for use in the browser and adds them to cache
 * so that they can be used whenever.
 */
export default class MuskOx {
    /**
     * A reference to the options for this instance of MuskOx.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the cache used to store assets.
   *
   * @private
     *
     * @property {Cache}
     */
    private _cache;
    /**
     * A reference to the fetch module used to retrieve assets.
   *
   * @property {Fetch}
   *
   * @private
     */
    private _fetch;
    /**
     * A reference to the assets that still have yet to be loaded.
     *
     * @property {Array<Asset>}
   *
   * @private
     */
    private _queue;
    /**
     * The current number of assets that have been loaded.
     *
     * @property {number}
   *
   * @private
     */
    private _assetsLoaded;
    /**
     * The current number of assets that have yet to be loaded.
     *
     * @property {number}
   *
   * @private
     */
    private _assetsToLoad;
    /**
     * A percent value that represents the current loading progress.
     *
     * @property {number}
   *
   * @private
     */
    private _progress;
    /**
     * The signal that gets dispatched whenever the loading progress is updated.
     *
     * When this signal gets dispatched it contains the load progress as a percentage.
     *
     * @property {Hypergiant}
     *
     * @private
     */
    private _onProgress;
    /**
     * The signal that gets dispatched each time an individual asset is loaded.
     *
     * When this signal gets dispatched it contains the asset that was loaded.
     *
     * @property {Hypergiant}
     *
     * @private
     */
    private _onLoad;
    /**
     * The signal that gets dispatched when an asset encounters an error while loading.
     *
     * When this signal gets dispatched it contains the error that was thrown.
     *
     * @property {Hypergiant}
     *
     * @private
     */
    private _onError;
    /**
     * The signal that gets dispatched when loading is complete.
     *
     * @property {Hypergiant}
     *
     * @private
     */
    private _onComplete;
    /**
     * @param {Object} [options]
   * @param {string} [options.crossOrigin=''] A cross-origin property to set for all assets that use cross-origin.
   * @param {AudioContext} [options.audioContext=new AudioContext()] A reference to an existing AudioContext to use if creating web audio assets. If one is not assigned then a new instance of an AudioContext will be used.
     */
    constructor(options?: Object);
    /**
     * Returns the cache module.
     *
     * @returns {Cache}
     */
    get cache(): Cache;
    /**
     * Returns the fetch module.
     *
     * @returns {Fetch}
     */
    get fetch(): Fetch;
    /**
     * Returns the current loading progress.
     *
     * @returns {number}
     */
    get progress(): number;
    /**
     * Returns the onProgress signal.
     *
     * @returns {Hypergiant}
     */
    get onProgress(): Hypergiant;
    /**
     * Returns the assetLoaded signal.
     *
     * @returns {Hypergiant}
     */
    get onLoad(): Hypergiant;
    /**
     * Returns the onError signal.
     *
     * @returns {Hypergiant}
     */
    get onError(): Hypergiant;
    /**
     * Returns the onComplete signal.
     *
     * @returns {Hypergiant}
     */
    get onComplete(): Hypergiant;
    /**
     * Takes the assets from the load queue and one by one it uses the appropriate  method to load it and then add it to the cache.
     */
    start(): void;
    /**
     * Adds an image asset to the load queue.
     *
     * @param {string} key A unique key to reference this image asset by.
     * @param {string} src The path to the image asset.
     * @param {boolean} [replace=false] Indicates whether an image asset with the same key should be replaced in the cache or not.
     */
    image(key: string, src: string, replace?: boolean): void;
    /**
     * Adds an audio asset to the load queue.
     *
     * Multiple `src` paths can be provided in case one or more are not supported by the user's browser.
     *
     * @param {string} key A unique key to reference this audio asset by.
     * @param {string|Array<string>} src A path to the audio asset or an array of paths to an audio asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether an audio asset with the same key should be replaced in the cache or not.
     */
    audio(key: string, srcs: Array<string>, replace?: boolean): void;
    /**
     * Adds an AudioBuffer to the load queue.
     *
     * @param {string} key A unique key to reference this audio buffer by.
       * @param {string} src A path to the audio asset.
       * @param {boolean} [replace=false] Indicates whether an audio buffer with the same key should be replaced in the cache or not.
     */
    audioBuffer(key: string, src: string, replace?: boolean): void;
    /**
     * Adds a video asset to the load queue.
     *
     * Muliple `src` paths can be provided in case one or more are not supported by the user's browser.
     *
     * @param {string} key A unique key to reference this video asset by.
     * @param {string|Array<string>} src A path to the video asset or an array of paths to a video asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether a video asset with the same key should be replaced in the cache or not.
     */
    video(key: string, srcs: Array<string>, replace?: boolean): void;
    /**
     * Adds the contents of a text file to the load queue.
     *
     * @param {string} key A unique key to reference this text asset by.
     * @param {string} src The path to the text asset.
     * @param {boolean} [replace=false] Indicates whether a text asset with the same key should be replaced in the cache or not.
     */
    text(key: string, src: string, replace?: boolean): void;
    /**
     * Adds the binary contents of a file to the load queue.
     *
     * @param {string} key A unique key to reference this binary asset by.
     * @param {string} src The path to the binary asset.
     * @param {boolean} [replace=false] Indicates whether a binary asset with the same key should be replaced in the cache or not.
     */
    binary(key: string, src: string, replace?: boolean): void;
    /**
   * Add the contents of a JSON file as a parsed object to the load queue.
   *
   * @param {string} key A unique key to reference this JSON asset by.
   * @param {string} src The path to the JSON asset.
   * @param {boolean} [replace=false] Indicates whether a JSON asset with the same key should be replaced in the cache or not.
     */
    json(key: string, src: string, replace?: boolean): void;
    /**
     * Loads an asset as an array buffer.
     *
     * This can be useful for loading an audio asset to use with web audio.
     *
     * @param {string} key A unique key to reference this array buffer asset by.
     * @param {string} src The path to the asset.
     * @param {boolean} [replace=false] Indicates whether an array buffer asset with the same key should be replaced in the cache or not.
     */
    arrayBuffer(key: string, src: string, replace?: boolean): void;
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
    private _addToQueue;
    /**
     * Load assets that can be loaded through the simple use of an event listener
     * that listens to the asset's load event.
   *
     * @private
     *
     * @param {Asset} asset The asset to load.
     */
    private _loadDefault;
    /**
     * Load assets that can be loaded through the use of the `canPlayThrough` event
     * listener.
   *
     * @private
     *
     * @param {Asset} asset The asset to load.
     */
    private _loadCanPlayThrough;
    /**
     * Load assets that can be loaded through XHR.
   *
     * @private
     *
     * @param {Asset} asset The asset to load.
     */
    private _loadXHR;
    /**
     * Takes the loaded asset and adds it to the cache while updating properties of this module including the load progress.
   *
     * @private
     *
     * @param {Asset} asset The loaded asset.
     */
    private _cacheAsset;
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
    private _updateLoadStatus;
    /**
     * When an asset encounters an error while loading this will dispatch the onError event.
     *
     * @private
     *
     * @param {Asset} asset The asset that encountered an error while loading.
     * @param {string} err The error that was dispatched.
     */
    private _handleAssetError;
}
