'use strict'

/**
 * An asset represents any any assets that have yet to be loaded
 * or are already loaded with the appropriate properties to define it.
 * 
 * @since 2.0.0
 */
export default class Asset {

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