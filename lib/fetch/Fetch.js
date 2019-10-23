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
 * The Fetch Object (previously known as the Retriever) is a wrapper
 * around the cache that allows easy retrieval of cached assets.
 * 
 * @author Robert Corponoi
 * 
 * @version 1.0.0
 */
var Fetch =
/*#__PURE__*/
function () {
  /**
   * A reference to the cache.
   * 
   * @since 0.1.0
   * 
   * @property {Cache}
   * @readonly
   */

  /**
   * @param {Cache} cache The cache initialized in the main module.
   */
  function Fetch(cache) {
    _classCallCheck(this, Fetch);

    _defineProperty(this, "cache", void 0);

    this.cache = cache;
  }
  /**
   * Return an image asset from the cache.
   * 
   * @since 0.1.0
   * 
   * @param {string} key The key of the image to return.
   * 
   * @returns {HTMLElement}
   */


  _createClass(Fetch, [{
    key: "image",
    value: function image(key) {
      return this.cache.get('image', key);
    }
    /**
     * Return an audio asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} key The key of the audio to return.
     * 
     * @returns {HTMLElement}
     */

  }, {
    key: "audio",
    value: function audio(key) {
      return this.cache.get('audio', key);
    }
    /**
     * Return a video asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} key The key of the video to return.
     * 
     * @returns {HTMLElement}
     */

  }, {
    key: "video",
    value: function video(key) {
      return this.cache.get('video', key);
    }
    /**
     * Return a text asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} key The key of the text to return.
     * 
     * @returns {HTMLElement}
     */

  }, {
    key: "text",
    value: function text(key) {
      return this.cache.get('text', key);
    }
    /**
     * Return a binary asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} key The key of the binary to return.
     * 
     * @returns {HTMLElement}
     */

  }, {
    key: "binary",
    value: function binary(key) {
      return this.cache.get('binary', key);
    }
    /**
     * Return a json asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} key The key of the json to return.
     * 
     * @returns {HTMLElement}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9GZXRjaC50cyJdLCJuYW1lcyI6WyJGZXRjaCIsImNhY2hlIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7O0lBUXFCQSxLOzs7QUFFcEI7Ozs7Ozs7OztBQVVBOzs7QUFHQSxpQkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUV6QixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7OzBCQVNNQyxHLEVBQXdDO0FBRTdDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsT0FBZixFQUF3QkQsR0FBeEIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzswQkFTTUEsRyxFQUF3QztBQUU3QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLE9BQWYsRUFBd0JELEdBQXhCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7MEJBU01BLEcsRUFBd0M7QUFFN0MsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxPQUFmLEVBQXdCRCxHQUF4QixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7O3lCQVNLQSxHLEVBQXdDO0FBRTVDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsTUFBZixFQUF1QkQsR0FBdkIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzsyQkFTT0EsRyxFQUF3QztBQUU5QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLFFBQWYsRUFBeUJELEdBQXpCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0tBLEcsRUFBd0M7QUFFNUMsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxNQUFmLEVBQXVCRCxHQUF2QixDQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBDYWNoZSBmcm9tICcuLi9jYWNoZS9DYWNoZSc7XHJcblxyXG4vKipcclxuICogVGhlIEZldGNoIE9iamVjdCAocHJldmlvdXNseSBrbm93biBhcyB0aGUgUmV0cmlldmVyKSBpcyBhIHdyYXBwZXJcclxuICogYXJvdW5kIHRoZSBjYWNoZSB0aGF0IGFsbG93cyBlYXN5IHJldHJpZXZhbCBvZiBjYWNoZWQgYXNzZXRzLlxyXG4gKiBcclxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2lcclxuICogXHJcbiAqIEB2ZXJzaW9uIDEuMC4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG5cdCAqIEByZWFkb25seVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY2FjaGU6IENhY2hlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0NhY2hlfSBjYWNoZSBUaGUgY2FjaGUgaW5pdGlhbGl6ZWQgaW4gdGhlIG1haW4gbW9kdWxlLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGNhY2hlOiBDYWNoZSkge1xyXG5cclxuXHRcdHRoaXMuY2FjaGUgPSBjYWNoZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gYW4gaW1hZ2UgYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBpbWFnZSB0byByZXR1cm4uXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG5cdCAqL1xyXG5cdGltYWdlKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdpbWFnZScsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIGFuIGF1ZGlvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXVkaW8gdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHRhdWRpbyhrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgnYXVkaW8nLCBrZXkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIHZpZGVvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmlkZW8gdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHR2aWRlbyhrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgndmlkZW8nLCBrZXkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIHRleHQgYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB0ZXh0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGV4dChrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgndGV4dCcsIGtleSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIGEgYmluYXJ5IGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYmluYXJ5IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0YmluYXJ5KGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdiaW5hcnknLCBrZXkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIGpzb24gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBqc29uIHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0anNvbihrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlLmdldCgnanNvbicsIGtleSk7XHJcblxyXG5cdH1cclxuXHQgXHJcbn0iXX0=