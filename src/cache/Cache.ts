'use strict'
/**
 * The Cache Object stores loaded assets until they are ready
 * to be used.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */
export default class Cache {

	/**
	 * All loaded assets are stored here.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {Object}
	 */
	assets: any = new Object(null);

	constructor() {

		this.boot();

	}

	/**
	 * Initialize the properties of the assets Object so that assets can
	 * be saved in their proper places.
	 * 
	 * @since 0.1.0
	 */
	private boot() {

		this.assets.image = new Object(null);

		this.assets.audio = new Object(null);

		this.assets.video = new Object(null);

		this.assets.text = new Object(null);

		this.assets.binary = new Object(null);

		this.assets.json = new Object(null);

	}

	/**
	 * Returns an asset from the cache.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {string} type The type of asset to retrieve
	 * @param {string} key The name of the asset to retrieve.
	 * 
	 * @returns {HTMLElement|undefined} Returns the asset or undefined if it doesn't exist.
	 */
	get(type: string, key: string): (HTMLElement | undefined) {

		if (this.exists(type, key)) return this.assets[type][key];

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
	set(type: string, key: string, asset: HTMLElement, replace: boolean = false): boolean {

		if (this.exists(type, key) && !replace) return false;

		this.assets[type][key] = asset;

		return true;

	}

	/**
	 * Check to see if an asset exists in the cache.
	 * 
	 * This is used internally by the cache to save checking for assets
	 * that don't exist.
	 * 
	 * @param {string} type The type of asset to check if exists.
	 * @param {string} key The key of the asset.
	 * 
	 * @returns {boolean} Returns true if the asset exists or false otherwise.
	 */
	private exists(type: string, key: string): boolean {

		if (this.assets[type][key]) return true;

		return false;

	}

}