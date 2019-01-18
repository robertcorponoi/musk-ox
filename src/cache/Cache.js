'use strict'

/**
 * The cache is used to store loaded assets until they are
 * ready to be used.
 * 
 * @since 0.1.0
 */
export default class Cache {

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