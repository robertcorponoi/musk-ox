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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9DYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZSIsIk9iamVjdCIsImJvb3QiLCJhc3NldHMiLCJpbWFnZSIsImF1ZGlvIiwidmlkZW8iLCJ0ZXh0IiwiYmluYXJ5IiwianNvbiIsInR5cGUiLCJrZXkiLCJleGlzdHMiLCJhc3NldCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUJBLEs7OztBQUVwQjs7Ozs7OztBQVNBLG1CQUFjO0FBQUE7O0FBQUEsb0NBRkEsSUFBSUMsTUFBSixDQUFXLElBQVgsQ0FFQTs7QUFFYixTQUFLQyxJQUFMO0FBRUE7QUFFRDs7Ozs7Ozs7OzsyQkFNZTtBQUVkLFdBQUtDLE1BQUwsQ0FBWUMsS0FBWixHQUFvQixJQUFJSCxNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixJQUFJSixNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUcsS0FBWixHQUFvQixJQUFJTCxNQUFKLENBQVcsSUFBWCxDQUFwQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUksSUFBWixHQUFtQixJQUFJTixNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWUssTUFBWixHQUFxQixJQUFJUCxNQUFKLENBQVcsSUFBWCxDQUFyQjtBQUVBLFdBQUtFLE1BQUwsQ0FBWU0sSUFBWixHQUFtQixJQUFJUixNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7d0JBVUlTLEksRUFBY0MsRyxFQUF3QztBQUV6RCxVQUFJLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixFQUFrQkMsR0FBbEIsQ0FBSixFQUE0QixPQUFPLEtBQUtSLE1BQUwsQ0FBWU8sSUFBWixFQUFrQkMsR0FBbEIsQ0FBUDtBQUU1QjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O3dCQWFJRCxJLEVBQWNDLEcsRUFBYUUsSyxFQUF1RDtBQUFBLFVBQW5DQyxPQUFtQyx1RUFBaEIsS0FBZ0I7QUFFckYsVUFBSSxLQUFLRixNQUFMLENBQVlGLElBQVosRUFBa0JDLEdBQWxCLEtBQTBCLENBQUNHLE9BQS9CLEVBQXdDLE9BQU8sS0FBUDtBQUV4QyxXQUFLWCxNQUFMLENBQVlPLElBQVosRUFBa0JDLEdBQWxCLElBQXlCRSxLQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzJCQVdlSCxJLEVBQWNDLEcsRUFBc0I7QUFFbEQsVUFBSSxLQUFLUixNQUFMLENBQVlPLElBQVosRUFBa0JDLEdBQWxCLENBQUosRUFBNEIsT0FBTyxJQUFQO0FBRTVCLGFBQU8sS0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcbi8qKlxyXG4gKiBUaGUgQ2FjaGUgT2JqZWN0IHN0b3JlcyBsb2FkZWQgYXNzZXRzIHVudGlsIHRoZXkgYXJlIHJlYWR5XHJcbiAqIHRvIGJlIHVzZWQuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMC4xLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcclxuXHJcblx0LyoqXHJcblx0ICogQWxsIGxvYWRlZCBhc3NldHMgYXJlIHN0b3JlZCBoZXJlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGFzc2V0czogYW55ID0gbmV3IE9iamVjdChudWxsKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5ib290KCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzZXRzIE9iamVjdCBzbyB0aGF0IGFzc2V0cyBjYW5cclxuXHQgKiBiZSBzYXZlZCBpbiB0aGVpciBwcm9wZXIgcGxhY2VzLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYm9vdCgpIHtcclxuXHJcblx0XHR0aGlzLmFzc2V0cy5pbWFnZSA9IG5ldyBPYmplY3QobnVsbCk7XHJcblxyXG5cdFx0dGhpcy5hc3NldHMuYXVkaW8gPSBuZXcgT2JqZWN0KG51bGwpO1xyXG5cclxuXHRcdHRoaXMuYXNzZXRzLnZpZGVvID0gbmV3IE9iamVjdChudWxsKTtcclxuXHJcblx0XHR0aGlzLmFzc2V0cy50ZXh0ID0gbmV3IE9iamVjdChudWxsKTtcclxuXHJcblx0XHR0aGlzLmFzc2V0cy5iaW5hcnkgPSBuZXcgT2JqZWN0KG51bGwpO1xyXG5cclxuXHRcdHRoaXMuYXNzZXRzLmpzb24gPSBuZXcgT2JqZWN0KG51bGwpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYW4gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gcmV0cmlldmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBhc3NldCB0byByZXRyaWV2ZS5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBSZXR1cm5zIHRoZSBhc3NldCBvciB1bmRlZmluZWQgaWYgaXQgZG9lc24ndCBleGlzdC5cclxuXHQgKi9cclxuXHRnZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdGlmICh0aGlzLmV4aXN0cyh0eXBlLCBrZXkpKSByZXR1cm4gdGhpcy5hc3NldHNbdHlwZV1ba2V5XTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGFzc2V0IHRvIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRvIGFkZC5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFzc2V0IFRoZSBhY3R1YWwgYXNzZXQgdG8gYWRkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGFzc2V0IHdpdGggYW4gZXhpc3Rpbmcga2V5IHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHRoZSBjdXJyZW50IGFzc2V0IG9yIG5vdC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBhc3NldCB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIHRoZSBjYWNoZSBvciBmYWxzZSBpZiB0aGUgYXNzZXQgYWxyZWFkeSBleGlzdHMgYW5kIGByZXBsYWNlYCBpcyBzZXQgdG8gZmFsc2UuXHJcblx0ICovXHJcblx0c2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIGFzc2V0OiBIVE1MRWxlbWVudCwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXhpc3RzKHR5cGUsIGtleSkgJiYgIXJlcGxhY2UpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmFzc2V0c1t0eXBlXVtrZXldID0gYXNzZXQ7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgdG8gc2VlIGlmIGFuIGFzc2V0IGV4aXN0cyBpbiB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgdGhlIGNhY2hlIHRvIHNhdmUgY2hlY2tpbmcgZm9yIGFzc2V0c1xyXG5cdCAqIHRoYXQgZG9uJ3QgZXhpc3QuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gY2hlY2sgaWYgZXhpc3RzLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXNzZXQuXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgYXNzZXQgZXhpc3RzIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGV4aXN0cyh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXNzZXRzW3R5cGVdW2tleV0pIHJldHVybiB0cnVlO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==