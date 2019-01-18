/**
 * The cache is used to store loaded assets until they are
 * ready to be used.
 * 
 * @since 0.1.0
 */
class Cache {

	constructor() {

		/**
		 * All loaded assets are stored here.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Object}
		 * @readonly
		 */
		this._assets = new Object(null);

		/**
		 * Initialize all of the properties of the cache to allow storing of
		 * multiple different types of assets.
		 */
		this._boot();

	}

	/**
	 * Initialize all of the properties of the cache to allow storing of
	 * multiple different types of assets.
	 * 
	 * @since 0.1.0
	 */
	_boot() {

		this._assets['image'] = new Object(null);

		this._assets['audio'] = new Object(null);

		this._assets['video'] = new Object(null);

		this._assets['text'] = new Object(null);

		this._assets['binary'] = new Object(null);

		this._assets['json'] = new Object(null);

	}

	/**
	 * Retrieve an asset from the cache.
	 * 
	 * @since 0.1.0
	 * @private
	 * 
	 * @param {string} type The type of asset to retrieve.
	 * @param {string} key The key of the asset.
	 * 
	 * @returns {undefined|HTMLElement} Returns the asset HTMLElement if exists or undefined if it doesn't exist.
	 */
	_get(type, key) {

		if (!this._exists(type, key)) return;

		return this._assets[type][key];

	}

	/**
	 * Adds an asset to the cache.
	 * 
	 * @since 0.1.0
	 * @private
	 * 
	 * @param {string} type The type of asset to add.
	 * @param {string} key The key of the asset.
	 * @param {HTMLElement} asset The actual asset to add.
	 * @param {boolean} [replace=false] Indicates whether an asset with an existing key should be replaced with the current asset or not.
	 * 
	 * @returns {boolean} Returns true if the asset was successfully added to the cache or false if the asset already exists and `replace` is set to false.
	 */
	_set(type, key, asset, replace = false) {

		if (this._exists(type, key) && !replace) return false;

		this._assets[type][key] = asset;

		return true;

	}

	/**
	 * Checks to see if the specified asset exists in the cache.
	 * 
	 * @since 0.1.0
	 * @private
	 * 
	 * @param {string} type The type of asset to check if exists.
	 * @param {string} key The key of the asset.
	 * 
	 * @returns {boolean} Returns true if the asset exists or false otherwise.
	 */
	_exists(type, key) {

		if (this._assets[type][key]) return true;

		return false;

	}

}

/**
 * An asset represents any any assets that have yet to be loaded
 * or are already loaded with the appropriate properties to define it.
 * 
 * @since 2.0.0
 */
class Asset {

	/**
	 * @param {string} type The type of asset this asset is.
	 * @param {string} key The key for this asset to identify it in the cache.
	 * @param {string} src The path to this asset.
	 * @param {boolean} replace Whether this asset is replacing another asset or not.
	 */
	constructor(type, key, src, replace) {

		/**
		 * Type type of asset that this asset is.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {string}
		 * @readonly
		 */
		this._type = type;

		/**
		 * The unique key for this asset.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {string}
		 * @readonly
		 */
		this._key = key;

		/**
		 * The path to this asset.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {string}
		 * @readonly
		 */
		this._src = src;

		/**
		 * Whether this asset is replacing another asset or not.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {boolean}
		 * @readonly
		 */
		this._replace = replace;

	}

}

const codecs = {

	audio: {

		'mp3': 'audio/mpeg',
		'm4a': 'audio/mp4',
		'ogg': 'audio/ogg;codecs="vorbis"',
		'mp4': 'audio/mp4;codecs="mp4a.40.5"',
		'webm': 'audio/webm;codecs="vorbis"',
		'wav': 'audio/wav;codecs="1"'

	},

	video: {

		'ogg': 'video/ogg;codecs="theora, vorbis"',
		'mp4': 'video/mp4;codecs="avc1.4D401E, mp4a.40.2"',
		'webm': 'video/webm;codecs="vp8.0, vorbis"'

	}

};

/**
 * Loop through an array of audio/video srcs and return the first
 * one that the browser is capable of playing.
 * 
 * @since 2.0.0
 * 
 * @param {string} type The type of asset being checked, audio or video.
 * @param {Array<string>} srcs The srcs to check.
 * 
 * @returns {src} The src of the audio/video asset that can be played. 
 */
