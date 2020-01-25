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
      json: {},
      arrayBuffer: {},
      audioBuffer: {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9DYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZSIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsInRleHQiLCJiaW5hcnkiLCJqc29uIiwiYXJyYXlCdWZmZXIiLCJhdWRpb0J1ZmZlciIsInR5cGUiLCJrZXkiLCJfZXhpc3RzIiwiYXNzZXRzIiwiYXNzZXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7O29DQU1MO0FBQ1pDLE1BQUFBLEtBQUssRUFBRSxFQURLO0FBRVpDLE1BQUFBLEtBQUssRUFBRSxFQUZLO0FBR1pDLE1BQUFBLEtBQUssRUFBRSxFQUhLO0FBSVpDLE1BQUFBLElBQUksRUFBRSxFQUpNO0FBS1pDLE1BQUFBLE1BQU0sRUFBRSxFQUxJO0FBTWRDLE1BQUFBLElBQUksRUFBRSxFQU5RO0FBT2RDLE1BQUFBLFdBQVcsRUFBRSxFQVBDO0FBUWRDLE1BQUFBLFdBQVcsRUFBRTtBQVJDLEs7Ozs7OztBQVdmOzs7Ozs7Ozt3QkFRS0MsSSxFQUFjQyxHLEVBQWtCO0FBQ2xDLFVBQUksS0FBS0MsT0FBTCxDQUFhRixJQUFiLEVBQW1CQyxHQUFuQixDQUFKLEVBQTZCLE9BQU8sS0FBS0UsTUFBTCxDQUFZSCxJQUFaLEVBQWtCQyxHQUFsQixDQUFQO0FBQzlCO0FBRUY7Ozs7Ozs7Ozs7Ozs7d0JBVUtELEksRUFBY0MsRyxFQUFhRyxLLEVBQStDO0FBQUEsVUFBbkNDLE9BQW1DLHVFQUFoQixLQUFnQjtBQUM1RSxVQUFJLEtBQUtILE9BQUwsQ0FBYUYsSUFBYixFQUFtQkMsR0FBbkIsS0FBMkIsQ0FBQ0ksT0FBaEMsRUFBeUMsT0FBTyxLQUFQO0FBRTNDLFdBQUtGLE1BQUwsQ0FBWUgsSUFBWixFQUFrQkMsR0FBbEIsSUFBeUJHLEtBQXpCO0FBRUUsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzRCQVlnQkosSSxFQUFjQyxHLEVBQXNCO0FBQ2xELFVBQUksS0FBS0UsTUFBTCxDQUFZSCxJQUFaLEVBQWtCQyxHQUFsQixDQUFKLEVBQTRCLE9BQU8sSUFBUDtBQUU1QixhQUFPLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjYWNoZSBzdG9yZXMgbG9hZGVkIGFzc2V0cyB1bnRpbCB0aGV5IGFyZSByZWFkeSB0byBiZSBmZXRjaGVkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUge1xyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2FkZWQgYXNzZXRzLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fVxyXG5cdCAqL1xyXG4gIGFzc2V0czogYW55ID0ge1xyXG4gICAgaW1hZ2U6IHt9LFxyXG4gICAgYXVkaW86IHt9LFxyXG4gICAgdmlkZW86IHt9LFxyXG4gICAgdGV4dDoge30sXHJcbiAgICBiaW5hcnk6IHt9LFxyXG5cdFx0anNvbjoge30sXHJcblx0XHRhcnJheUJ1ZmZlcjoge30sXHJcblx0XHRhdWRpb0J1ZmZlcjoge30sXHJcbiAgfTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbiBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0byByZXRyaWV2ZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIGFzc2V0IHRvIHJldHJpZXZlLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHx1bmRlZmluZWR9IFJldHVybnMgdGhlIGFzc2V0IG9yIHVuZGVmaW5lZCBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG5cdCAqL1xyXG4gIGdldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICh0aGlzLl9leGlzdHModHlwZSwga2V5KSkgcmV0dXJuIHRoaXMuYXNzZXRzW3R5cGVdW2tleV07XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGFzc2V0IHRvIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0byBhZGQuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhc3NldCBUaGUgYWN0dWFsIGFzc2V0IHRvIGFkZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhc3NldCB3aXRoIGFuIGV4aXN0aW5nIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgY3VycmVudCBhc3NldCBvciBub3QuXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgYXNzZXQgd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZCB0byB0aGUgY2FjaGUgb3IgZmFsc2UgaWYgdGhlIGFzc2V0IGFscmVhZHkgZXhpc3RzIGFuZCBgcmVwbGFjZWAgaXMgc2V0IHRvIGZhbHNlLlxyXG5cdCAqL1xyXG4gIHNldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhc3NldDogYW55LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLl9leGlzdHModHlwZSwga2V5KSAmJiAhcmVwbGFjZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuYXNzZXRzW3R5cGVdW2tleV0gPSBhc3NldDtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYW4gYXNzZXQgZXhpc3RzIGluIHRoZSBjYWNoZS5cclxuICAgKiBcclxuICAgKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBieSB0aGlzIG1vZHVsZSB0byBzYXZlIHRpbWUgY2hlY2tpbmcgZm9yIGFzc2V0cyB0aGF0IGRvbid0IGV4aXN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdG8gY2hlY2sgaWYgZXhpc3RzLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXNzZXQuXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgYXNzZXQgZXhpc3RzIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuICBwcml2YXRlIF9leGlzdHModHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuYXNzZXRzW3R5cGVdW2tleV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0iXX0=