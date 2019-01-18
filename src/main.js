'use strict'

import Cache from './cache/Cache.js';
import Loader from './load/Loader.js';
import Retriever from './retrieve/Retriever.js';
import Eventverse from '../node_modules/eventverse/eventverse.js';

/**
 * MuskOx is an easy to use, event-driven, and efficient asset preloader
 * for the browser.
 */
export default class MuskOx extends Eventverse {

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