function getPlayableMedia(type, srcs) {

	let asset;

	const isAudio = type === 'audio';

	if (isAudio) asset = new Audio();

	else asset = document.createElement('video');

	for (const src of srcs) {

		const ext = src.slice(src.lastIndexOf('.') + 1);

		const codec = codecs[type][ext];

		if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') {

			return src;

		}

	}

}

/**
 * The loader is responsible for taking the provided assets, loading 
 * them asynchronously, and adding them to the cache.
 * 
 * @since 0.1.0
 */
class Loader {

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

/**
 * The retriever is used as a middle man to retrieve items from
 * the cache without the user actually interacting with the cache.
 * 
 * @since 0.1.0
 */
class Retriever {

	/**
	 * @param {MuskOx} muskox A reference to the MuskOx module.
	 */
	constructor(muskox) {

		/**
		 * A reference to the MuskOx cache.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {MuskOx}
		 * @readonly
		 */
		this._cache = muskox._cache;

	}

	/**
	 * Return an image asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the image to return.
	 * 
	 * @returns {HTMLImageElement}
	 */
	image(key) {

		return this._cache._get('image', key);

	}

	/**
	 * Return an audio asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the audio asset to return.
	 * 
	 * @returns {HTMLAudioElement}
	 */
	audio(key) {

		return this._cache._get('audio', key);

	}

	/**
	 * Return a video asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the video asset to return.
	 * 
	 * @returns {HTMLVideoElement}
	 */
	video(key) {

		return this._cache._get('video', key);

	}

	/**
	 * Return a text asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the text asset to return.
	 * 
	 * @returns {string}
	 */
	text(key) {

		return this._cache._get('text', key);

	}

	/**
	 * Return a binary asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the binary asset to return.
	 * 
	 * @returns {string}
	 */
	binary(key) {

		return this._cache._get('binary', key);

	}

	/**
	 * Return an object asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} key The key of the object asset to return.
	 * 
	 * @returns {Object}
	 */
	json(key) {

		return this._cache._get('json', key);

	}

}

/**
 * Listener represents a single event listener.
 * 
 * @since 0.1.0
 */
class Listener {

	/**
	 * @param {Function} fn The function that will be called when the listener is processed.
	 * @param {Object} context The context to use when calling the listener.
	 * @param {boolean} [once=false] Indicates whether this listener will only be called once and then destroyed automatically.
	 */
	constructor(fn, context, once = false) {

		/**
		 * A reference to the function that this listener will call.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Function}
		 * @readonly
		 */
		this._fn = fn;

		/**
		 * The context to use when calling this listener.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Object}
		 * @readonly
		 */
		this._context = context;

		/**
		 * Whether or not this listener will be automatically destroyed after being run once.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {boolean}
		 * @readonly
		 */
		this._once = once;

	}

}

/**
 * Compare two functions by turning them into strings and
 * removing whitespace/line-breaks and then checking equality.
 * 
 * @since 0.1.0
 * 
 * @param {Function} fn1 The first function.
 * @param {Function} fn2 The second function.
 * 
 * @returns {boolean} Returns true if the functions are equal and false otherwise.
 */
function compareFunctions(fn1, fn2) {

	const f1 = fn1.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');
	const f2 = fn2.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');

	if (f1 === f2) return true;

	return false;

}

class Eventverse {

	/**
	 * @param {number} [maxListenerCount=10] The max amount of listeners each event can have.
	 */
	constructor(maxListenerCount = 10) {

		/**
		 * A collection of all of the listeners created for this Eventverse.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Map}
		 * @readonly
		 */
		this._events = Object.create(null);

		/**
		 * The max amount of listeners each event can have.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {number}
		 * @readonly
		 * 
		 * @default 10
		 */
		this._maxListenerCount = maxListenerCount;

	}

	/**
	 * Return the max amount of listeners allowed for each event.
	 * 
	 * @since 0.1.0
	 * 
	 * @returns {number}
	 */
	get maxListenerCount() {

		return this._maxListenerCount;

	}

	/**
	 * Returns the number of listeners for a given event.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event.
	 * 
	 * @returns {number}
	 */
	listenerCount(event) {

		if (!this._exists(event)) {

			console.warn('[Eventverse][ListenerCount]: Unable to retrieve listener count for the given event because the given event does not exist');

			return;

		}

		return this._events[event].length;

	}

	/**
	 * Runs all of the listeners attached to this Eventverse with the event name
	 * and with the supplied arguments.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event to emit.
	 * @param {...*} args The arguments to pass to the listeners.
	 */
	emit(event, ...args) {

		if (!this._events[event]) return;

		const listeners = this._events[event];

		for (const listener of listeners) {

			listener._fn.call(listener._context, ...args);

			if (listener._once) {
				
				this.removeListener(event, listener._fn);

			}

		}

	}

