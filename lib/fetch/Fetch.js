'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

exports.default = Fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9GZXRjaC50cyJdLCJuYW1lcyI6WyJGZXRjaCIsImNhY2hlIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7O0lBUXFCQSxLOzs7QUFFcEI7Ozs7Ozs7OztBQVVBOzs7QUFHQSxpQkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUV6QixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7OzBCQVNNQyxHLEVBQXdDO0FBRTdDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsT0FBZixFQUF3QkQsR0FBeEIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzswQkFTTUEsRyxFQUF3QztBQUU3QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLE9BQWYsRUFBd0JELEdBQXhCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7MEJBU01BLEcsRUFBd0M7QUFFN0MsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxPQUFmLEVBQXdCRCxHQUF4QixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7O3lCQVNLQSxHLEVBQXdDO0FBRTVDLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsTUFBZixFQUF1QkQsR0FBdkIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzsyQkFTT0EsRyxFQUF3QztBQUU5QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLFFBQWYsRUFBeUJELEdBQXpCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0tBLEcsRUFBd0M7QUFFNUMsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxNQUFmLEVBQXVCRCxHQUF2QixDQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IENhY2hlIGZyb20gJy4uL2NhY2hlL0NhY2hlJztcblxuLyoqXG4gKiBUaGUgRmV0Y2ggT2JqZWN0IChwcmV2aW91c2x5IGtub3duIGFzIHRoZSBSZXRyaWV2ZXIpIGlzIGEgd3JhcHBlclxuICogYXJvdW5kIHRoZSBjYWNoZSB0aGF0IGFsbG93cyBlYXN5IHJldHJpZXZhbCBvZiBjYWNoZWQgYXNzZXRzLlxuICogXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaVxuICogXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaCB7XG5cblx0LyoqXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtDYWNoZX1cblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHRwcml2YXRlIGNhY2hlOiBDYWNoZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtDYWNoZX0gY2FjaGUgVGhlIGNhY2hlIGluaXRpYWxpemVkIGluIHRoZSBtYWluIG1vZHVsZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNhY2hlOiBDYWNoZSkge1xuXG5cdFx0dGhpcy5jYWNoZSA9IGNhY2hlO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGFuIGltYWdlIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGltYWdlIHRvIHJldHVybi5cblx0ICogXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdGltYWdlKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jYWNoZS5nZXQoJ2ltYWdlJywga2V5KTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhbiBhdWRpbyBhc3NldCBmcm9tIHRoZSBjYWNoZS5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBhdWRpbyB0byByZXR1cm4uXG5cdCAqIFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRhdWRpbyhrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdhdWRpbycsIGtleSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSB2aWRlbyBhc3NldCBmcm9tIHRoZSBjYWNoZS5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2aWRlbyB0byByZXR1cm4uXG5cdCAqIFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR2aWRlbyhrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCd2aWRlbycsIGtleSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSB0ZXh0IGFzc2V0IGZyb20gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHRleHQgdG8gcmV0dXJuLlxuXHQgKiBcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGV4dChrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCd0ZXh0Jywga2V5KTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIGJpbmFyeSBhc3NldCBmcm9tIHRoZSBjYWNoZS5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBiaW5hcnkgdG8gcmV0dXJuLlxuXHQgKiBcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0YmluYXJ5KGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jYWNoZS5nZXQoJ2JpbmFyeScsIGtleSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBqc29uIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGpzb24gdG8gcmV0dXJuLlxuXHQgKiBcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0anNvbihrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KCdqc29uJywga2V5KTtcblxuXHR9XG5cdCBcbn0iXX0=