'use strict'

/**
 * The retriever is used as a middle man to retrieve items from
 * the cache without the user actually interacting with the cache.
 * 
 * @since 0.1.0
 */
export default class Retriever {

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