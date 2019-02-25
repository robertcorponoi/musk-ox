import Cache from '../cache/Cache';
/**
 * The Fetch Object (previously known as the Retriever) is a wrapper
 * around the cache that allows easy retrieval of cached assets.
 *
 * @author Robert Corponoi
 *
 * @version 1.0.0
 */
export default class Fetch {
    /**
     * A reference to the cache.
     *
     * @since 0.1.0
     *
     * @property {Cache}
     * @readonly
     */
    private cache;
    /**
     * @param {Cache} cache The cache initialized in the main module.
     */
    constructor(cache: Cache);
    /**
     * Return an image asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the image to return.
     *
     * @returns {HTMLElement}
     */
    image(key: string): (HTMLElement | undefined);
    /**
     * Return an audio asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the audio to return.
     *
     * @returns {HTMLElement}
     */
    audio(key: string): (HTMLElement | undefined);
    /**
     * Return a video asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the video to return.
     *
     * @returns {HTMLElement}
     */
    video(key: string): (HTMLElement | undefined);
    /**
     * Return a text asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the text to return.
     *
     * @returns {HTMLElement}
     */
    text(key: string): (HTMLElement | undefined);
    /**
     * Return a binary asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the binary to return.
     *
     * @returns {HTMLElement}
     */
    binary(key: string): (HTMLElement | undefined);
    /**
     * Return a json asset from the cache.
     *
     * @since 0.1.0
     *
     * @param {string} key The key of the json to return.
     *
     * @returns {HTMLElement}
     */
    json(key: string): (HTMLElement | undefined);
}
