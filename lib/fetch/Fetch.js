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
     * Returns an audio buffer from the cache.
     * 
     * @param {string} key The key of the audio buffer to return.
     * 
     * @returns {AudioBuffer} Returns the audio buffer.
     */

  }, {
    key: "audioBuffer",
    value: function audioBuffer(key) {
      return this._cache.get('audioBuffer', key);
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
    /**
     * Returns an array buffer from the cache.
     * 
     * @param {string} key The key of the array buffer to return.
     * 
     * @returns {ArrayBuffer} Returns the array buffer.
     */

  }, {
    key: "arrayBuffer",
    value: function arrayBuffer(key) {
      // @ts-ignore
      return this._cache.get('arrayBuffer', key);
    }
  }]);

  return Fetch;
}();

exports["default"] = Fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9GZXRjaC50cyJdLCJuYW1lcyI6WyJGZXRjaCIsImNhY2hlIiwiX2NhY2hlIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7OztJQUdxQkEsSzs7O0FBQ3BCOzs7Ozs7OztBQVNBOzs7QUFHQSxpQkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUN6QixTQUFLQyxNQUFMLEdBQWNELEtBQWQ7QUFDQTtBQUVEOzs7Ozs7Ozs7OzswQkFPTUUsRyxFQUF3QztBQUM3QyxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixPQUFoQixFQUF5QkQsR0FBekIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7MEJBT01BLEcsRUFBd0M7QUFDN0MsYUFBTyxLQUFLRCxNQUFMLENBQVlFLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJELEdBQXpCLENBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7O2dDQU9ZQSxHLEVBQXdDO0FBQ25ELGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxHQUFaLENBQWdCLGFBQWhCLEVBQStCRCxHQUEvQixDQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7OzswQkFPTUEsRyxFQUF3QztBQUM3QyxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixPQUFoQixFQUF5QkQsR0FBekIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tBLEcsRUFBd0M7QUFDNUMsYUFBTyxLQUFLRCxNQUFMLENBQVlFLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JELEdBQXhCLENBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7OzJCQU9PQSxHLEVBQXdDO0FBQzlDLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxHQUFaLENBQWdCLFFBQWhCLEVBQTBCRCxHQUExQixDQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozt5QkFPS0EsRyxFQUF3QztBQUM1QyxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixNQUFoQixFQUF3QkQsR0FBeEIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1lBLEcsRUFBd0M7QUFDbkQ7QUFDQSxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixhQUFoQixFQUErQkQsR0FBL0IsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi4vY2FjaGUvQ2FjaGUnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGFuIEFQSSBmb3IgdGhlIGNhY2hlIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGVhc2lseSByZXRyaWV2ZSBjYWNoZWQgYXNzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2gge1xyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfY2FjaGU6IENhY2hlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0NhY2hlfSBjYWNoZSBBIHJlZmVyZW5jZSB0byB0aGUgY2FjaGUuXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoY2FjaGU6IENhY2hlKSB7XHJcblx0XHR0aGlzLl9jYWNoZSA9IGNhY2hlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbiBpbWFnZSBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGltYWdlIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGltYWdlIGFzc2V0IGFzIGEgSFRNTCBpbWFnZSBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdGltYWdlKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuZ2V0KCdpbWFnZScsIGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGFuIGF1ZGlvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXVkaW8gYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgYXVkaW8gYXNzZXQgYXMgYSBIVE1MIGF1ZGlvIGVsZW1lbnQuXHJcblx0ICovXHJcblx0YXVkaW8oa2V5OiBzdHJpbmcpOiAoSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jYWNoZS5nZXQoJ2F1ZGlvJywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYW4gYXVkaW8gYnVmZmVyIGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYXVkaW8gYnVmZmVyIHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7QXVkaW9CdWZmZXJ9IFJldHVybnMgdGhlIGF1ZGlvIGJ1ZmZlci5cclxuXHQgKi9cclxuXHRhdWRpb0J1ZmZlcihrZXk6IHN0cmluZyk6IChBdWRpb0J1ZmZlciB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnYXVkaW9CdWZmZXInLCBrZXkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIHZpZGVvIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmlkZW8gYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgdmlkZW8gYXNzZXQgYXMgYW4gSFRNTCB2aWRlbyBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHZpZGVvKGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuZ2V0KCd2aWRlbycsIGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGEgdGV4dCBhc3NldCBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHRleHQgYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgdGV4dCBhc3NldC5cclxuXHQgKi9cclxuXHR0ZXh0KGtleTogc3RyaW5nKTogKEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuZ2V0KCd0ZXh0Jywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYSBiaW5hcnkgYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBiaW5hcnkgYXNzZXQgdG8gcmV0dXJuLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyB0aGUgYmluYXJ5IGFzc2V0LlxyXG5cdCAqL1xyXG5cdGJpbmFyeShrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnYmluYXJ5Jywga2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIGpzb24gYXNzZXQgZnJvbSB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBqc29uIGFzc2V0IHRvIHJldHVybi5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgdGhlIGpzb24gYXNzZXQuXHJcblx0ICovXHJcblx0anNvbihrZXk6IHN0cmluZyk6IChIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlLmdldCgnanNvbicsIGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGFuIGFycmF5IGJ1ZmZlciBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGFycmF5IGJ1ZmZlciB0byByZXR1cm4uXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBhcnJheSBidWZmZXIuXHJcblx0ICovXHJcblx0YXJyYXlCdWZmZXIoa2V5OiBzdHJpbmcpOiAoQXJyYXlCdWZmZXIgfCB1bmRlZmluZWQpIHtcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHJldHVybiB0aGlzLl9jYWNoZS5nZXQoJ2FycmF5QnVmZmVyJywga2V5KTtcclxuXHR9XHJcbn0iXX0=