	/**
	 * Adds a listener function for the given event.
	 * 
	 * @since 0.1.0
	 * 
	 * 
	 * @param {string} event The name of the event to add a listener for.
	 * @param {Function} fn The function to run when the event is emitted.
	 * @param {Object} context The context to use when calling the listener.
	 * @param {boolean} once Indicates whether this listener should only be called once.
	 * 
	 * @returns {Eventverse}
	 */
	addListener(event, fn, context, once) {

		if (typeof fn !== 'function') throw new TypeError('The listener must be a function');

		const listener = new Listener(fn, context, once);

		if (!this._events[event]) {
			
			this._events[event] = [];

		}
		else if (this._events[event].length === this._maxListenerCount) {

			console.warn(`[Eventverse][addListener]: The event ${event} already has the max amount of listeners.`);

			return;

		}

		this._events[event].push(listener);

		return this;

	}

	/**
	 * Removes a listener function for the given event.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event to remove the listener on.
	 * @param {Listener} listener The listener to remove from the event.
	 * 
	 * @returns {Eventverse}
	 */
	removeListener(event, listener) {

		if (!this._exists(event)) {

			console.warn('[Eventverse][removeListener]: Unable to remove listener for an event that doesnt exist.');

			return;

		}

		for (const eventListener of this._events[event]) {

			if (compareFunctions(eventListener._fn, listener)) {

				this._events[event] = this._events[event].filter(evListener => evListener != eventListener);

				break;

			}

		}

		return this;

	}

	/**
	 * Removes all listeners from a given event.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event to remove all listeners from.
	 * 
	 * @returns {Eventverse}
	 */
	removeAllListeners(event) {

		if (!this._exists(event)) {

			console.warn('[Eventverse][removeAllListeners]: Unable to remove listener for an event that doesnt exist.');

			return;

		}

		this._events[event] = [];

		return this;

	}

	/**
	 * Add a listener function that will only run once.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event to add a listener for.
	 * @param {Function} fn The function to run when the event is emitted.
	 * @param {Object} [context=this] The context to use when calling the listener.
	 * 
	 * @returns {Eventverse}
	 */
	once(event, fn, context = this) {

		this.addListener(event, fn, context, true);

		return this;

	}

	/**
	 * Adds a listener function for the given event.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} event The name of the event to add a listener for.
	 * @param {Function} fn The function to run when the event is emitted.
	 * @param {Object} [context=this] The context to use when calling the listener.
	 * 
	 * @returns {Eventverse}
	 */
	on(event, fn, context = this) {

		this.addListener(event, fn, context);

		return this;

	}

	/**
	 * Checks if an event exists.
	 * 
	 * @since 0.1.0
	 * @private
	 * 
	 * @param {string} event The name of the event.
	 * 
	 * @returns {boolean} Returns true if the event exists or false otherwise.
	 */
	_exists(event) {

		if (this._events[event]) return true;

		return false;

	}

}

/**
 * MuskOx is an easy to use, event-driven, and efficient asset preloader
 * for the browser.
 */
class MuskOx extends Eventverse {

	/**
	 * @param {Object} [options]
	 * @param {string} [options.crossOrigin=null] Sets a global cross-origin policy for all assets.
	 */
	constructor(options = {}) {

		super();

		/**
		 * Create an options object with default options for
		 * ones not specified.
		 * 
		 * @since 0.1.0
		 * 
		 * @property {Object}
		 * @readonly
		 */
		this._options = Object.assign({ crossOrigin: null }, options);

		/**
		 * Initialize the cache to store loaded assets.
		 * 
		 * @since 2.0.0
		 * 
		 * @property {Cache}
		 * @readonly
		 */
		this._cache = new Cache();

		/**
		 * Initialize the loading module which handles loading and
		 * adding assets to the cache.
		 * 
		 * @since 2.0.0
		 * 
		 * @property {Load}
		 * @readonly
		 */
		this.load = new Loader(this);

		/**
		 * Initialize the retriever module which is used as the middleman
		 * between the user and the cache.
		 * 
		 * @since 2.0.0
		 * @readonly
		 */
		this.get = new Retriever(this);

	}

	/**
	 * After defining all of the assets that should be loaded, this is used
	 * to let MuskOx know that it is time to begin the loading process.
	 * 
	 * @since 2.0.0
	 */
	start() {

		this.load._loadAssets();

	}

}

export default MuskOx;
