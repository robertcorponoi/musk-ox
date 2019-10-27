'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Fetch = _interopRequireDefault(require("./fetch/Fetch"));

var _Cache = _interopRequireDefault(require("./cache/Cache"));

var media = _interopRequireWildcard(require("./utils/media"));

var _hypergiant = _interopRequireDefault(require("hypergiant"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsIkh5cGVyZ2lhbnQiLCJfY3Jvc3NPcmlnaW4iLCJfcXVldWUiLCJhc3NldCIsInR5cGUiLCJfbG9hZERlZmF1bHQiLCJfbG9hZENhblBsYXlUaHJvdWdoIiwiX2xvYWRYSFIiLCJrZXkiLCJzcmMiLCJyZXBsYWNlIiwiX2FkZFRvUXVldWUiLCJzcmNzIiwicHVzaCIsIl9hc3NldHNUb0xvYWQiLCJkYXRhIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2NhY2hlQXNzZXQiLCJlcnIiLCJfaGFuZGxlQXNzZXRFcnJvciIsInRvU3RyaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwiQXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtZWRpYSIsImdldFBsYXlhYmxlTWVkaWEiLCJYTUxIdHRwUmVxdWVzdCIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJhcnJheUJ1ZmZlciIsInJlc3BvbnNlIiwiVWludDhBcnJheSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZW5kIiwic2V0IiwiX2Fzc2V0c0xvYWRlZCIsIl91cGRhdGVMb2FkU3RhdHVzIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwib25Qcm9ncmVzcyIsImRpc3BhdGNoIiwib25Mb2FkIiwib25Db21wbGV0ZSIsIm9uRXJyb3IiLCJfY2FjaGUiLCJfZmV0Y2giLCJfb25Qcm9ncmVzcyIsIl9vbkxvYWQiLCJfb25FcnJvciIsIl9vbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLE07OztBQUVwQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7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USxDQUFDLENBQUUsS0FBS0gsYUFBTCxHQUFxQixLQUFLNUIsYUFBM0IsR0FBNEMsR0FBN0MsRUFBa0RnQyxPQUFsRCxDQUEwRCxDQUExRCxDQUFELENBQXpCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsS0FBS0osU0FBOUI7QUFFQSxXQUFLSyxNQUFMLENBQVlELFFBQVosQ0FBcUI3QyxLQUFyQjtBQUVBLFVBQUksS0FBS3VDLGFBQUwsS0FBdUIsS0FBSzVCLGFBQWhDLEVBQStDLEtBQUtvQyxVQUFMLENBQWdCRixRQUFoQjtBQUVoRDtBQUVEOzs7Ozs7Ozs7OztzQ0FRMEI3QyxLLEVBQWNnQixHLEVBQWE7QUFFbkQsV0FBS2dDLE9BQUwsQ0FBYUgsUUFBYixDQUFzQjdDLEtBQXRCLEVBQTZCZ0IsR0FBN0I7QUFFRDs7O3dCQW5Ya0I7QUFFakIsYUFBTyxLQUFLaUMsTUFBWjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQUttQjtBQUVqQixhQUFPLEtBQUtDLE1BQVo7QUFFRDtBQUVGOzs7Ozs7Ozt3QkFLd0I7QUFFckIsYUFBTyxLQUFLVCxTQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBSzZCO0FBRTNCLGFBQU8sS0FBS1UsV0FBWjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQUt5QjtBQUV2QixhQUFPLEtBQUtDLE9BQVo7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFLMEI7QUFFeEIsYUFBTyxLQUFLQyxRQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBSzZCO0FBRTNCLGFBQU8sS0FBS0MsV0FBWjtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQXNzZXQgZnJvbSAnLi9pbnRlcmZhY2VzL0Fzc2V0JztcclxuXHJcbmltcG9ydCBGZXRjaCBmcm9tICcuL2ZldGNoL0ZldGNoJztcclxuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUvQ2FjaGUnO1xyXG5pbXBvcnQgKiBhcyBtZWRpYSBmcm9tICcuL3V0aWxzL21lZGlhJztcclxuXHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuLyoqXHJcbiAqIE11c2sgT3ggdGFrZXMgYSBjb2xsZWN0aW9uIG9mIGFzc2V0cyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkIGZvciB1c2UgaW4gdGhlIGJyb3dzZXIgYW5kIGFkZHMgdGhlbSB0byBjYWNoZVxyXG4gKiBzbyB0aGF0IHRoZXkgY2FuIGJlIHVzZWQgd2hlbmV2ZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNrT3gge1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FjaGUgdXNlZCB0byBzdG9yZSBhc3NldHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2NhY2hlOiBDYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgZmV0Y2ggbW9kdWxlIHVzZWQgdG8gcmV0cmlldmUgYXNzZXRzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RmV0Y2h9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9mZXRjaDogRmV0Y2ggPSBuZXcgRmV0Y2godGhpcy5jYWNoZSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhc3NldHMgdGhhdCBzdGlsbCBoYXZlIHlldCB0byBiZSBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtBcnJheTxBc3NldD59XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9xdWV1ZTogQXJyYXk8QXNzZXQ+ID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBhc3NldHMgdGhhdCBoYXZlIGJlZW4gbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYXNzZXRzTG9hZGVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgYXNzZXRzIHRoYXQgaGF2ZSB5ZXQgdG8gYmUgbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYXNzZXRzVG9Mb2FkOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3Jvc3NPcmlnaW4gb3B0aW9uIHBhc3NlZCB0byBNdXNrT3ggb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9jcm9zc09yaWdpbjogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHBlcmNlbnQgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IGxvYWRpbmcgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgaXMgdXBkYXRlZC5cclxuICAgKiBcclxuICAgKiBXaGVuIHRoaXMgc2lnbmFsIGdldHMgZGlzcGF0Y2hlZCBpdCBjb250YWlucyB0aGUgbG9hZCBwcm9ncmVzcyBhcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Qcm9ncmVzczogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgZWFjaCB0aW1lIGFuIGluZGl2aWR1YWwgYXNzZXQgaXMgbG9hZGVkLlxyXG4gICAqIFxyXG4gICAqIFdoZW4gdGhpcyBzaWduYWwgZ2V0cyBkaXNwYXRjaGVkIGl0IGNvbnRhaW5zIHRoZSBhc3NldCB0aGF0IHdhcyBsb2FkZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Mb2FkOiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGdldHMgZGlzcGF0Y2hlZCB3aGVuIGFuIGFzc2V0IGVuY291bnRlcnMgYW4gZXJyb3Igd2hpbGUgbG9hZGluZy5cclxuICAgKiBcclxuICAgKiBXaGVuIHRoaXMgc2lnbmFsIGdldHMgZGlzcGF0Y2hlZCBpdCBjb250YWlucyB0aGUgZXJyb3IgdGhhdCB3YXMgdGhyb3duLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uRXJyb3I6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2lnbmFsIHRoYXQgZ2V0cyBkaXNwYXRjaGVkIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9vbkNvbXBsZXRlOiBIeXBlcmdpYW50ID0gbmV3ICBIeXBlcmdpYW50KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjcm9zc09yaWdpbiBUaGUgY3Jvc3NPcmlnaW4gb3B0aW9uIHBhc3NlZCB0byBNdXNrT3ggb24gaW5pdGlhbGl6YXRpb24uXHJcblx0ICovXHJcbiAgY29uc3RydWN0b3IoY3Jvc3NPcmlnaW46IHN0cmluZyA9ICcnKSB7XHJcblxyXG4gICAgdGhpcy5fY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBjYWNoZSBtb2R1bGUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0NhY2hlfVxyXG4gICAqL1xyXG4gIGdldCBjYWNoZSgpOiBDYWNoZSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGZldGNoIG1vZHVsZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7RmV0Y2h9XHJcbiAgICovXHJcbiAgZ2V0IGZldGNoKCk6IEZldGNoIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2g7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkaW5nIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG9uUHJvZ3Jlc3Mgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBvblByb2dyZXNzKCk6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vblByb2dyZXNzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGFzc2V0TG9hZGVkIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Mb2FkKCk6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vbkxvYWQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgb25FcnJvciBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uRXJyb3IoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX29uRXJyb3I7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgb25Db21wbGV0ZSBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uQ29tcGxldGUoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX29uQ29tcGxldGU7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIGFzc2V0cyBmcm9tIHRoZSBsb2FkIHF1ZXVlIGFuZCBvbmUgYnkgb25lIGl0IHVzZXMgdGhlIGFwcHJvcHJpYXRlICBtZXRob2QgdG8gbG9hZCBpdCBhbmQgdGhlbiBhZGQgaXQgdG8gdGhlIGNhY2hlLlxyXG5cdCAqL1xyXG4gIHN0YXJ0KCkge1xyXG5cclxuICAgIGZvciAoY29uc3QgYXNzZXQgb2YgdGhpcy5fcXVldWUpIHtcclxuXHJcbiAgICAgIHN3aXRjaCAoYXNzZXQudHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICB0aGlzLl9sb2FkRGVmYXVsdChhc3NldCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgIHRoaXMuX2xvYWRDYW5QbGF5VGhyb3VnaChhc3NldCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgY2FzZSAnYmluYXJ5JzpcclxuICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgIHRoaXMuX2xvYWRYSFIoYXNzZXQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gaW1hZ2UgYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgaW1hZ2UgYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gaW1hZ2UgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgaW1hZ2Uoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdpbWFnZScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGF1ZGlvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGF1ZGlvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIGF1ZGlvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGFuIGF1ZGlvIGFzc2V0IGFuZCBpdHMgZmFsbGJhY2tzLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGF1ZGlvIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGF1ZGlvKGtleTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdhdWRpbycsIGtleSwgc3JjcywgcmVwbGFjZSk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhIHZpZGVvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHZpZGVvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIHZpZGVvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGEgdmlkZW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB2aWRlbyBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICB2aWRlbyhrZXk6IHN0cmluZywgc3JjczogQXJyYXk8c3RyaW5nPiwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9RdWV1ZSgndmlkZW8nLCBrZXksIHNyY3MsIHJlcGxhY2UpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dCBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHRleHQgYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgdGV4dCBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIHRleHQgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgdGV4dChrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ3RleHQnLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgYmluYXJ5IGNvbnRlbnRzIG9mIGEgZmlsZSB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBiaW5hcnkgYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgYmluYXJ5IGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgYmluYXJ5IGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGJpbmFyeShrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2JpbmFyeScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuICAgKiBBZGQgdGhlIGNvbnRlbnRzIG9mIGEgSlNPTiBmaWxlIGFzIGEgcGFyc2VkIG9iamVjdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBKU09OIGFzc2V0IGJ5LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIEpTT04gYXNzZXQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBKU09OIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGpzb24oa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdqc29uJywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBzdXBwbGllZCBhc3NldCwgY3JlYXRlcyBhbiBhc3NldCBpbnN0YW5jZSBvdXQgb2YgaXQsIGFuZFxyXG5cdCAqIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0aGlzIGFzc2V0IGlzLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBUaGUgcGF0aC9zIHRvIHRoZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYWRkVG9RdWV1ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzcmM6IChzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSwgcmVwbGFjZTogYm9vbGVhbikge1xyXG5cclxuICAgIGNvbnN0IGFzc2V0OiBBc3NldCA9IHsgdHlwZTogdHlwZSwga2V5OiBrZXksIHNyYzogc3JjIH07XHJcblxyXG4gICAgdGhpcy5fcXVldWUucHVzaChhc3NldCk7XHJcblxyXG4gICAgdGhpcy5fYXNzZXRzVG9Mb2FkKys7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggdGhlIHNpbXBsZSB1c2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXJcclxuXHQgKiB0aGF0IGxpc3RlbnMgdG8gdGhlIGFzc2V0J3MgbG9hZCBldmVudC5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2xvYWREZWZhdWx0KGFzc2V0OiBBc3NldCkge1xyXG5cclxuICAgIGFzc2V0LmRhdGEgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9jYWNoZUFzc2V0KGFzc2V0KTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgdGhpcy5faGFuZGxlQXNzZXRFcnJvcihhc3NldCwgZXJyKTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5zcmMgPSBhc3NldC5zcmMudG9TdHJpbmcoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fY3Jvc3NPcmlnaW4pIGFzc2V0LmRhdGEuY3Jvc3NPcmlnaW4gPSB0aGlzLl9jcm9zc09yaWdpbjtcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCB0aGUgdXNlIG9mIHRoZSBgY2FuUGxheVRocm91Z2hgIGV2ZW50XHJcblx0ICogbGlzdGVuZXIuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdG8gbG9hZC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9sb2FkQ2FuUGxheVRocm91Z2goYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFzc2V0LnNyYykpIGFzc2V0LnNyYyA9IFthc3NldC5zcmNdO1xyXG5cclxuICAgIGlmIChhc3NldC50eXBlID09PSAnYXVkaW8nKSBhc3NldC5kYXRhID0gbmV3IEF1ZGlvKCk7XHJcblxyXG4gICAgZWxzZSBhc3NldC5kYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5fY2FjaGVBc3NldChhc3NldCk7XHJcblxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX2hhbmRsZUFzc2V0RXJyb3IoYXNzZXQsIGVycik7XHJcblxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuc3JjID0gbWVkaWEuZ2V0UGxheWFibGVNZWRpYShhc3NldC50eXBlLCBhc3NldC5zcmMpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIFhIUi5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2xvYWRYSFIoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG4gICAgYXNzZXQuZGF0YSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChhc3NldC5kYXRhLnJlYWR5U3RhdGUgPT0gNCAmJiBhc3NldC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XHJcblxyXG4gICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgIGFzc2V0LmRhdGEgPSBhc3NldC5kYXRhLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnYmluYXJ5JzpcclxuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhc3NldC5kYXRhLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlCdWZmZXIpIGFzc2V0LmRhdGEgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICBhc3NldC5kYXRhID0gSlNPTi5wYXJzZShhc3NldC5kYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FjaGVBc3NldChhc3NldCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX2hhbmRsZUFzc2V0RXJyb3IoYXNzZXQsIGVycik7XHJcblxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChhc3NldC50eXBlID09ICdiaW5hcnknKSBhc3NldC5kYXRhLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5vcGVuKCdHRVQnLCBhc3NldC5zcmMpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuc2VuZCgpO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBsb2FkZWQgYXNzZXQgYW5kIGFkZHMgaXQgdG8gdGhlIGNhY2hlIHdoaWxlIHVwZGF0aW5nIHByb3BlcnRpZXMgb2YgdGhpcyBtb2R1bGUgaW5jbHVkaW5nIHRoZSBsb2FkIHByb2dyZXNzLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGxvYWRlZCBhc3NldC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9jYWNoZUFzc2V0KGFzc2V0OiBBc3NldCkge1xyXG5cclxuICAgIHRoaXMuY2FjaGUuc2V0KGFzc2V0LnR5cGUsIGFzc2V0LmtleSwgYXNzZXQuZGF0YSk7XHJcblxyXG4gICAgdGhpcy5fYXNzZXRzTG9hZGVkKys7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlTG9hZFN0YXR1cyhhc3NldCk7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBxdWV1ZSBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyBhbmQgYWxsIG9mIHRoZSBhc3NldHMgaGF2ZSBiZWVuIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGFsc28gdXBkYXRlcyB0aGUgcHJvZ3Jlc3MgcHJvcGVydHkgdG8gcmVmbGVjdCB0aGUgbW9zdCB1cGRhdGUgdG8gZGF0ZSBwcm9ncmVzcy5cclxuXHQgKiBcclxuXHQgKiBGaW5hbGx5LCBpZiBhbGwgb2YgdGhlIGl0ZW1zIGFyZSBsb2FkZWQsIHRoZSBsb2FkIGNvbXBsZXRlIGV2ZW50IGlzIGVtaXR0ZWQgc2lnbmFsaW5nIHRoYXQgaXQgaXMgc2FmZSB0byB1c2UgYWxsIG9mIHRoZSBcclxuICAgKiBsb2FkZWQgYXNzZXRzLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIG1vc3QgcmVjZW50bHkgbG9hZGVkIGFzc2V0LlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUxvYWRTdGF0dXMoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBwYXJzZUludCgoKHRoaXMuX2Fzc2V0c0xvYWRlZCAvIHRoaXMuX2Fzc2V0c1RvTG9hZCkgKiAxMDApLnRvRml4ZWQoMCkpO1xyXG5cclxuICAgIHRoaXMub25Qcm9ncmVzcy5kaXNwYXRjaCh0aGlzLl9wcm9ncmVzcyk7XHJcblxyXG4gICAgdGhpcy5vbkxvYWQuZGlzcGF0Y2goYXNzZXQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9hc3NldHNMb2FkZWQgPT09IHRoaXMuX2Fzc2V0c1RvTG9hZCkgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBhbiBhc3NldCBlbmNvdW50ZXJzIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhpcyB3aWxsIGRpc3BhdGNoIHRoZSBvbkVycm9yIGV2ZW50LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRoYXQgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyIFRoZSBlcnJvciB0aGF0IHdhcyBkaXNwYXRjaGVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUFzc2V0RXJyb3IoYXNzZXQ6IEFzc2V0LCBlcnI6IHN0cmluZykge1xyXG5cclxuICAgIHRoaXMub25FcnJvci5kaXNwYXRjaChhc3NldCwgZXJyKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=