'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Fetch = _interopRequireDefault(require("./fetch/Fetch"));

var _Cache = _interopRequireDefault(require("./cache/Cache"));

var media = _interopRequireWildcard(require("./utils/media"));

var _hypergiant = _interopRequireDefault(require("hypergiant"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Musk Ox takes a collection of assets that need to be loaded for use in the browser and adds them to cache
 * so that they can be used whenever.
 */
var MuskOx =
/*#__PURE__*/
function () {
  /**
   * A reference to the cache used to store assets.
    * 
    * @private
   * 
   * @property {Cache}
   */

  /**
   * A reference to the fetch module used to retrieve assets.
    * 
    * @property {Fetch}
    * 
    * @private
   */

  /**
   * A reference to the assets that still have yet to be loaded.
   * 
   * @property {Array<Asset>}
    * 
    * @private
   */

  /**
   * The current number of assets that have been loaded.
   * 
   * @property {number}
    * 
    * @private
   */

  /**
   * The current number of assets that have yet to be loaded.
   * 
   * @property {number}
    * 
    * @private
   */

  /**
   * The crossOrigin option passed to MuskOx on initialization.
   * 
   * @private
   * 
   * @property {string}
   */

  /**
   * A percent value that represents the current loading progress.
   * 
   * @property {number} 
    * 
    * @private
   */

  /**
   * The signal that gets dispatched whenever the loading progress is updated.
   * 
   * When this signal gets dispatched it contains the load progress as a percentage.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */

  /**
   * The signal that gets dispatched each time an individual asset is loaded.
   * 
   * When this signal gets dispatched it contains the asset that was loaded.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */

  /**
   * The signal that gets dispatched when an asset encounters an error while loading.
   * 
   * When this signal gets dispatched it contains the error that was thrown.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */

  /**
   * The signal that gets dispatched when loading is complete.
   * 
   * @property {Hypergiant}
   * 
   * @private
   */

  /**
   * @param {string} crossOrigin The crossOrigin option passed to MuskOx on initialization.
   */
  function MuskOx() {
    var crossOrigin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, MuskOx);

    _defineProperty(this, "_cache", new _Cache["default"]());

    _defineProperty(this, "_fetch", new _Fetch["default"](this.cache));

    _defineProperty(this, "_queue", []);

    _defineProperty(this, "_assetsLoaded", 0);

    _defineProperty(this, "_assetsToLoad", 0);

    _defineProperty(this, "_crossOrigin", void 0);

    _defineProperty(this, "_progress", 0);

    _defineProperty(this, "_onProgress", new _hypergiant["default"]());

    _defineProperty(this, "_onLoad", new _hypergiant["default"]());

    _defineProperty(this, "_onError", new _hypergiant["default"]());

    _defineProperty(this, "_onComplete", new _hypergiant["default"]());

    this._crossOrigin = crossOrigin;
  }
  /**
   * Returns the cache module.
   * 
   * @returns {Cache}
   */


  _createClass(MuskOx, [{
    key: "start",

    /**
     * Takes the assets from the load queue and one by one it uses the appropriate  method to load it and then add it to the cache.
     */
    value: function start() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var asset = _step.value;

          switch (asset.type) {
            case 'image':
              this._loadDefault(asset);

              break;

            case 'audio':
            case 'video':
              this._loadCanPlayThrough(asset);

              break;

            case 'text':
            case 'binary':
            case 'json':
              this._loadXHR(asset);

              break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Adds an image asset to the load queue.
     * 
     * @param {string} key A unique key to reference this image asset by.
     * @param {string} src The path to the image asset.
     * @param {boolean} [replace=false] Indicates whether an image asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "image",
    value: function image(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('image', key, src, replace);
    }
    /**
     * Adds an audio asset to the load queue.
     * 
     * Muliple `src` paths can be provided in case one or more are not supported by the user's browser.
     * 
     * @param {string} key A unique key to reference this audio asset by.
     * @param {string|Array<string>} src A path to the audio asset or an array of paths to an audio asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether an audio asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "audio",
    value: function audio(key, srcs) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('audio', key, srcs, replace);
    }
    /**
     * Adds a video asset to the load queue.
     * 
     * Muliple `src` paths can be provided in case one or more are not supported by the user's browser.
     * 
     * @param {string} key A unique key to reference this video asset by.
     * @param {string|Array<string>} src A path to the video asset or an array of paths to a video asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether a video asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "video",
    value: function video(key, srcs) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('video', key, srcs, replace);
    }
    /**
     * Adds the contents of a text file to the load queue.
     * 
     * @param {string} key A unique key to reference this text asset by.
     * @param {string} src The path to the text asset.
     * @param {boolean} [replace=false] Indicates whether a text asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "text",
    value: function text(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('text', key, src, replace);
    }
    /**
     * Adds the binary contents of a file to the load queue.
     * 
     * @param {string} key A unique key to reference this binary asset by.
     * @param {string} src The path to the binary asset.
     * @param {boolean} [replace=false] Indicates whether a binary asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "binary",
    value: function binary(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('binary', key, src, replace);
    }
    /**
      * Add the contents of a JSON file as a parsed object to the load queue.
      * 
      * @param {string} key A unique key to reference this JSON asset by.
      * @param {string} src The path to the JSON asset.
      * @param {boolean} [replace=false] Indicates whether a JSON asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "json",
    value: function json(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('json', key, src, replace);
    }
    /**
     * Takes the supplied asset, creates an asset instance out of it, and
     * adds it to the load queue.
      * 
     * @private
     * 
     * @param {string} type The type of asset this asset is.
     * @param {string} key The key for the asset.
     * @param {string|Array<string>} src The path/s to the asset.
     * @param {boolean} replace Indicates whether an asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "_addToQueue",
    value: function _addToQueue(type, key, src, replace) {
      var asset = {
        type: type,
        key: key,
        src: src
      };

      this._queue.push(asset);

      this._assetsToLoad++;
    }
    /**
     * Load assets that can be loaded through the simple use of an event listener
     * that listens to the asset's load event.
      * 
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "_loadDefault",
    value: function _loadDefault(asset) {
      var _this = this;

      asset.data = new Image();
      asset.data.addEventListener('load', function () {
        _this._cacheAsset(asset);
      }, false);
      asset.data.addEventListener('error', function (err) {
        _this._handleAssetError(asset, err);
      }, false);
      asset.data.src = asset.src.toString();
      if (this._crossOrigin) asset.data.crossOrigin = this._crossOrigin;
    }
    /**
     * Load assets that can be loaded through the use of the `canPlayThrough` event
     * listener.
      * 
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "_loadCanPlayThrough",
    value: function _loadCanPlayThrough(asset) {
      var _this2 = this;

      if (!Array.isArray(asset.src)) asset.src = [asset.src];
      if (asset.type === 'audio') asset.data = new Audio();else asset.data = document.createElement('video');
      asset.data.addEventListener('canplaythrough', function () {
        _this2._cacheAsset(asset);
      }, false);
      asset.data.addEventListener('error', function (err) {
        _this2._handleAssetError(asset, err);
      }, false);
      asset.data.src = media.getPlayableMedia(asset.type, asset.src);
    }
    /**
     * Load assets that can be loaded through XHR.
      * 
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "_loadXHR",
    value: function _loadXHR(asset) {
      var _this3 = this;

      asset.data = new XMLHttpRequest();
      asset.data.addEventListener('readystatechange', function () {
        if (asset.data.readyState == 4 && asset.data.status == 200) {
          switch (asset.type) {
            case 'text':
              asset.data = asset.data.responseText;
              break;

            case 'binary':
              var arrayBuffer = asset.data.response;
              if (arrayBuffer) asset.data = new Uint8Array(arrayBuffer);
              break;

            case 'json':
              asset.data = JSON.parse(asset.data.responseText);
              break;
          }

          _this3._cacheAsset(asset);
        }
      }, false);
      asset.data.addEventListener('error', function (err) {
        _this3._handleAssetError(asset, err);
      }, false);
      if (asset.type == 'binary') asset.data.responseType = 'arraybuffer';
      asset.data.open('GET', asset.src);
      asset.data.send();
    }
    /**
     * Takes the loaded asset and adds it to the cache while updating properties of this module including the load progress.
      * 
     * @private
     * 
     * @param {Asset} asset The loaded asset.
     */

  }, {
    key: "_cacheAsset",
    value: function _cacheAsset(asset) {
      this.cache.set(asset.type, asset.key, asset.data);
      this._assetsLoaded++;

      this._updateLoadStatus(asset);
    }
    /**
     * Check to see if the queue has finished processing and all of the assets have been loaded.
     * 
     * This also updates the progress property to reflect the most update to date progress.
     * 
     * Finally, if all of the items are loaded, the load complete event is emitted signaling that it is safe to use all of the 
      * loaded assets.
      * 
     * @private
     * 
     * @param {Asset} asset The most recently loaded asset.
     */

  }, {
    key: "_updateLoadStatus",
    value: function _updateLoadStatus(asset) {
      this._progress = parseInt((this._assetsLoaded / this._assetsToLoad * 100).toFixed(0));
      this.onProgress.dispatch(this._progress);
      this.onLoad.dispatch(asset);
      if (this._assetsLoaded === this._assetsToLoad) this.onComplete.dispatch();
    }
    /**
     * When an asset encounters an error while loading this will dispatch the onError event.
     * 
     * @private
     * 
     * @param {Asset} asset The asset that encountered an error while loading.
     * @param {string} err The error that was dispatched.
     */

  }, {
    key: "_handleAssetError",
    value: function _handleAssetError(asset, err) {
      this.onError.dispatch(asset, err);
    }
  }, {
    key: "cache",
    get: function get() {
      return this._cache;
    }
    /**
     * Returns the fetch module.
     * 
     * @returns {Fetch}
     */

  }, {
    key: "fetch",
    get: function get() {
      return this._fetch;
    }
    /**
     * Returns the current loading progress.
     * 
     * @returns {number}
     */

  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
    /**
     * Returns the onProgress signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onProgress",
    get: function get() {
      return this._onProgress;
    }
    /**
     * Returns the assetLoaded signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onLoad",
    get: function get() {
      return this._onLoad;
    }
    /**
     * Returns the onError signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onError",
    get: function get() {
      return this._onError;
    }
    /**
     * Returns the onComplete signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onComplete",
    get: function get() {
      return this._onComplete;
    }
  }]);

  return MuskOx;
}();

exports["default"] = MuskOx;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsIkh5cGVyZ2lhbnQiLCJfY3Jvc3NPcmlnaW4iLCJfcXVldWUiLCJhc3NldCIsInR5cGUiLCJfbG9hZERlZmF1bHQiLCJfbG9hZENhblBsYXlUaHJvdWdoIiwiX2xvYWRYSFIiLCJrZXkiLCJzcmMiLCJyZXBsYWNlIiwiX2FkZFRvUXVldWUiLCJzcmNzIiwicHVzaCIsIl9hc3NldHNUb0xvYWQiLCJkYXRhIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2NhY2hlQXNzZXQiLCJlcnIiLCJfaGFuZGxlQXNzZXRFcnJvciIsInRvU3RyaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwiQXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtZWRpYSIsImdldFBsYXlhYmxlTWVkaWEiLCJYTUxIdHRwUmVxdWVzdCIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJhcnJheUJ1ZmZlciIsInJlc3BvbnNlIiwiVWludDhBcnJheSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZW5kIiwic2V0IiwiX2Fzc2V0c0xvYWRlZCIsIl91cGRhdGVMb2FkU3RhdHVzIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwib25Qcm9ncmVzcyIsImRpc3BhdGNoIiwib25Mb2FkIiwib25Db21wbGV0ZSIsIm9uRXJyb3IiLCJfY2FjaGUiLCJfZmV0Y2giLCJfb25Qcm9ncmVzcyIsIl9vbkxvYWQiLCJfb25FcnJvciIsIl9vbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsTTs7O0FBRXBCOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNB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QUFRLENBQUMsQ0FBRSxLQUFLSCxhQUFMLEdBQXFCLEtBQUs1QixhQUEzQixHQUE0QyxHQUE3QyxFQUFrRGdDLE9BQWxELENBQTBELENBQTFELENBQUQsQ0FBekI7QUFFQSxXQUFLQyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixLQUFLSixTQUE5QjtBQUVBLFdBQUtLLE1BQUwsQ0FBWUQsUUFBWixDQUFxQjdDLEtBQXJCO0FBRUEsVUFBSSxLQUFLdUMsYUFBTCxLQUF1QixLQUFLNUIsYUFBaEMsRUFBK0MsS0FBS29DLFVBQUwsQ0FBZ0JGLFFBQWhCO0FBRWhEO0FBRUQ7Ozs7Ozs7Ozs7O3NDQVEwQjdDLEssRUFBY2dCLEcsRUFBYTtBQUVuRCxXQUFLZ0MsT0FBTCxDQUFhSCxRQUFiLENBQXNCN0MsS0FBdEIsRUFBNkJnQixHQUE3QjtBQUVEOzs7d0JBblhrQjtBQUVqQixhQUFPLEtBQUtpQyxNQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBS21CO0FBRWpCLGFBQU8sS0FBS0MsTUFBWjtBQUVEO0FBRUY7Ozs7Ozs7O3dCQUt3QjtBQUVyQixhQUFPLEtBQUtULFNBQVo7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFLNkI7QUFFM0IsYUFBTyxLQUFLVSxXQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBS3lCO0FBRXZCLGFBQU8sS0FBS0MsT0FBWjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQUswQjtBQUV4QixhQUFPLEtBQUtDLFFBQVo7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFLNkI7QUFFM0IsYUFBTyxLQUFLQyxXQUFaO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBBc3NldCBmcm9tICcuL2ludGVyZmFjZXMvQXNzZXQnO1xyXG5cclxuaW1wb3J0IEZldGNoIGZyb20gJy4vZmV0Y2gvRmV0Y2gnO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9jYWNoZS9DYWNoZSc7XHJcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vdXRpbHMvbWVkaWEnO1xyXG5cclxuaW1wb3J0IEh5cGVyZ2lhbnQgZnJvbSAnaHlwZXJnaWFudCc7XHJcblxyXG4vKipcclxuICogTXVzayBPeCB0YWtlcyBhIGNvbGxlY3Rpb24gb2YgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgZm9yIHVzZSBpbiB0aGUgYnJvd3NlciBhbmQgYWRkcyB0aGVtIHRvIGNhY2hlXHJcbiAqIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCB3aGVuZXZlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2tPeCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZSB1c2VkIHRvIHN0b3JlIGFzc2V0cy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7Q2FjaGV9XHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfY2FjaGU6IENhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBmZXRjaCBtb2R1bGUgdXNlZCB0byByZXRyaWV2ZSBhc3NldHMuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGZXRjaH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2ZldGNoOiBGZXRjaCA9IG5ldyBGZXRjaCh0aGlzLmNhY2hlKTtcclxuXHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGFzc2V0cyB0aGF0IHN0aWxsIGhhdmUgeWV0IHRvIGJlIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0FycmF5PEFzc2V0Pn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3F1ZXVlOiBBcnJheTxBc3NldD4gPSBbXTtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9hc3NldHNMb2FkZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBhc3NldHMgdGhhdCBoYXZlIHlldCB0byBiZSBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9hc3NldHNUb0xvYWQ6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjcm9zc09yaWdpbiBvcHRpb24gcGFzc2VkIHRvIE11c2tPeCBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Nyb3NzT3JpZ2luOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcGVyY2VudCB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcy5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9wcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGdldHMgZGlzcGF0Y2hlZCB3aGVuZXZlciB0aGUgbG9hZGluZyBwcm9ncmVzcyBpcyB1cGRhdGVkLlxyXG4gICAqIFxyXG4gICAqIFdoZW4gdGhpcyBzaWduYWwgZ2V0cyBkaXNwYXRjaGVkIGl0IGNvbnRhaW5zIHRoZSBsb2FkIHByb2dyZXNzIGFzIGEgcGVyY2VudGFnZS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9vblByb2dyZXNzOiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGdldHMgZGlzcGF0Y2hlZCBlYWNoIHRpbWUgYW4gaW5kaXZpZHVhbCBhc3NldCBpcyBsb2FkZWQuXHJcbiAgICogXHJcbiAgICogV2hlbiB0aGlzIHNpZ25hbCBnZXRzIGRpc3BhdGNoZWQgaXQgY29udGFpbnMgdGhlIGFzc2V0IHRoYXQgd2FzIGxvYWRlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9vbkxvYWQ6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2lnbmFsIHRoYXQgZ2V0cyBkaXNwYXRjaGVkIHdoZW4gYW4gYXNzZXQgZW5jb3VudGVycyBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLlxyXG4gICAqIFxyXG4gICAqIFdoZW4gdGhpcyBzaWduYWwgZ2V0cyBkaXNwYXRjaGVkIGl0IGNvbnRhaW5zIHRoZSBlcnJvciB0aGF0IHdhcyB0aHJvd24uXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25FcnJvcjogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uQ29tcGxldGU6IEh5cGVyZ2lhbnQgPSBuZXcgIEh5cGVyZ2lhbnQoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNyb3NzT3JpZ2luIFRoZSBjcm9zc09yaWdpbiBvcHRpb24gcGFzc2VkIHRvIE11c2tPeCBvbiBpbml0aWFsaXphdGlvbi5cclxuXHQgKi9cclxuICBjb25zdHJ1Y3Rvcihjcm9zc09yaWdpbjogc3RyaW5nID0gJycpIHtcclxuXHJcbiAgICB0aGlzLl9jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNhY2hlIG1vZHVsZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Q2FjaGV9XHJcbiAgICovXHJcbiAgZ2V0IGNhY2hlKCk6IENhY2hlIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGU7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZmV0Y2ggbW9kdWxlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtGZXRjaH1cclxuICAgKi9cclxuICBnZXQgZmV0Y2goKTogRmV0Y2gge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9mZXRjaDtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvYWRpbmcgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge251bWJlcn1cclxuXHQgKi9cclxuICBnZXQgcHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3M7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgb25Qcm9ncmVzcyBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uUHJvZ3Jlc3MoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX29uUHJvZ3Jlc3M7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYXNzZXRMb2FkZWQgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBvbkxvYWQoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX29uTG9hZDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBvbkVycm9yIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25FcnJvcigpOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb25FcnJvcjtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBvbkNvbXBsZXRlIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Db21wbGV0ZSgpOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb25Db21wbGV0ZTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUYWtlcyB0aGUgYXNzZXRzIGZyb20gdGhlIGxvYWQgcXVldWUgYW5kIG9uZSBieSBvbmUgaXQgdXNlcyB0aGUgYXBwcm9wcmlhdGUgIG1ldGhvZCB0byBsb2FkIGl0IGFuZCB0aGVuIGFkZCBpdCB0byB0aGUgY2FjaGUuXHJcblx0ICovXHJcbiAgc3RhcnQoKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCBhc3NldCBvZiB0aGlzLl9xdWV1ZSkge1xyXG5cclxuICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgIHRoaXMuX2xvYWREZWZhdWx0KGFzc2V0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgdGhpcy5fbG9hZENhblBsYXlUaHJvdWdoKGFzc2V0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBjYXNlICdiaW5hcnknOlxyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgdGhpcy5fbG9hZFhIUihhc3NldCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhbiBpbWFnZSBhc3NldCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBpbWFnZSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhbiBpbWFnZSBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICBpbWFnZShrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2ltYWdlJywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gYXVkaW8gYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogTXVsaXBsZSBgc3JjYCBwYXRocyBjYW4gYmUgcHJvdmlkZWQgaW4gY2FzZSBvbmUgb3IgbW9yZSBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgdXNlcidzIGJyb3dzZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgYXVkaW8gYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIEEgcGF0aCB0byB0aGUgYXVkaW8gYXNzZXQgb3IgYW4gYXJyYXkgb2YgcGF0aHMgdG8gYW4gYXVkaW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXVkaW8gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgYXVkaW8oa2V5OiBzdHJpbmcsIHNyY3M6IEFycmF5PHN0cmluZz4sIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2F1ZGlvJywga2V5LCBzcmNzLCByZXBsYWNlKTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGEgdmlkZW8gYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogTXVsaXBsZSBgc3JjYCBwYXRocyBjYW4gYmUgcHJvdmlkZWQgaW4gY2FzZSBvbmUgb3IgbW9yZSBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgdXNlcidzIGJyb3dzZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgdmlkZW8gYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIEEgcGF0aCB0byB0aGUgdmlkZW8gYXNzZXQgb3IgYW4gYXJyYXkgb2YgcGF0aHMgdG8gYSB2aWRlbyBhc3NldCBhbmQgaXRzIGZhbGxiYWNrcy5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIHZpZGVvIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIHZpZGVvKGtleTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCd2aWRlbycsIGtleSwgc3JjcywgcmVwbGFjZSk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgY29udGVudHMgb2YgYSB0ZXh0IGZpbGUgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgdGV4dCBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSB0ZXh0IGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgdGV4dCBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICB0ZXh0KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9RdWV1ZSgndGV4dCcsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBiaW5hcnkgY29udGVudHMgb2YgYSBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGJpbmFyeSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBiaW5hcnkgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBiaW5hcnkgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgYmluYXJ5KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9RdWV1ZSgnYmluYXJ5Jywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG4gICAqIEFkZCB0aGUgY29udGVudHMgb2YgYSBKU09OIGZpbGUgYXMgYSBwYXJzZWQgb2JqZWN0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIEpTT04gYXNzZXQgYnkuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgSlNPTiBhc3NldC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIEpTT04gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAganNvbihrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2pzb24nLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIHN1cHBsaWVkIGFzc2V0LCBjcmVhdGVzIGFuIGFzc2V0IGluc3RhbmNlIG91dCBvZiBpdCwgYW5kXHJcblx0ICogYWRkcyBpdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRoaXMgYXNzZXQgaXMuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIFRoZSBwYXRoL3MgdG8gdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9hZGRUb1F1ZXVlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHNyYzogKHN0cmluZyB8IEFycmF5PHN0cmluZz4pLCByZXBsYWNlOiBib29sZWFuKSB7XHJcblxyXG4gICAgY29uc3QgYXNzZXQ6IEFzc2V0ID0geyB0eXBlOiB0eXBlLCBrZXk6IGtleSwgc3JjOiBzcmMgfTtcclxuXHJcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGFzc2V0KTtcclxuXHJcbiAgICB0aGlzLl9hc3NldHNUb0xvYWQrKztcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCB0aGUgc2ltcGxlIHVzZSBvZiBhbiBldmVudCBsaXN0ZW5lclxyXG5cdCAqIHRoYXQgbGlzdGVucyB0byB0aGUgYXNzZXQncyBsb2FkIGV2ZW50LlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfbG9hZERlZmF1bHQoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG4gICAgYXNzZXQuZGF0YSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX2NhY2hlQXNzZXQoYXNzZXQpO1xyXG5cclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycjogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9oYW5kbGVBc3NldEVycm9yKGFzc2V0LCBlcnIpO1xyXG5cclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLnNyYyA9IGFzc2V0LnNyYy50b1N0cmluZygpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jcm9zc09yaWdpbikgYXNzZXQuZGF0YS5jcm9zc09yaWdpbiA9IHRoaXMuX2Nyb3NzT3JpZ2luO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIGBjYW5QbGF5VGhyb3VnaGAgZXZlbnRcclxuXHQgKiBsaXN0ZW5lci5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2xvYWRDYW5QbGF5VGhyb3VnaChhc3NldDogQXNzZXQpIHtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXNzZXQuc3JjKSkgYXNzZXQuc3JjID0gW2Fzc2V0LnNyY107XHJcblxyXG4gICAgaWYgKGFzc2V0LnR5cGUgPT09ICdhdWRpbycpIGFzc2V0LmRhdGEgPSBuZXcgQXVkaW8oKTtcclxuXHJcbiAgICBlbHNlIGFzc2V0LmRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9jYWNoZUFzc2V0KGFzc2V0KTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgdGhpcy5faGFuZGxlQXNzZXRFcnJvcihhc3NldCwgZXJyKTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5zcmMgPSBtZWRpYS5nZXRQbGF5YWJsZU1lZGlhKGFzc2V0LnR5cGUsIGFzc2V0LnNyYyk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggWEhSLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfbG9hZFhIUihhc3NldDogQXNzZXQpIHtcclxuXHJcbiAgICBhc3NldC5kYXRhID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuICAgICAgaWYgKGFzc2V0LmRhdGEucmVhZHlTdGF0ZSA9PSA0ICYmIGFzc2V0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcclxuXHJcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgYXNzZXQuZGF0YSA9IGFzc2V0LmRhdGEucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICdiaW5hcnknOlxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGFzc2V0LmRhdGEucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikgYXNzZXQuZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnanNvbic6XHJcbiAgICAgICAgICAgIGFzc2V0LmRhdGEgPSBKU09OLnBhcnNlKGFzc2V0LmRhdGEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWNoZUFzc2V0KGFzc2V0KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgdGhpcy5faGFuZGxlQXNzZXRFcnJvcihhc3NldCwgZXJyKTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGFzc2V0LnR5cGUgPT0gJ2JpbmFyeScpIGFzc2V0LmRhdGEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuXHJcbiAgICBhc3NldC5kYXRhLm9wZW4oJ0dFVCcsIGFzc2V0LnNyYyk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5zZW5kKCk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIGxvYWRlZCBhc3NldCBhbmQgYWRkcyBpdCB0byB0aGUgY2FjaGUgd2hpbGUgdXBkYXRpbmcgcHJvcGVydGllcyBvZiB0aGlzIG1vZHVsZSBpbmNsdWRpbmcgdGhlIGxvYWQgcHJvZ3Jlc3MuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgbG9hZGVkIGFzc2V0LlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2NhY2hlQXNzZXQoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG4gICAgdGhpcy5jYWNoZS5zZXQoYXNzZXQudHlwZSwgYXNzZXQua2V5LCBhc3NldC5kYXRhKTtcclxuXHJcbiAgICB0aGlzLl9hc3NldHNMb2FkZWQrKztcclxuXHJcbiAgICB0aGlzLl91cGRhdGVMb2FkU3RhdHVzKGFzc2V0KTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayB0byBzZWUgaWYgdGhlIHF1ZXVlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nIGFuZCBhbGwgb2YgdGhlIGFzc2V0cyBoYXZlIGJlZW4gbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgYWxzbyB1cGRhdGVzIHRoZSBwcm9ncmVzcyBwcm9wZXJ0eSB0byByZWZsZWN0IHRoZSBtb3N0IHVwZGF0ZSB0byBkYXRlIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEZpbmFsbHksIGlmIGFsbCBvZiB0aGUgaXRlbXMgYXJlIGxvYWRlZCwgdGhlIGxvYWQgY29tcGxldGUgZXZlbnQgaXMgZW1pdHRlZCBzaWduYWxpbmcgdGhhdCBpdCBpcyBzYWZlIHRvIHVzZSBhbGwgb2YgdGhlIFxyXG4gICAqIGxvYWRlZCBhc3NldHMuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgbW9zdCByZWNlbnRseSBsb2FkZWQgYXNzZXQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlTG9hZFN0YXR1cyhhc3NldDogQXNzZXQpIHtcclxuXHJcbiAgICB0aGlzLl9wcm9ncmVzcyA9IHBhcnNlSW50KCgodGhpcy5fYXNzZXRzTG9hZGVkIC8gdGhpcy5fYXNzZXRzVG9Mb2FkKSAqIDEwMCkudG9GaXhlZCgwKSk7XHJcblxyXG4gICAgdGhpcy5vblByb2dyZXNzLmRpc3BhdGNoKHRoaXMuX3Byb2dyZXNzKTtcclxuXHJcbiAgICB0aGlzLm9uTG9hZC5kaXNwYXRjaChhc3NldCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Fzc2V0c0xvYWRlZCA9PT0gdGhpcy5fYXNzZXRzVG9Mb2FkKSB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2goKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGFuIGFzc2V0IGVuY291bnRlcnMgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGlzIHdpbGwgZGlzcGF0Y2ggdGhlIG9uRXJyb3IgZXZlbnQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdGhhdCBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnIgVGhlIGVycm9yIHRoYXQgd2FzIGRpc3BhdGNoZWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQXNzZXRFcnJvcihhc3NldDogQXNzZXQsIGVycjogc3RyaW5nKSB7XHJcblxyXG4gICAgdGhpcy5vbkVycm9yLmRpc3BhdGNoKGFzc2V0LCBlcnIpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==