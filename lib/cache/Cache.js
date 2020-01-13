'use strict';
/**
 * The cache stores loaded assets until they are ready to be fetched.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "assets", {
      image: {},
      audio: {},
      video: {},
      text: {},
      binary: {},
      json: {}
    });
  }

  _createClass(Cache, [{
    key: "get",

    /**
     * Returns an asset from the cache.
     * 
     * @param {string} type The type of asset to retrieve
     * @param {string} key The name of the asset to retrieve.
     * 
     * @returns {HTMLElement|undefined} Returns the asset or undefined if it doesn't exist.
     */
    value: function get(type, key) {
      if (this._exists(type, key)) return this.assets[type][key];
    }
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

  }, {
    key: "set",
    value: function set(type, key, asset) {
      var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this._exists(type, key) && !replace) return false;
      this.assets[type][key] = asset;
      return true;
    }
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

  }, {
    key: "_exists",
    value: function _exists(type, key) {
      if (this.assets[type][key]) return true;
      return false;
    }
  }]);

  return Cache;
}();

exports["default"] = Cache;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9DYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZSIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsInRleHQiLCJiaW5hcnkiLCJqc29uIiwidHlwZSIsImtleSIsIl9leGlzdHMiLCJhc3NldHMiLCJhc3NldCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7b0NBTUw7QUFDWkMsTUFBQUEsS0FBSyxFQUFFLEVBREs7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLEVBRks7QUFHWkMsTUFBQUEsS0FBSyxFQUFFLEVBSEs7QUFJWkMsTUFBQUEsSUFBSSxFQUFFLEVBSk07QUFLWkMsTUFBQUEsTUFBTSxFQUFFLEVBTEk7QUFNWkMsTUFBQUEsSUFBSSxFQUFFO0FBTk0sSzs7Ozs7O0FBU2Y7Ozs7Ozs7O3dCQVFLQyxJLEVBQWNDLEcsRUFBd0M7QUFDeEQsVUFBSSxLQUFLQyxPQUFMLENBQWFGLElBQWIsRUFBbUJDLEdBQW5CLENBQUosRUFBNkIsT0FBTyxLQUFLRSxNQUFMLENBQVlILElBQVosRUFBa0JDLEdBQWxCLENBQVA7QUFDOUI7QUFFRjs7Ozs7Ozs7Ozs7Ozt3QkFVS0QsSSxFQUFjQyxHLEVBQWFHLEssRUFBdUQ7QUFBQSxVQUFuQ0MsT0FBbUMsdUVBQWhCLEtBQWdCO0FBQ3BGLFVBQUksS0FBS0gsT0FBTCxDQUFhRixJQUFiLEVBQW1CQyxHQUFuQixLQUEyQixDQUFDSSxPQUFoQyxFQUF5QyxPQUFPLEtBQVA7QUFFekMsV0FBS0YsTUFBTCxDQUFZSCxJQUFaLEVBQWtCQyxHQUFsQixJQUF5QkcsS0FBekI7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NEJBWWdCSixJLEVBQWNDLEcsRUFBc0I7QUFDbEQsVUFBSSxLQUFLRSxNQUFMLENBQVlILElBQVosRUFBa0JDLEdBQWxCLENBQUosRUFBNEIsT0FBTyxJQUFQO0FBRTVCLGFBQU8sS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogVGhlIGNhY2hlIHN0b3JlcyBsb2FkZWQgYXNzZXRzIHVudGlsIHRoZXkgYXJlIHJlYWR5IHRvIGJlIGZldGNoZWQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZSB7XHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGxvYWRlZCBhc3NldHMuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9XHJcblx0ICovXHJcbiAgYXNzZXRzOiBhbnkgPSB7XHJcbiAgICBpbWFnZToge30sXHJcbiAgICBhdWRpbzoge30sXHJcbiAgICB2aWRlbzoge30sXHJcbiAgICB0ZXh0OiB7fSxcclxuICAgIGJpbmFyeToge30sXHJcbiAgICBqc29uOiB7fVxyXG4gIH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYW4gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gcmV0cmlldmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBhc3NldCB0byByZXRyaWV2ZS5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBSZXR1cm5zIHRoZSBhc3NldCBvciB1bmRlZmluZWQgaWYgaXQgZG9lc24ndCBleGlzdC5cclxuXHQgKi9cclxuICBnZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMuX2V4aXN0cyh0eXBlLCBrZXkpKSByZXR1cm4gdGhpcy5hc3NldHNbdHlwZV1ba2V5XTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gYXNzZXQgdG8gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRvIGFkZC5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFzc2V0IFRoZSBhY3R1YWwgYXNzZXQgdG8gYWRkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGFzc2V0IHdpdGggYW4gZXhpc3Rpbmcga2V5IHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHRoZSBjdXJyZW50IGFzc2V0IG9yIG5vdC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBhc3NldCB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIHRoZSBjYWNoZSBvciBmYWxzZSBpZiB0aGUgYXNzZXQgYWxyZWFkeSBleGlzdHMgYW5kIGByZXBsYWNlYCBpcyBzZXQgdG8gZmFsc2UuXHJcblx0ICovXHJcbiAgc2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIGFzc2V0OiBIVE1MRWxlbWVudCwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5fZXhpc3RzKHR5cGUsIGtleSkgJiYgIXJlcGxhY2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFzc2V0c1t0eXBlXVtrZXldID0gYXNzZXQ7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGFuIGFzc2V0IGV4aXN0cyBpbiB0aGUgY2FjaGUuXHJcbiAgICogXHJcbiAgICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgdGhpcyBtb2R1bGUgdG8gc2F2ZSB0aW1lIGNoZWNraW5nIGZvciBhc3NldHMgdGhhdCBkb24ndCBleGlzdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRvIGNoZWNrIGlmIGV4aXN0cy5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGFzc2V0LlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGFzc2V0IGV4aXN0cyBvciBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfZXhpc3RzKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmFzc2V0c1t0eXBlXVtrZXldKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59Il19