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
     * @since 0.1.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9DYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZSIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsInRleHQiLCJiaW5hcnkiLCJqc29uIiwidHlwZSIsImtleSIsIl9leGlzdHMiLCJhc3NldHMiLCJhc3NldCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7b0NBT0w7QUFDWkMsTUFBQUEsS0FBSyxFQUFFLEVBREs7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLEVBRks7QUFHWkMsTUFBQUEsS0FBSyxFQUFFLEVBSEs7QUFJWkMsTUFBQUEsSUFBSSxFQUFFLEVBSk07QUFLWkMsTUFBQUEsTUFBTSxFQUFFLEVBTEk7QUFNWkMsTUFBQUEsSUFBSSxFQUFFO0FBTk0sSzs7Ozs7O0FBU2Y7Ozs7Ozs7O3dCQVFLQyxJLEVBQWNDLEcsRUFBd0M7QUFFeEQsVUFBSSxLQUFLQyxPQUFMLENBQWFGLElBQWIsRUFBbUJDLEdBQW5CLENBQUosRUFBNkIsT0FBTyxLQUFLRSxNQUFMLENBQVlILElBQVosRUFBa0JDLEdBQWxCLENBQVA7QUFFOUI7QUFFRjs7Ozs7Ozs7Ozs7Ozs7O3dCQVlLRCxJLEVBQWNDLEcsRUFBYUcsSyxFQUF1RDtBQUFBLFVBQW5DQyxPQUFtQyx1RUFBaEIsS0FBZ0I7QUFFcEYsVUFBSSxLQUFLSCxPQUFMLENBQWFGLElBQWIsRUFBbUJDLEdBQW5CLEtBQTJCLENBQUNJLE9BQWhDLEVBQXlDLE9BQU8sS0FBUDtBQUV6QyxXQUFLRixNQUFMLENBQVlILElBQVosRUFBa0JDLEdBQWxCLElBQXlCRyxLQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs0QkFZZ0JKLEksRUFBY0MsRyxFQUFzQjtBQUVsRCxVQUFJLEtBQUtFLE1BQUwsQ0FBWUgsSUFBWixFQUFrQkMsR0FBbEIsQ0FBSixFQUE0QixPQUFPLElBQVA7QUFFNUIsYUFBTyxLQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FjaGUgc3RvcmVzIGxvYWRlZCBhc3NldHMgdW50aWwgdGhleSBhcmUgcmVhZHkgdG8gYmUgZmV0Y2hlZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcclxuXHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGxvYWRlZCBhc3NldHMuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9XHJcblx0ICovXHJcbiAgYXNzZXRzOiBhbnkgPSB7XHJcbiAgICBpbWFnZToge30sXHJcbiAgICBhdWRpbzoge30sXHJcbiAgICB2aWRlbzoge30sXHJcbiAgICB0ZXh0OiB7fSxcclxuICAgIGJpbmFyeToge30sXHJcbiAgICBqc29uOiB7fVxyXG4gIH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYW4gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gcmV0cmlldmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBhc3NldCB0byByZXRyaWV2ZS5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBSZXR1cm5zIHRoZSBhc3NldCBvciB1bmRlZmluZWQgaWYgaXQgZG9lc24ndCBleGlzdC5cclxuXHQgKi9cclxuICBnZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuICAgIGlmICh0aGlzLl9leGlzdHModHlwZSwga2V5KSkgcmV0dXJuIHRoaXMuYXNzZXRzW3R5cGVdW2tleV07XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhbiBhc3NldCB0byB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gYWRkLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYXNzZXQgVGhlIGFjdHVhbCBhc3NldCB0byBhZGQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXNzZXQgd2l0aCBhbiBleGlzdGluZyBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggdGhlIGN1cnJlbnQgYXNzZXQgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGFzc2V0IHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gdGhlIGNhY2hlIG9yIGZhbHNlIGlmIHRoZSBhc3NldCBhbHJlYWR5IGV4aXN0cyBhbmQgYHJlcGxhY2VgIGlzIHNldCB0byBmYWxzZS5cclxuXHQgKi9cclxuICBzZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYXNzZXQ6IEhUTUxFbGVtZW50LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAodGhpcy5fZXhpc3RzKHR5cGUsIGtleSkgJiYgIXJlcGxhY2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFzc2V0c1t0eXBlXVtrZXldID0gYXNzZXQ7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiBhbiBhc3NldCBleGlzdHMgaW4gdGhlIGNhY2hlLlxyXG4gICAqIFxyXG4gICAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoaXMgbW9kdWxlIHRvIHNhdmUgdGltZSBjaGVja2luZyBmb3IgYXNzZXRzIHRoYXQgZG9uJ3QgZXhpc3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0byBjaGVjayBpZiBleGlzdHMuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBhc3NldC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBhc3NldCBleGlzdHMgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2V4aXN0cyh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgaWYgKHRoaXMuYXNzZXRzW3R5cGVdW2tleV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxufSJdfQ==