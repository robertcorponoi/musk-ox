'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Provides an API for the cache that allows the user to easily retrieve cached assets.
 */
var Fetch =
/*#__PURE__*/
function () {
  /**
   * A reference to the cache.
   * 
   * @property {Cache}
    * 
   * @private
   */

  /**
   * @param {Cache} cache A reference to the cache.
   */
  function Fetch(cache) {
    _classCallCheck(this, Fetch);

    _defineProperty(this, "cache", void 0);

    this.cache = cache;
  }
  /**
   * Returns an image asset from the cache.
   * 
   * @param {string} key The key of the image asset to return.
   * 
   * @returns {HTMLElement} Returns the image asset as a HTML image element.
   */


  _createClass(Fetch, [{
    key: "image",
    value: function image(key) {
      return this.cache.get('image', key);
    }
    /**
     * Returns an audio asset from the cache.
     * 
     * @param {string} key The key of the audio asset to return.
     * 
     * @returns {HTMLElement} Returns the audio asset as a HTML audio element.
     */

  }, {
    key: "audio",
    value: function audio(key) {
      return this.cache.get('audio', key);
    }
    /**
     * Returns a video asset from the cache.
     * 
     * @param {string} key The key of the video asset to return.
     * 
     * @returns {HTMLElement} Returns the video asset as an HTML video element.
     */

  }, {
    key: "video",
    value: function video(key) {
      return this.cache.get('video', key);
    }
    /**
     * Returns a text asset from the cache.
     * 
     * @param {string} key The key of the text asset to return.
     * 
     * @returns {HTMLElement} Returns the text asset.
     */

  }, {
    key: "text",
    value: function text(key) {
      return this.cache.get('text', key);
    }
    /**
     * Returns a binary asset from the cache.
     * 
     * @param {string} key The key of the binary asset to return.
     * 
     * @returns {HTMLElement} Returns the binary asset.
     */

  }, {
    key: "binary",
    value: function binary(key) {
      return this.cache.get('binary', key);
    }
    /**
     * Return a json asset from the cache.
     * 
     * @param {string} key The key of the json asset to return.
     * 
     * @returns {HTMLElement} Returns the json asset.
     */

  }, {
    key: "json",
    value: function json(key) {
      return this.cache.get('json', key);
    }
  }]);

  return Fetch;
}();

exports["default"] = Fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9GZXRjaC50cyJdLCJuYW1lcyI6WyJGZXRjaCIsImNhY2hlIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7OztJQUdxQkEsSzs7O0FBRXBCOzs7Ozs7OztBQVNBOzs7QUFHQSxpQkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUV6QixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFFQTtBQUVEOzs7Ozs7Ozs7OzswQkFPTUMsRyxFQUF3QztBQUU3QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLE9BQWYsRUFBd0JELEdBQXhCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7OzBCQU9NQSxHLEVBQXdDO0FBRTdDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsT0FBZixFQUF3QkQsR0FBeEIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7MEJBT01BLEcsRUFBd0M7QUFFN0MsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxPQUFmLEVBQXdCRCxHQUF4QixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozt5QkFPS0EsRyxFQUF3QztBQUU1QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLE1BQWYsRUFBdUJELEdBQXZCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7OzJCQU9PQSxHLEVBQXdDO0FBRTlDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsUUFBZixFQUF5QkQsR0FBekIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tBLEcsRUFBd0M7QUFFNUMsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxNQUFmLEVBQXVCRCxHQUF2QixDQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBDYWNoZSBmcm9tICcuLi9jYWNoZS9DYWNoZSc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYW4gQVBJIGZvciB0aGUgY2FjaGUgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZWFzaWx5IHJldHJpZXZlIGNhY2hlZCBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjYWNoZTogQ2FjaGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihjYWNoZTogQ2FjaGUpIHtcclxuXHJcblx0XHR0aGlzLmNhY2hlID0gY2FjaGU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbiBpbWFnZSBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGltYWdlIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGltYWdlIGFzc2V0IGFzIGEgSFRNTCBpbWFnZSBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdGltYWdlKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdpbWFnZScsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbiBhdWRpbyBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGF1ZGlvIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGF1ZGlvIGFzc2V0IGFzIGEgSFRNTCBhdWRpbyBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdGF1ZGlvKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdhdWRpbycsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIHZpZGVvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmlkZW8gYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgdmlkZW8gYXNzZXQgYXMgYW4gSFRNTCB2aWRlbyBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHZpZGVvKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCd2aWRlbycsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIHRleHQgYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB0ZXh0IGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIHRleHQgYXNzZXQuXHJcblx0ICovXHJcblx0dGV4dChrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgndGV4dCcsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIGJpbmFyeSBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGJpbmFyeSBhc3NldCB0byByZXR1cm4uXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIHRoZSBiaW5hcnkgYXNzZXQuXHJcblx0ICovXHJcblx0YmluYXJ5KGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdiaW5hcnknLCBrZXkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIGpzb24gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBqc29uIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGpzb24gYXNzZXQuXHJcblx0ICovXHJcblx0anNvbihrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgnanNvbicsIGtleSk7XHJcblxyXG5cdH1cclxuXHQgXHJcbn0iXX0=