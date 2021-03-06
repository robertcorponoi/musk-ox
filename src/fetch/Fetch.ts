'use strict'

import Cache from '../cache/Cache';

/**
 * Provides an API for the cache that allows the user to easily retrieve cached assets.
 */
export default class Fetch {
	/**
	 * A reference to the cache.
	 * 
	 * @property {Cache}
   * 
	 * @private
	 */
	private _cache: Cache;

	/**
	 * @param {Cache} cache A reference to the cache.
	 */
	constructor(cache: Cache) {
		this._cache = cache;
	}

	/**
	 * Returns an image asset from the cache.
	 * 
	 * @param {string} key The key of the image asset to return.
	 * 
	 * @returns {HTMLElement} Returns the image asset as a HTML image element.
	 */
	image(key: string): (HTMLElement | undefined) {
		return this._cache.get('image', key);
	}

	/**
	 * Returns an audio asset from the cache.
	 * 
	 * @param {string} key The key of the audio asset to return.
	 * 
	 * @returns {HTMLElement} Returns the audio asset as a HTML audio element.
	 */
	audio(key: string): (HTMLElement | undefined) {
		return this._cache.get('audio', key);
	}

	/**
	 * Returns an audio buffer from the cache.
	 * 
	 * @param {string} key The key of the audio buffer to return.
	 * 
	 * @returns {AudioBuffer} Returns the audio buffer.
	 */
	audioBuffer(key: string): (AudioBuffer | undefined) {
		return this._cache.get('audioBuffer', key);
	}

	/**
	 * Returns a video asset from the cache.
	 * 
	 * @param {string} key The key of the video asset to return.
	 * 
	 * @returns {HTMLElement} Returns the video asset as an HTML video element.
	 */
	video(key: string): (HTMLElement | undefined) {
		return this._cache.get('video', key);
	}

	/**
	 * Returns a text asset from the cache.
	 * 
	 * @param {string} key The key of the text asset to return.
	 * 
	 * @returns {HTMLElement} Returns the text asset.
	 */
	text(key: string): (HTMLElement | undefined) {
		return this._cache.get('text', key);
	}

	/**
	 * Returns a binary asset from the cache.
	 * 
	 * @param {string} key The key of the binary asset to return.
	 * 
	 * @returns {HTMLElement} Returns the binary asset.
	 */
	binary(key: string): (HTMLElement | undefined) {
		return this._cache.get('binary', key);
	}

	/**
	 * Return a json asset from the cache.
	 * 
	 * @param {string} key The key of the json asset to return.
	 * 
	 * @returns {HTMLElement} Returns the json asset.
	 */
	json(key: string): (HTMLElement | undefined) {
		return this._cache.get('json', key);
	}

	/**
	 * Returns an array buffer from the cache.
	 * 
	 * @param {string} key The key of the array buffer to return.
	 * 
	 * @returns {ArrayBuffer} Returns the array buffer.
	 */
	arrayBuffer(key: string): (ArrayBuffer | undefined) {
		// @ts-ignore
		return this._cache.get('arrayBuffer', key);
	}
}