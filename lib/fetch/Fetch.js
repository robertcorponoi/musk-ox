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

    _defineProperty(this, "_cache", void 0);

    this._cache = cache;
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
      return this._cache.get('image', key);
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
      return this._cache.get('audio', key);
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
      return this._cache.get('video', key);
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
      return this._cache.get('text', key);
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
      return this._cache.get('binary', key);
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
      return this._cache.get('json', key);
    }
  }]);

  return Fetch;
}();

exports["default"] = Fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9GZXRjaC50cyJdLCJuYW1lcyI6WyJGZXRjaCIsImNhY2hlIiwiX2NhY2hlIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7OztJQUdxQkEsSzs7O0FBQ3BCOzs7Ozs7OztBQVNBOzs7QUFHQSxpQkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUN6QixTQUFLQyxNQUFMLEdBQWNELEtBQWQ7QUFDQTtBQUVEOzs7Ozs7Ozs7OzswQkFPTUUsRyxFQUF3QztBQUM3QyxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixPQUFoQixFQUF5QkQsR0FBekIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7MEJBT01BLEcsRUFBd0M7QUFDN0MsYUFBTyxLQUFLRCxNQUFMLENBQVlFLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJELEdBQXpCLENBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7OzBCQU9NQSxHLEVBQXdDO0FBQzdDLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxHQUFaLENBQWdCLE9BQWhCLEVBQXlCRCxHQUF6QixDQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozt5QkFPS0EsRyxFQUF3QztBQUM1QyxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixNQUFoQixFQUF3QkQsR0FBeEIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09BLEcsRUFBd0M7QUFDOUMsYUFBTyxLQUFLRCxNQUFMLENBQVlFLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJELEdBQTFCLENBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7O3lCQU9LQSxHLEVBQXdDO0FBQzVDLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxHQUFaLENBQWdCLE1BQWhCLEVBQXdCRCxHQUF4QixDQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBDYWNoZSBmcm9tICcuLi9jYWNoZS9DYWNoZSc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYW4gQVBJIGZvciB0aGUgY2FjaGUgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZWFzaWx5IHJldHJpZXZlIGNhY2hlZCBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaCB7XHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7Q2FjaGV9XHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRwcml2YXRlIF9jYWNoZTogQ2FjaGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihjYWNoZTogQ2FjaGUpIHtcclxuXHRcdHRoaXMuX2NhY2hlID0gY2FjaGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGFuIGltYWdlIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgaW1hZ2UgYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgaW1hZ2UgYXNzZXQgYXMgYSBIVE1MIGltYWdlIGVsZW1lbnQuXHJcblx0ICovXHJcblx0aW1hZ2Uoa2V5OiBzdHJpbmcpOiAoSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jYWNoZS5nZXQoJ2ltYWdlJywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYW4gYXVkaW8gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBhdWRpbyBhc3NldCB0byByZXR1cm4uXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIHRoZSBhdWRpbyBhc3NldCBhcyBhIEhUTUwgYXVkaW8gZWxlbWVudC5cclxuXHQgKi9cclxuXHRhdWRpbyhrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnYXVkaW8nLCBrZXkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIHZpZGVvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmlkZW8gYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgdmlkZW8gYXNzZXQgYXMgYW4gSFRNTCB2aWRlbyBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHZpZGVvKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuZ2V0KCd2aWRlbycsIGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGEgdGV4dCBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHRleHQgYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgdGV4dCBhc3NldC5cclxuXHQgKi9cclxuXHR0ZXh0KGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuZ2V0KCd0ZXh0Jywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYSBiaW5hcnkgYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBiaW5hcnkgYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgYmluYXJ5IGFzc2V0LlxyXG5cdCAqL1xyXG5cdGJpbmFyeShrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnYmluYXJ5Jywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIGpzb24gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBqc29uIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGpzb24gYXNzZXQuXHJcblx0ICovXHJcblx0anNvbihrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnanNvbicsIGtleSk7XHJcblx0fVxyXG59Il19