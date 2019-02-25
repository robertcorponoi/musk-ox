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
    assets: any;
    constructor();
    /**
     * Initialize the properties of the assets Object so that assets can
     * be saved in their proper places.
     *
     * @since 0.1.0
     */
    private boot;
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
    get(type: string, key: string): (HTMLElement | undefined);
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
    set(type: string, key: string, asset: HTMLElement, replace?: boolean): boolean;
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
    private exists;
}
