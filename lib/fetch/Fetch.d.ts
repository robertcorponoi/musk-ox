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
    private _cache;
    /**
     * @param {Cache} cache A reference to the cache.
     */
    constructor(cache: Cache);
    /**
     * Returns an image asset from the cache.
     *
     * @param {string} key The key of the image asset to return.
     *
     * @returns {HTMLElement} Returns the image asset as a HTML image element.
     */
    image(key: string): (HTMLElement | undefined);
    /**
     * Returns an audio asset from the cache.
     *
     * @param {string} key The key of the audio asset to return.
     *
     * @returns {HTMLElement} Returns the audio asset as a HTML audio element.
     */
    audio(key: string): (HTMLElement | undefined);
    /**
     * Returns a video asset from the cache.
     *
     * @param {string} key The key of the video asset to return.
     *
     * @returns {HTMLElement} Returns the video asset as an HTML video element.
     */
    video(key: string): (HTMLElement | undefined);
    /**
     * Returns a text asset from the cache.
     *
     * @param {string} key The key of the text asset to return.
     *
     * @returns {HTMLElement} Returns the text asset.
     */
    text(key: string): (HTMLElement | undefined);
    /**
     * Returns a binary asset from the cache.
     *
     * @param {string} key The key of the binary asset to return.
     *
     * @returns {HTMLElement} Returns the binary asset.
     */
    binary(key: string): (HTMLElement | undefined);
    /**
     * Return a json asset from the cache.
     *
     * @param {string} key The key of the json asset to return.
     *
     * @returns {HTMLElement} Returns the json asset.
     */
    json(key: string): (HTMLElement | undefined);
}
