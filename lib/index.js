'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Fetch = _interopRequireDefault(require("./fetch/Fetch"));

var _Cache = _interopRequireDefault(require("./cache/Cache"));

var media = _interopRequireWildcard(require("./utils/media"));

var _Options = _interopRequireDefault(require("./options/Options"));

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
   * A reference to the options for this instance of MuskOx.
   * 
   * @private
   * 
   * @property {Options}
   */

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
   * @param {Object} [options]
    * @param {string} [options.crossOrigin=''] A cross-origin property to set for all assets that use cross-origin.
    * @param {AudioContext} [options.audioContext=new AudioContext()] A reference to an existing AudioContext to use if creating web audio assets. If one is not assigned then a new instance of an AudioContext will be used.
   */
  function MuskOx() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MuskOx);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_cache", new _Cache["default"]());

    _defineProperty(this, "_fetch", new _Fetch["default"](this.cache));

    _defineProperty(this, "_queue", []);

    _defineProperty(this, "_assetsLoaded", 0);

    _defineProperty(this, "_assetsToLoad", 0);

    _defineProperty(this, "_progress", 0);

    _defineProperty(this, "_onProgress", new _hypergiant["default"]());

    _defineProperty(this, "_onLoad", new _hypergiant["default"]());

    _defineProperty(this, "_onError", new _hypergiant["default"]());

    _defineProperty(this, "_onComplete", new _hypergiant["default"]());

    this._options = new _Options["default"](options);
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
            case 'arrayBuffer':
            case 'audioBuffer':
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
     * Multiple `src` paths can be provided in case one or more are not supported by the user's browser.
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
     * Adds an AudioBuffer to the load queue.
     * 
     * @param {string} key A unique key to reference this audio buffer by.
    * @param {string} src A path to the audio asset.
    * @param {boolean} [replace=false] Indicates whether an audio buffer with the same key should be replaced in the cache or not.
     */

  }, {
    key: "audioBuffer",
    value: function audioBuffer(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('audioBuffer', key, src, replace);
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
     * Loads an asset as an array buffer.
     * 
     * This can be useful for loading an audio asset to use with web audio.
     * 
     * @param {string} key A unique key to reference this array buffer asset by.
     * @param {string} src The path to the asset.
     * @param {boolean} [replace=false] Indicates whether an array buffer asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "arrayBuffer",
    value: function arrayBuffer(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._addToQueue('arrayBuffer', key, src, replace);
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
      if (this._options.crossOrigin) asset.data.crossOrigin = this._options.crossOrigin;
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
      var loaded = new _hypergiant["default"]();
      loaded.add(function () {
        return _this3._cacheAsset(asset);
      });
      asset.data.addEventListener('readystatechange', function () {
        if (asset.data.readyState == 4 && asset.data.status == 200) {
          switch (asset.type) {
            case 'text':
              asset.data = asset.data.responseText;
              loaded.dispatch();
              break;

            case 'binary':
              var arrayBuffer = asset.data.response;
              if (arrayBuffer) asset.data = new Uint8Array(arrayBuffer);
              loaded.dispatch();
              break;

            case 'json':
              asset.data = JSON.parse(asset.data.responseText);
              loaded.dispatch();
              break;

            case 'arrayBuffer':
              asset.data = asset.data.response;
              loaded.dispatch();
              break;

            case 'audioBuffer':
              var response = asset.data.response;

              _this3._options.audioContext.decodeAudioData(response, function (buffer) {
                asset.data = buffer;
                loaded.dispatch();
              });

              break;
          } //this._cacheAsset(asset);

        }
      }, false);
      asset.data.addEventListener('error', function (err) {
        _this3._handleAssetError(asset, err);
      }, false);
      if (asset.type == 'binary' || asset.type === 'arrayBuffer' || asset.type === 'audioBuffer') asset.data.responseType = 'arraybuffer';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJvcHRpb25zIiwiQ2FjaGUiLCJGZXRjaCIsImNhY2hlIiwiSHlwZXJnaWFudCIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9xdWV1ZSIsImxlbmd0aCIsIl91cGRhdGVMb2FkU3RhdHVzIiwiYXNzZXQiLCJ0eXBlIiwiX2xvYWREZWZhdWx0IiwiX2xvYWRDYW5QbGF5VGhyb3VnaCIsIl9sb2FkWEhSIiwia2V5Iiwic3JjIiwicmVwbGFjZSIsIl9hZGRUb1F1ZXVlIiwic3JjcyIsInB1c2giLCJfYXNzZXRzVG9Mb2FkIiwiZGF0YSIsIkltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jYWNoZUFzc2V0IiwiZXJyIiwiX2hhbmRsZUFzc2V0RXJyb3IiLCJ0b1N0cmluZyIsImNyb3NzT3JpZ2luIiwiQXJyYXkiLCJpc0FycmF5IiwiQXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtZWRpYSIsImdldFBsYXlhYmxlTWVkaWEiLCJYTUxIdHRwUmVxdWVzdCIsImxvYWRlZCIsImFkZCIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJkaXNwYXRjaCIsImFycmF5QnVmZmVyIiwicmVzcG9uc2UiLCJVaW50OEFycmF5IiwiSlNPTiIsInBhcnNlIiwiYXVkaW9Db250ZXh0IiwiZGVjb2RlQXVkaW9EYXRhIiwiYnVmZmVyIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJzZXQiLCJfYXNzZXRzTG9hZGVkIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwib25Qcm9ncmVzcyIsIm9uTG9hZCIsIm9uQ29tcGxldGUiLCJvbkVycm9yIiwiX2NhY2hlIiwiX2ZldGNoIiwiX29uUHJvZ3Jlc3MiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOztBQUVB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LGFBQU8sS0FBS0MsV0FBWjtBQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEFzc2V0IGZyb20gJy4vaW50ZXJmYWNlcy9Bc3NldCc7XHJcblxyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi9mZXRjaC9GZXRjaCc7XHJcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlL0NhY2hlJztcclxuaW1wb3J0ICogYXMgbWVkaWEgZnJvbSAnLi91dGlscy9tZWRpYSc7XHJcblxyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG5pbXBvcnQgSHlwZXJnaWFudCBmcm9tICdoeXBlcmdpYW50JztcclxuXHJcbi8qKlxyXG4gKiBNdXNrIE94IHRha2VzIGEgY29sbGVjdGlvbiBvZiBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBmb3IgdXNlIGluIHRoZSBicm93c2VyIGFuZCBhZGRzIHRoZW0gdG8gY2FjaGVcclxuICogc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIHdoZW5ldmVyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVza094IHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBpbnN0YW5jZSBvZiBNdXNrT3guXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGNhY2hlIHVzZWQgdG8gc3RvcmUgYXNzZXRzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtDYWNoZX1cclxuXHQgKi9cclxuICBwcml2YXRlIF9jYWNoZTogQ2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGZldGNoIG1vZHVsZSB1c2VkIHRvIHJldHJpZXZlIGFzc2V0cy5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0ZldGNofVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfZmV0Y2g6IEZldGNoID0gbmV3IEZldGNoKHRoaXMuY2FjaGUpO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgYXNzZXRzIHRoYXQgc3RpbGwgaGF2ZSB5ZXQgdG8gYmUgbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXk8QXNzZXQ+fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfcXVldWU6IEFycmF5PEFzc2V0PiA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2Fzc2V0c0xvYWRlZDogbnVtYmVyID0gMDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGFzc2V0cyB0aGF0IGhhdmUgeWV0IHRvIGJlIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2Fzc2V0c1RvTG9hZDogbnVtYmVyID0gMDtcclxuXHJcblx0LyoqXHJcblx0ICogQSBwZXJjZW50IHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBsb2FkaW5nIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBcclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3Byb2dyZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2lnbmFsIHRoYXQgZ2V0cyBkaXNwYXRjaGVkIHdoZW5ldmVyIHRoZSBsb2FkaW5nIHByb2dyZXNzIGlzIHVwZGF0ZWQuXHJcbiAgICogXHJcbiAgICogV2hlbiB0aGlzIHNpZ25hbCBnZXRzIGRpc3BhdGNoZWQgaXQgY29udGFpbnMgdGhlIGxvYWQgcHJvZ3Jlc3MgYXMgYSBwZXJjZW50YWdlLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uUHJvZ3Jlc3M6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2lnbmFsIHRoYXQgZ2V0cyBkaXNwYXRjaGVkIGVhY2ggdGltZSBhbiBpbmRpdmlkdWFsIGFzc2V0IGlzIGxvYWRlZC5cclxuICAgKiBcclxuICAgKiBXaGVuIHRoaXMgc2lnbmFsIGdldHMgZGlzcGF0Y2hlZCBpdCBjb250YWlucyB0aGUgYXNzZXQgdGhhdCB3YXMgbG9hZGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29uTG9hZDogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaWduYWwgdGhhdCBnZXRzIGRpc3BhdGNoZWQgd2hlbiBhbiBhc3NldCBlbmNvdW50ZXJzIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcuXHJcbiAgICogXHJcbiAgICogV2hlbiB0aGlzIHNpZ25hbCBnZXRzIGRpc3BhdGNoZWQgaXQgY29udGFpbnMgdGhlIGVycm9yIHRoYXQgd2FzIHRocm93bi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9vbkVycm9yOiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGdldHMgZGlzcGF0Y2hlZCB3aGVuIGxvYWRpbmcgaXMgY29tcGxldGUuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Db21wbGV0ZTogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49JyddIEEgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IHRvIHNldCBmb3IgYWxsIGFzc2V0cyB0aGF0IHVzZSBjcm9zcy1vcmlnaW4uXHJcbiAgICogQHBhcmFtIHtBdWRpb0NvbnRleHR9IFtvcHRpb25zLmF1ZGlvQ29udGV4dD1uZXcgQXVkaW9Db250ZXh0KCldIEEgcmVmZXJlbmNlIHRvIGFuIGV4aXN0aW5nIEF1ZGlvQ29udGV4dCB0byB1c2UgaWYgY3JlYXRpbmcgd2ViIGF1ZGlvIGFzc2V0cy4gSWYgb25lIGlzIG5vdCBhc3NpZ25lZCB0aGVuIGEgbmV3IGluc3RhbmNlIG9mIGFuIEF1ZGlvQ29udGV4dCB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0ID0ge30pIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNhY2hlIG1vZHVsZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Q2FjaGV9XHJcbiAgICovXHJcbiAgZ2V0IGNhY2hlKCk6IENhY2hlIHsgcmV0dXJuIHRoaXMuX2NhY2hlOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGZldGNoIG1vZHVsZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7RmV0Y2h9XHJcbiAgICovXHJcbiAgZ2V0IGZldGNoKCk6IEZldGNoIHsgcmV0dXJuIHRoaXMuX2ZldGNoOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcy5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG4gIGdldCBwcm9ncmVzcygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcHJvZ3Jlc3M7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgb25Qcm9ncmVzcyBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uUHJvZ3Jlc3MoKTogSHlwZXJnaWFudCB7IHJldHVybiB0aGlzLl9vblByb2dyZXNzOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGFzc2V0TG9hZGVkIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Mb2FkKCk6IEh5cGVyZ2lhbnQgeyByZXR1cm4gdGhpcy5fb25Mb2FkOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG9uRXJyb3Igc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBvbkVycm9yKCk6IEh5cGVyZ2lhbnQgeyByZXR1cm4gdGhpcy5fb25FcnJvcjsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBvbkNvbXBsZXRlIHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Db21wbGV0ZSgpOiBIeXBlcmdpYW50IHsgcmV0dXJuIHRoaXMuX29uQ29tcGxldGU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIGFzc2V0cyBmcm9tIHRoZSBsb2FkIHF1ZXVlIGFuZCBvbmUgYnkgb25lIGl0IHVzZXMgdGhlIGFwcHJvcHJpYXRlICBtZXRob2QgdG8gbG9hZCBpdCBhbmQgdGhlbiBhZGQgaXQgdG8gdGhlIGNhY2hlLlxyXG5cdCAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkgdGhpcy5fdXBkYXRlTG9hZFN0YXR1cygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXNzZXQgb2YgdGhpcy5fcXVldWUpIHtcclxuICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgdGhpcy5fbG9hZERlZmF1bHQoYXNzZXQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgIHRoaXMuX2xvYWRDYW5QbGF5VGhyb3VnaChhc3NldCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBjYXNlICdiaW5hcnknOlxyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgIGNhc2UgJ2FycmF5QnVmZmVyJzpcclxuICAgICAgICBjYXNlICdhdWRpb0J1ZmZlcic6XHJcbiAgICAgICAgICB0aGlzLl9sb2FkWEhSKGFzc2V0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGltYWdlIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGltYWdlIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIGltYWdlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGltYWdlIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGltYWdlKGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdpbWFnZScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gYXVkaW8gYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogTXVsdGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGF1ZGlvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIGF1ZGlvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGFuIGF1ZGlvIGFzc2V0IGFuZCBpdHMgZmFsbGJhY2tzLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGF1ZGlvIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGF1ZGlvKGtleTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2F1ZGlvJywga2V5LCBzcmNzLCByZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gQXVkaW9CdWZmZXIgdG8gdGhlIGxvYWQgcXVldWUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgYXVkaW8gYnVmZmVyIGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgQSBwYXRoIHRvIHRoZSBhdWRpbyBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhdWRpbyBidWZmZXIgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcbiAgICovXHJcbiAgYXVkaW9CdWZmZXIoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2F1ZGlvQnVmZmVyJywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhIHZpZGVvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHZpZGVvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIHZpZGVvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGEgdmlkZW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB2aWRlbyBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuICB2aWRlbyhrZXk6IHN0cmluZywgc3JjczogQXJyYXk8c3RyaW5nPiwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCd2aWRlbycsIGtleSwgc3JjcywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBjb250ZW50cyBvZiBhIHRleHQgZmlsZSB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyB0ZXh0IGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIHRleHQgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB0ZXh0IGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIHRleHQoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ3RleHQnLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBiaW5hcnkgY29udGVudHMgb2YgYSBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGJpbmFyeSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBiaW5hcnkgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBiaW5hcnkgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgYmluYXJ5KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdiaW5hcnknLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuXHQvKipcclxuICAgKiBBZGQgdGhlIGNvbnRlbnRzIG9mIGEgSlNPTiBmaWxlIGFzIGEgcGFyc2VkIG9iamVjdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBKU09OIGFzc2V0IGJ5LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIEpTT04gYXNzZXQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBKU09OIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG4gIGpzb24oa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2FkZFRvUXVldWUoJ2pzb24nLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyBhbiBhc3NldCBhcyBhbiBhcnJheSBidWZmZXIuXHJcbiAgICogXHJcbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGZvciBsb2FkaW5nIGFuIGF1ZGlvIGFzc2V0IHRvIHVzZSB3aXRoIHdlYiBhdWRpby5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBhcnJheSBidWZmZXIgYXNzZXQgYnkuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgYXNzZXQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXJyYXkgYnVmZmVyIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG4gICAqL1xyXG4gIGFycmF5QnVmZmVyKGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9hZGRUb1F1ZXVlKCdhcnJheUJ1ZmZlcicsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBzdXBwbGllZCBhc3NldCwgY3JlYXRlcyBhbiBhc3NldCBpbnN0YW5jZSBvdXQgb2YgaXQsIGFuZFxyXG5cdCAqIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0aGlzIGFzc2V0IGlzLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBUaGUgcGF0aC9zIHRvIHRoZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfYWRkVG9RdWV1ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzcmM6IChzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSwgcmVwbGFjZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgYXNzZXQ6IEFzc2V0ID0ge1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBrZXksXHJcbiAgICAgIHNyY1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGFzc2V0KTtcclxuXHJcbiAgICB0aGlzLl9hc3NldHNUb0xvYWQrKztcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSBzaW1wbGUgdXNlIG9mIGFuIGV2ZW50IGxpc3RlbmVyXHJcblx0ICogdGhhdCBsaXN0ZW5zIHRvIHRoZSBhc3NldCdzIGxvYWQgZXZlbnQuXHJcbiAgICogXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdG8gbG9hZC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9sb2FkRGVmYXVsdChhc3NldDogQXNzZXQpIHtcclxuICAgIGFzc2V0LmRhdGEgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NhY2hlQXNzZXQoYXNzZXQpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQXNzZXRFcnJvcihhc3NldCwgZXJyKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLnNyYyA9IGFzc2V0LnNyYy50b1N0cmluZygpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNyb3NzT3JpZ2luKSBhc3NldC5kYXRhLmNyb3NzT3JpZ2luID0gdGhpcy5fb3B0aW9ucy5jcm9zc09yaWdpbjtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIGBjYW5QbGF5VGhyb3VnaGAgZXZlbnRcclxuXHQgKiBsaXN0ZW5lci5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX2xvYWRDYW5QbGF5VGhyb3VnaChhc3NldDogQXNzZXQpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhc3NldC5zcmMpKSBhc3NldC5zcmMgPSBbYXNzZXQuc3JjXTtcclxuXHJcbiAgICBpZiAoYXNzZXQudHlwZSA9PT0gJ2F1ZGlvJykgYXNzZXQuZGF0YSA9IG5ldyBBdWRpbygpO1xyXG5cclxuICAgIGVsc2UgYXNzZXQuZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2FjaGVBc3NldChhc3NldCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVBc3NldEVycm9yKGFzc2V0LCBlcnIpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuc3JjID0gbWVkaWEuZ2V0UGxheWFibGVNZWRpYShhc3NldC50eXBlLCBhc3NldC5zcmMpO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggWEhSLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfbG9hZFhIUihhc3NldDogQXNzZXQpIHtcclxuICAgIGFzc2V0LmRhdGEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICBjb25zdCBsb2FkZWQ6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAgIGxvYWRlZC5hZGQoKCkgPT4gdGhpcy5fY2FjaGVBc3NldChhc3NldCkpO1xyXG5cclxuICAgIGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsICgpID0+IHtcclxuICAgICAgaWYgKGFzc2V0LmRhdGEucmVhZHlTdGF0ZSA9PSA0ICYmIGFzc2V0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHN3aXRjaCAoYXNzZXQudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgIGFzc2V0LmRhdGEgPSBhc3NldC5kYXRhLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZC5kaXNwYXRjaCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2JpbmFyeSc6XHJcbiAgICAgICAgICAgIGxldCBhcnJheUJ1ZmZlciA9IGFzc2V0LmRhdGEucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChhcnJheUJ1ZmZlcikgYXNzZXQuZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZC5kaXNwYXRjaCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICBhc3NldC5kYXRhID0gSlNPTi5wYXJzZShhc3NldC5kYXRhLnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gICAgICAgICAgICBsb2FkZWQuZGlzcGF0Y2goKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhcnJheUJ1ZmZlcic6XHJcbiAgICAgICAgICAgIGFzc2V0LmRhdGEgPSBhc3NldC5kYXRhLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgbG9hZGVkLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXVkaW9CdWZmZXInOlxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQXJyYXlCdWZmZXIgPSBhc3NldC5kYXRhLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5hdWRpb0NvbnRleHQhLmRlY29kZUF1ZGlvRGF0YShyZXNwb25zZSwgKGJ1ZmZlcjogQXVkaW9CdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICBhc3NldC5kYXRhID0gYnVmZmVyO1xyXG5cclxuICAgICAgICAgICAgICBsb2FkZWQuZGlzcGF0Y2goKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMuX2NhY2hlQXNzZXQoYXNzZXQpO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnI6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVBc3NldEVycm9yKGFzc2V0LCBlcnIpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChhc3NldC50eXBlID09ICdiaW5hcnknIHx8IGFzc2V0LnR5cGUgPT09ICdhcnJheUJ1ZmZlcicgfHwgYXNzZXQudHlwZSA9PT0gJ2F1ZGlvQnVmZmVyJykgYXNzZXQuZGF0YS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG5cclxuICAgIGFzc2V0LmRhdGEub3BlbignR0VUJywgYXNzZXQuc3JjKTtcclxuXHJcbiAgICBhc3NldC5kYXRhLnNlbmQoKTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBsb2FkZWQgYXNzZXQgYW5kIGFkZHMgaXQgdG8gdGhlIGNhY2hlIHdoaWxlIHVwZGF0aW5nIHByb3BlcnRpZXMgb2YgdGhpcyBtb2R1bGUgaW5jbHVkaW5nIHRoZSBsb2FkIHByb2dyZXNzLlxyXG4gICAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGxvYWRlZCBhc3NldC5cclxuXHQgKi9cclxuICBwcml2YXRlIF9jYWNoZUFzc2V0KGFzc2V0OiBBc3NldCkge1xyXG4gICAgdGhpcy5jYWNoZS5zZXQoYXNzZXQudHlwZSwgYXNzZXQua2V5LCBhc3NldC5kYXRhKTtcclxuXHJcbiAgICB0aGlzLl9hc3NldHNMb2FkZWQrKztcclxuXHJcbiAgICB0aGlzLl91cGRhdGVMb2FkU3RhdHVzKGFzc2V0KTtcclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGUgcXVldWUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcgYW5kIGFsbCBvZiB0aGUgYXNzZXRzIGhhdmUgYmVlbiBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogVGhpcyBhbHNvIHVwZGF0ZXMgdGhlIHByb2dyZXNzIHByb3BlcnR5IHRvIHJlZmxlY3QgdGhlIG1vc3QgdXBkYXRlIHRvIGRhdGUgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogRmluYWxseSwgaWYgYWxsIG9mIHRoZSBpdGVtcyBhcmUgbG9hZGVkLCB0aGUgbG9hZCBjb21wbGV0ZSBldmVudCBpcyBlbWl0dGVkIHNpZ25hbGluZyB0aGF0IGl0IGlzIHNhZmUgdG8gdXNlIGFsbCBvZiB0aGUgXHJcbiAgICogbG9hZGVkIGFzc2V0cy5cclxuICAgKiBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IFthc3NldF0gVGhlIG1vc3QgcmVjZW50bHkgbG9hZGVkIGFzc2V0LlxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUxvYWRTdGF0dXMoYXNzZXQ/OiBBc3NldCkge1xyXG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBwYXJzZUludCgoKHRoaXMuX2Fzc2V0c0xvYWRlZCAvIHRoaXMuX2Fzc2V0c1RvTG9hZCkgKiAxMDApLnRvRml4ZWQoMCkpO1xyXG5cclxuICAgIHRoaXMub25Qcm9ncmVzcy5kaXNwYXRjaCh0aGlzLl9wcm9ncmVzcyk7XHJcblxyXG4gICAgdGhpcy5vbkxvYWQuZGlzcGF0Y2goYXNzZXQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9hc3NldHNMb2FkZWQgPT09IHRoaXMuX2Fzc2V0c1RvTG9hZCkgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGFuIGFzc2V0IGVuY291bnRlcnMgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGlzIHdpbGwgZGlzcGF0Y2ggdGhlIG9uRXJyb3IgZXZlbnQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdGhhdCBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnIgVGhlIGVycm9yIHRoYXQgd2FzIGRpc3BhdGNoZWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQXNzZXRFcnJvcihhc3NldDogQXNzZXQsIGVycjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uRXJyb3IuZGlzcGF0Y2goYXNzZXQsIGVycik7XHJcbiAgfVxyXG59XHJcbiJdfQ==