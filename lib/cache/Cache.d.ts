/**
 * The cache stores loaded assets until they are ready to be fetched.
 */
export default class Cache {
    /**
     * A reference to the loaded assets.
     *
     * @property {Object}
     */
    assets: any;
    /**
     * Returns an asset from the cache.
     *
     * @param {string} type The type of asset to retrieve
     * @param {string} key The name of the asset to retrieve.
     *
     * @returns {HTMLElement|undefined} Returns the asset or undefined if it doesn't exist.
     */
    get(type: string, key: string): any;
    /**
     * Adds an asset to the cache.
     *
     * @param {string} type The type of asset to add.
     * @param {string} key The key of the asset.
     * @param {HTMLElement} asset The actual asset to add.
     * @param {boolean} [replace=false] Indicates whether an asset with an existing key should be replaced with the current asset or not.
     *
     * @returns {boolean} Returns true if the asset was successfully added to the cache or false if the asset already exists and `replace` is set to false.
     */
    set(type: string, key: string, asset: any, replace?: boolean): boolean;
    /**
     * Checks to see if an asset exists in the cache.
     *
     * This is used internally by this module to save time checking for assets that don't exist.
     *
     * @private
       *
       * @param {string} type The type of asset to check if exists.
       * @param {string} key The key of the asset.
       *
       * @returns {boolean} Returns true if the asset exists or false otherwise.
       */
    private _exists;
}
