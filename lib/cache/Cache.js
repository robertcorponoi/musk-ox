'use strict';
/**
 * The Cache Object stores loaded assets until they are ready
 * to be used.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cache =
/*#__PURE__*/
function () {
  /**
   * All loaded assets are stored here.
   * 
   * @since 0.1.0
   * 
   * @property {Object}
   */
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "assets", new Object(null));

    this.boot();
  }
  /**
   * Initialize the properties of the assets Object so that assets can
   * be saved in their proper places.
   * 
   * @since 0.1.0
   */


  _createClass(Cache, [{
    key: "boot",
    value: function boot() {
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

  }, {
    key: "get",
    value: function get(type, key) {
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

  }, {
    key: "set",
    value: function set(type, key, asset) {
      var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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

  }, {
    key: "exists",
    value: function exists(type, key) {
      if (this.assets[type][key]) return true;
      return false;
    }
  }]);

  return Cache;
}();

exports.default = Cache;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9DYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZSIsIk9iamVjdCIsImJvb3QiLCJhc3NldHMiLCJpbWFnZSIsImF1ZGlvIiwidmlkZW8iLCJ0ZXh0IiwiYmluYXJ5IiwianNvbiIsInR5cGUiLCJrZXkiLCJleGlzdHMiLCJhc3NldCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUJBLEs7OztBQUVwQjs7Ozs7OztBQVNBLG1CQUFjO0FBQUE7O0FBQUEsb0NBRkEsSUFBSUMsTUFBSixDQUFXLElBQVgsQ0FFQTs7QUFFYixTQUFLQyxJQUFMO0FBRUE7QUFFRDs7Ozs7Ozs7OzsyQkFNZTtBQUVkLFdBQUtDLE1BQUwsQ0FBWUMsS0FBWixHQUFvQixJQUFJSCxNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixJQUFJSixNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUcsS0FBWixHQUFvQixJQUFJTCxNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUksSUFBWixHQUFtQixJQUFJTixNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUssTUFBWixHQUFxQixJQUFJUCxNQUFKLENBQVcsSUFBWCxDQUFyQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWU0sSUFBWixHQUFtQixJQUFJUixNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7d0JBVUlTLEksRUFBY0MsRyxFQUF3QztBQUV6RCxVQUFJLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixFQUFrQkMsR0FBbEIsQ0FBSixFQUE0QixPQUFPLEtBQUtSLE1BQUwsQ0FBWU8sSUFBWixFQUFrQkMsR0FBbEIsQ0FBUDtBQUU1QjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O3dCQWFJRCxJLEVBQWNDLEcsRUFBYUUsSyxFQUF1RDtBQUFBLFVBQW5DQyxPQUFtQyx1RUFBaEIsS0FBZ0I7QUFFckYsVUFBSSxLQUFLRixNQUFMLENBQVlGLElBQVosRUFBa0JDLEdBQWxCLEtBQTBCLENBQUNHLE9BQS9CLEVBQXdDLE9BQU8sS0FBUDtBQUV4QyxXQUFLWCxNQUFMLENBQVlPLElBQVosRUFBa0JDLEdBQWxCLElBQXlCRSxLQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzJCQVdlSCxJLEVBQWNDLEcsRUFBc0I7QUFFbEQsVUFBSSxLQUFLUixNQUFMLENBQVlPLElBQVosRUFBa0JDLEdBQWxCLENBQUosRUFBNEIsT0FBTyxJQUFQO0FBRTVCLGFBQU8sS0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vKipcbiAqIFRoZSBDYWNoZSBPYmplY3Qgc3RvcmVzIGxvYWRlZCBhc3NldHMgdW50aWwgdGhleSBhcmUgcmVhZHlcbiAqIHRvIGJlIHVzZWQuXG4gKiBcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pIDxyb2JlcnRjb3Jwb25vaUBnbWFpbC5jb20+XG4gKiBcbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcblxuXHQvKipcblx0ICogQWxsIGxvYWRlZCBhc3NldHMgYXJlIHN0b3JlZCBoZXJlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge09iamVjdH1cblx0ICovXG5cdGFzc2V0czogYW55ID0gbmV3IE9iamVjdChudWxsKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMuYm9vdCgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzZXRzIE9iamVjdCBzbyB0aGF0IGFzc2V0cyBjYW5cblx0ICogYmUgc2F2ZWQgaW4gdGhlaXIgcHJvcGVyIHBsYWNlcy5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKi9cblx0cHJpdmF0ZSBib290KCkge1xuXG5cdFx0dGhpcy5hc3NldHMuaW1hZ2UgPSBuZXcgT2JqZWN0KG51bGwpO1xuXG5cdFx0dGhpcy5hc3NldHMuYXVkaW8gPSBuZXcgT2JqZWN0KG51bGwpO1xuXG5cdFx0dGhpcy5hc3NldHMudmlkZW8gPSBuZXcgT2JqZWN0KG51bGwpO1xuXG5cdFx0dGhpcy5hc3NldHMudGV4dCA9IG5ldyBPYmplY3QobnVsbCk7XG5cblx0XHR0aGlzLmFzc2V0cy5iaW5hcnkgPSBuZXcgT2JqZWN0KG51bGwpO1xuXG5cdFx0dGhpcy5hc3NldHMuanNvbiA9IG5ldyBPYmplY3QobnVsbCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0byByZXRyaWV2ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBhc3NldCB0byByZXRyaWV2ZS5cblx0ICogXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHx1bmRlZmluZWR9IFJldHVybnMgdGhlIGFzc2V0IG9yIHVuZGVmaW5lZCBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuXHQgKi9cblx0Z2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiAoSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcblxuXHRcdGlmICh0aGlzLmV4aXN0cyh0eXBlLCBrZXkpKSByZXR1cm4gdGhpcy5hc3NldHNbdHlwZV1ba2V5XTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYW4gYXNzZXQgdG8gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIEBwcml2YXRlXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0byBhZGQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXNzZXQuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFzc2V0IFRoZSBhY3R1YWwgYXNzZXQgdG8gYWRkLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhc3NldCB3aXRoIGFuIGV4aXN0aW5nIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgY3VycmVudCBhc3NldCBvciBub3QuXG5cdCAqIFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBhc3NldCB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIHRoZSBjYWNoZSBvciBmYWxzZSBpZiB0aGUgYXNzZXQgYWxyZWFkeSBleGlzdHMgYW5kIGByZXBsYWNlYCBpcyBzZXQgdG8gZmFsc2UuXG5cdCAqL1xuXHRzZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYXNzZXQ6IEhUTUxFbGVtZW50LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLmV4aXN0cyh0eXBlLCBrZXkpICYmICFyZXBsYWNlKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLmFzc2V0c1t0eXBlXVtrZXldID0gYXNzZXQ7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIHRvIHNlZSBpZiBhbiBhc3NldCBleGlzdHMgaW4gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgdGhlIGNhY2hlIHRvIHNhdmUgY2hlY2tpbmcgZm9yIGFzc2V0c1xuXHQgKiB0aGF0IGRvbid0IGV4aXN0LlxuXHQgKiBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gY2hlY2sgaWYgZXhpc3RzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGFzc2V0LlxuXHQgKiBcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgYXNzZXQgZXhpc3RzIG9yIGZhbHNlIG90aGVyd2lzZS5cblx0ICovXG5cdHByaXZhdGUgZXhpc3RzKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLmFzc2V0c1t0eXBlXVtrZXldKSByZXR1cm4gdHJ1ZTtcblxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR9XG5cbn0iXX0=