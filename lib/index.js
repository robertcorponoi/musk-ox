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
      if (this._queue.length === 0) this._updateLoadStatus();
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
     * @param {Asset} [asset] The most recently loaded asset.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsIkh5cGVyZ2lhbnQiLCJfY3Jvc3NPcmlnaW4iLCJfcXVldWUiLCJsZW5ndGgiLCJfdXBkYXRlTG9hZFN0YXR1cyIsImFzc2V0IiwidHlwZSIsIl9sb2FkRGVmYXVsdCIsIl9sb2FkQ2FuUGxheVRocm91Z2giLCJfbG9hZFhIUiIsImtleSIsInNyYyIsInJlcGxhY2UiLCJfYWRkVG9RdWV1ZSIsInNyY3MiLCJwdXNoIiwiX2Fzc2V0c1RvTG9hZCIsImRhdGEiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2FjaGVBc3NldCIsImVyciIsIl9oYW5kbGVBc3NldEVycm9yIiwidG9TdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1lZGlhIiwiZ2V0UGxheWFibGVNZWRpYSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImFycmF5QnVmZmVyIiwicmVzcG9uc2UiLCJVaW50OEFycmF5IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJzZXQiLCJfYXNzZXRzTG9hZGVkIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwib25Qcm9ncmVzcyIsImRpc3BhdGNoIiwib25Mb2FkIiwib25Db21wbGV0ZSIsIm9uRXJyb3IiLCJfY2FjaGUiLCJfZmV0Y2giLCJfb25Qcm9ncmVzcyIsIl9vbkxvYWQiLCJfb25FcnJvciIsIl9vbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsTTs7O0FBRXBCOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7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QUF2QjtBQUNEO0FBRUY7Ozs7Ozs7Ozs7Ozs7OztzQ0FZMkJBLEssRUFBZTtBQUN2QyxXQUFLd0MsU0FBTCxHQUFpQkMsUUFBUSxDQUFDLENBQUUsS0FBS0YsYUFBTCxHQUFxQixLQUFLNUIsYUFBM0IsR0FBNEMsR0FBN0MsRUFBa0QrQixPQUFsRCxDQUEwRCxDQUExRCxDQUFELENBQXpCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsS0FBS0osU0FBOUI7QUFFQSxXQUFLSyxNQUFMLENBQVlELFFBQVosQ0FBcUI1QyxLQUFyQjtBQUVBLFVBQUksS0FBS3VDLGFBQUwsS0FBdUIsS0FBSzVCLGFBQWhDLEVBQStDLEtBQUttQyxVQUFMLENBQWdCRixRQUFoQjtBQUNoRDtBQUVEOzs7Ozs7Ozs7OztzQ0FRMEI1QyxLLEVBQWNnQixHLEVBQWE7QUFDbkQsV0FBSytCLE9BQUwsQ0FBYUgsUUFBYixDQUFzQjVDLEtBQXRCLEVBQTZCZ0IsR0FBN0I7QUFDRDs7O3dCQXRTa0I7QUFBRSxhQUFPLEtBQUtnQyxNQUFaO0FBQXFCO0FBRTFDOzs7Ozs7Ozt3QkFLbUI7QUFBRSxhQUFPLEtBQUtDLE1BQVo7QUFBcUI7QUFFM0M7Ozs7Ozs7O3dCQUt3QjtBQUFFLGFBQU8sS0FBS1QsU0FBWjtBQUF3QjtBQUVqRDs7Ozs7Ozs7d0JBSzZCO0FBQUUsYUFBTyxLQUFLVSxXQUFaO0FBQTBCO0FBRXpEOzs7Ozs7Ozt3QkFLeUI7QUFBRSxhQUFPLEtBQUtDLE9BQVo7QUFBc0I7QUFFakQ7Ozs7Ozs7O3dCQUswQjtBQUFFLGFBQU8sS0FBS0MsUUFBWjtBQUF1QjtBQUVuRDs7Ozs7Ozs7d0JBSzZCO0FBQUUsYUFBTyxLQUFLQyxXQUFaO0FBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQXNzZXQgZnJvbSAnLi9pbnRlcmZhY2VzL0Fzc2V0JztcclxuXHJcbmltcG9ydCBGZXRjaCBmcm9tICcuL2ZldGNoL0ZldGNoJztcclxuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUvQ2FjaGUnO1xyXG5pbXBvcnQgKiBhcyBtZWRpYSBmcm9tICcuL3V0aWxzL21lZGlhJztcclxuXHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuLyoqXHJcbiAqIE11c2sgT3ggdGFrZXMgYSBjb2xsZWN0aW9uIG9mIGFzc2V0cyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkIGZvciB1c2UgaW4gdGhlIGJyb3dzZXIgYW5kIGFkZHMgdGhlbSB0byBjYWNoZVxyXG4gKiBzbyB0aGF0IHRoZXkgY2FuIGJlIHVzZWQgd2hlbmV2ZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNrT3gge1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FjaGUgdXNlZCB0byBzdG9yZSBhc3NldHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2NhY2hlOiBDYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgZmV0Y2ggbW9kdWxlIHVzZWQgdG8gcmV0cmlldmUgYXNzZXRzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RmV0Y2h9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9mZXRjaDogRmV0Y2ggPSBuZXcgRmV0Y2godGhpcy5jYWNoZSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhc3NldHMgdGhhdCBzdGlsbCBoYXZlIHlldCB0byBiZSBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtBcnJheTxBc3NldD59XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKi9cclxuICBwcml2YXRlIF9xdWV1ZTogQXJyYXk8QXNzZXQ+ID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBhc3NldHMgdGhhdCBoYXZlIGJlZW4gbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYXNzZXRzTG9hZGVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgYXNzZXRzIHRoYXQgaGF2ZSB5ZXQgdG8gYmUgbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYXNzZXRzVG9Mb2FkOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3Jvc3NPcmlnaW4gb3B0aW9uIHBhc3NlZCB0byBNdXNrT3ggb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9jcm9zc09yaWdpbjogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHBlcmNlbnQgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IGxvYWRpbmcgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgaXMgdXBkYXRlZC5cclxuICAgKiBcclxuICAgKiBXaGVuIHRoaXMgc2lnbmFsIGdldHMgZGlzcGF0Y2hlZCBpdCBjb250YWlucyB0aGUgbG9hZCBwcm9ncmVzcyBhcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Qcm9ncmVzczogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgZWFjaCB0aW1lIGFuIGluZGl2aWR1YWwgYXNzZXQgaXMgbG9hZGVkLlxyXG4gICAqIFxyXG4gICAqIFdoZW4gdGhpcyBzaWduYWwgZ2V0cyBkaXNwYXRjaGVkIGl0IGNvbnRhaW5zIHRoZSBhc3NldCB0aGF0IHdhcyBsb2FkZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Mb2FkOiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGdldHMgZGlzcGF0Y2hlZCB3aGVuIGFuIGFzc2V0IGVuY291bnRlcnMgYW4gZXJyb3Igd2hpbGUgbG9hZGluZy5cclxuICAgKiBcclxuICAgKiBXaGVuIHRoaXMgc2lnbmFsIGdldHMgZGlzcGF0Y2hlZCBpdCBjb250YWlucyB0aGUgZXJyb3IgdGhhdCB3YXMgdGhyb3duLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uRXJyb3I6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2lnbmFsIHRoYXQgZ2V0cyBkaXNwYXRjaGVkIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9vbkNvbXBsZXRlOiBIeXBlcmdpYW50ID0gbmV3ICBIeXBlcmdpYW50KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjcm9zc09yaWdpbiBUaGUgY3Jvc3NPcmlnaW4gb3B0aW9uIHBhc3NlZCB0byBNdXNrT3ggb24gaW5pdGlhbGl6YXRpb24uXHJcblx0ICovXHJcbiAgY29uc3RydWN0b3IoY3Jvc3NPcmlnaW46IHN0cmluZyA9ICcnKSB7XHJcbiAgICB0aGlzLl9jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY2FjaGUgbW9kdWxlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtDYWNoZX1cclxuICAgKi9cclxuICBnZXQgY2FjaGUoKTogQ2FjaGUgeyByZXR1cm4gdGhpcy5fY2FjaGU7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZmV0Y2ggbW9kdWxlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtGZXRjaH1cclxuICAgKi9cclxuICBnZXQgZmV0Y2goKTogRmV0Y2ggeyByZXR1cm4gdGhpcy5fZmV0Y2g7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkaW5nIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wcm9ncmVzczsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBvblByb2dyZXNzIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Qcm9ncmVzcygpOiBIeXBlcmdpYW50IHsgcmV0dXJuIHRoaXMuX29uUHJvZ3Jlc3M7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYXNzZXRMb2FkZWQgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBvbkxvYWQoKTogSHlwZXJnaWFudCB7IHJldHVybiB0aGlzLl9vbkxvYWQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgb25FcnJvciBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uRXJyb3IoKTogSHlwZXJnaWFudCB7IHJldHVybiB0aGlzLl9vbkVycm9yOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG9uQ29tcGxldGUgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBvbkNvbXBsZXRlKCk6IEh5cGVyZ2lhbnQgeyByZXR1cm4gdGhpcy5fb25Db21wbGV0ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUYWtlcyB0aGUgYXNzZXRzIGZyb20gdGhlIGxvYWQgcXVldWUgYW5kIG9uZSBieSBvbmUgaXQgdXNlcyB0aGUgYXBwcm9wcmlhdGUgIG1ldGhvZCB0byBsb2FkIGl0IGFuZCB0aGVuIGFkZCBpdCB0byB0aGUgY2FjaGUuXHJcblx0ICovXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwKSB0aGlzLl91cGRhdGVMb2FkU3RhdHVzKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhc3NldCBvZiB0aGlzLl9xdWV1ZSkge1xyXG4gICAgICBzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICB0aGlzLl9sb2FkRGVmYXVsdChhc3NldCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgdGhpcy5fbG9hZENhblBsYXlUaHJvdWdoKGFzc2V0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgIGNhc2UgJ2JpbmFyeSc6XHJcbiAgICAgICAgY2FzZSAnanNvbic6XHJcbiAgICAgICAgICB0aGlzLl9sb2FkWEhSKGFzc2V0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGltYWdlIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGltYWdlIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIGltYWdlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGltYWdlIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGltYWdlKGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdpbWFnZScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gYXVkaW8gYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogTXVsaXBsZSBgc3JjYCBwYXRocyBjYW4gYmUgcHJvdmlkZWQgaW4gY2FzZSBvbmUgb3IgbW9yZSBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgdXNlcidzIGJyb3dzZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgYXVkaW8gYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIEEgcGF0aCB0byB0aGUgYXVkaW8gYXNzZXQgb3IgYW4gYXJyYXkgb2YgcGF0aHMgdG8gYW4gYXVkaW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXVkaW8gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgYXVkaW8oa2V5OiBzdHJpbmcsIHNyY3M6IEFycmF5PHN0cmluZz4sIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgdGhpcy5fYWRkVG9RdWV1ZSgnYXVkaW8nLCBrZXksIHNyY3MsIHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhIHZpZGVvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHZpZGVvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIHZpZGVvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGEgdmlkZW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB2aWRlbyBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICB2aWRlbyhrZXk6IHN0cmluZywgc3JjczogQXJyYXk8c3RyaW5nPiwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCd2aWRlbycsIGtleSwgc3JjcywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBjb250ZW50cyBvZiBhIHRleHQgZmlsZSB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyB0ZXh0IGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIHRleHQgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB0ZXh0IGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIHRleHQoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ3RleHQnLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBiaW5hcnkgY29udGVudHMgb2YgYSBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGJpbmFyeSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBiaW5hcnkgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBiaW5hcnkgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgYmluYXJ5KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdiaW5hcnknLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuICAgKiBBZGQgdGhlIGNvbnRlbnRzIG9mIGEgSlNPTiBmaWxlIGFzIGEgcGFyc2VkIG9iamVjdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBKU09OIGFzc2V0IGJ5LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIEpTT04gYXNzZXQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBKU09OIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGpzb24oa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2pzb24nLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUYWtlcyB0aGUgc3VwcGxpZWQgYXNzZXQsIGNyZWF0ZXMgYW4gYXNzZXQgaW5zdGFuY2Ugb3V0IG9mIGl0LCBhbmRcclxuXHQgKiBhZGRzIGl0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgYXNzZXQgdGhpcyBhc3NldCBpcy5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBzcmMgVGhlIHBhdGgvcyB0byB0aGUgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIEluZGljYXRlcyB3aGV0aGVyIGFuIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2FkZFRvUXVldWUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgc3JjOiAoc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiksIHJlcGxhY2U6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGFzc2V0OiBBc3NldCA9IHsgdHlwZTogdHlwZSwga2V5OiBrZXksIHNyYzogc3JjIH07XHJcblxyXG4gICAgdGhpcy5fcXVldWUucHVzaChhc3NldCk7XHJcblxyXG4gICAgdGhpcy5fYXNzZXRzVG9Mb2FkKys7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCB0aGUgc2ltcGxlIHVzZSBvZiBhbiBldmVudCBsaXN0ZW5lclxyXG5cdCAqIHRoYXQgbGlzdGVucyB0byB0aGUgYXNzZXQncyBsb2FkIGV2ZW50LlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfbG9hZERlZmF1bHQoYXNzZXQ6IEFzc2V0KSB7XHJcbiAgICBhc3NldC5kYXRhID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jYWNoZUFzc2V0KGFzc2V0KTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUFzc2V0RXJyb3IoYXNzZXQsIGVycik7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5zcmMgPSBhc3NldC5zcmMudG9TdHJpbmcoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fY3Jvc3NPcmlnaW4pIGFzc2V0LmRhdGEuY3Jvc3NPcmlnaW4gPSB0aGlzLl9jcm9zc09yaWdpbjtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIGBjYW5QbGF5VGhyb3VnaGAgZXZlbnRcclxuXHQgKiBsaXN0ZW5lci5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2xvYWRDYW5QbGF5VGhyb3VnaChhc3NldDogQXNzZXQpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhc3NldC5zcmMpKSBhc3NldC5zcmMgPSBbYXNzZXQuc3JjXTtcclxuXHJcbiAgICBpZiAoYXNzZXQudHlwZSA9PT0gJ2F1ZGlvJykgYXNzZXQuZGF0YSA9IG5ldyBBdWRpbygpO1xyXG5cclxuICAgIGVsc2UgYXNzZXQuZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2FjaGVBc3NldChhc3NldCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVBc3NldEVycm9yKGFzc2V0LCBlcnIpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuc3JjID0gbWVkaWEuZ2V0UGxheWFibGVNZWRpYShhc3NldC50eXBlLCBhc3NldC5zcmMpO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggWEhSLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfbG9hZFhIUihhc3NldDogQXNzZXQpIHtcclxuICAgIGFzc2V0LmRhdGEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChhc3NldC5kYXRhLnJlYWR5U3RhdGUgPT0gNCAmJiBhc3NldC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgYXNzZXQuZGF0YSA9IGFzc2V0LmRhdGEucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2JpbmFyeSc6XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXNzZXQuZGF0YS5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKGFycmF5QnVmZmVyKSBhc3NldC5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICBhc3NldC5kYXRhID0gSlNPTi5wYXJzZShhc3NldC5kYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYWNoZUFzc2V0KGFzc2V0KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQXNzZXRFcnJvcihhc3NldCwgZXJyKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoYXNzZXQudHlwZSA9PSAnYmluYXJ5JykgYXNzZXQuZGF0YS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG5cclxuICAgIGFzc2V0LmRhdGEub3BlbignR0VUJywgYXNzZXQuc3JjKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLnNlbmQoKTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBsb2FkZWQgYXNzZXQgYW5kIGFkZHMgaXQgdG8gdGhlIGNhY2hlIHdoaWxlIHVwZGF0aW5nIHByb3BlcnRpZXMgb2YgdGhpcyBtb2R1bGUgaW5jbHVkaW5nIHRoZSBsb2FkIHByb2dyZXNzLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGxvYWRlZCBhc3NldC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9jYWNoZUFzc2V0KGFzc2V0OiBBc3NldCkge1xyXG4gICAgdGhpcy5jYWNoZS5zZXQoYXNzZXQudHlwZSwgYXNzZXQua2V5LCBhc3NldC5kYXRhKTtcclxuXHJcbiAgICB0aGlzLl9hc3NldHNMb2FkZWQrKztcclxuXHJcbiAgICB0aGlzLl91cGRhdGVMb2FkU3RhdHVzKGFzc2V0KTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGUgcXVldWUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcgYW5kIGFsbCBvZiB0aGUgYXNzZXRzIGhhdmUgYmVlbiBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogVGhpcyBhbHNvIHVwZGF0ZXMgdGhlIHByb2dyZXNzIHByb3BlcnR5IHRvIHJlZmxlY3QgdGhlIG1vc3QgdXBkYXRlIHRvIGRhdGUgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogRmluYWxseSwgaWYgYWxsIG9mIHRoZSBpdGVtcyBhcmUgbG9hZGVkLCB0aGUgbG9hZCBjb21wbGV0ZSBldmVudCBpcyBlbWl0dGVkIHNpZ25hbGluZyB0aGF0IGl0IGlzIHNhZmUgdG8gdXNlIGFsbCBvZiB0aGUgXHJcbiAgICogbG9hZGVkIGFzc2V0cy5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IFthc3NldF0gVGhlIG1vc3QgcmVjZW50bHkgbG9hZGVkIGFzc2V0LlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUxvYWRTdGF0dXMoYXNzZXQ/OiBBc3NldCkge1xyXG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBwYXJzZUludCgoKHRoaXMuX2Fzc2V0c0xvYWRlZCAvIHRoaXMuX2Fzc2V0c1RvTG9hZCkgKiAxMDApLnRvRml4ZWQoMCkpO1xyXG5cclxuICAgIHRoaXMub25Qcm9ncmVzcy5kaXNwYXRjaCh0aGlzLl9wcm9ncmVzcyk7XHJcblxyXG4gICAgdGhpcy5vbkxvYWQuZGlzcGF0Y2goYXNzZXQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9hc3NldHNMb2FkZWQgPT09IHRoaXMuX2Fzc2V0c1RvTG9hZCkgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGFuIGFzc2V0IGVuY291bnRlcnMgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGlzIHdpbGwgZGlzcGF0Y2ggdGhlIG9uRXJyb3IgZXZlbnQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdGhhdCBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnIgVGhlIGVycm9yIHRoYXQgd2FzIGRpc3BhdGNoZWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQXNzZXRFcnJvcihhc3NldDogQXNzZXQsIGVycjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uRXJyb3IuZGlzcGF0Y2goYXNzZXQsIGVycik7XHJcbiAgfVxyXG59XHJcbiJdfQ==