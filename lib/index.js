'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Fetch = _interopRequireDefault(require("./fetch/Fetch"));

var _Cache = _interopRequireDefault(require("./cache/Cache"));

var media = _interopRequireWildcard(require("./utils/media"));

var _index = _interopRequireDefault(require("eventverse/lib/index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Loads the specified assets and adds them to the cache.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 3.1.0
 */
var MuskOx =
/*#__PURE__*/
function (_Eventverse) {
  _inherits(MuskOx, _Eventverse);

  /**
   * A reference to the cache used to store assets.
   * 
   * @since 2.0.0
   * 
   * @property {Cache}
   */

  /**
   * Initialize the fetch module to retrieve assets from the cache.
   * 
   * @since 2.0.0
   * @readonly
   */

  /**
   * The crossOrigin option passed to MuskOx on initialization.
   * 
   * @since 3.0.0
   * 
   * @property {string}
   * @readonly
   */

  /**
   * Stores assets that still have yet to be loaded.
   * 
   * @since 0.1.0
   * 
   * @property {Array<Asset>}
   */

  /**
   * The current number of assets that have been loaded.
   * 
   * @since 0.1.0
   * 
   * @property {number}
   */

  /**
   * The current number of assets that have yet to be loaded.
   * 
   * @since 0.1.0
   * 
   * @property {number}
   */

  /**
   * A percent value that represents the current loading progress.
   * 
   * @since 0.1.0
   * 
   * @property {number} 
   */

  /**
   * @param {Cache} cache A reference to the MuskOx cache.
   * @param {string} crossOrigin The crossOrigin option passed to MuskOx on initialization.
   */
  function MuskOx(crossOrigin) {
    var _this;

    _classCallCheck(this, MuskOx);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MuskOx).call(this));

    _defineProperty(_assertThisInitialized(_this), "cache", new _Cache["default"]());

    _defineProperty(_assertThisInitialized(_this), "fetch", new _Fetch["default"](_this.cache));

    _defineProperty(_assertThisInitialized(_this), "crossOrigin", void 0);

    _defineProperty(_assertThisInitialized(_this), "queue", []);

    _defineProperty(_assertThisInitialized(_this), "assetsLoaded", 0);

    _defineProperty(_assertThisInitialized(_this), "assetsToLoad", 0);

    _defineProperty(_assertThisInitialized(_this), "_progress", 0);

    _this.crossOrigin = crossOrigin;
    return _this;
  }
  /**
   * Returns the current loading progress.
   * 
   * @since 0.1.0
   * 
   * @returns {number}
   */


  _createClass(MuskOx, [{
    key: "start",

    /**
     * Takes the assets from the load queue and one by one it uses the appropriate 
     * method to load it and then add it to the cache.
     * 
     * @since 0.1.0
     */
    value: function start() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var asset = _step.value;

          switch (asset.type) {
            case 'image':
              this.loadDefault(asset);
              break;

            case 'audio':
            case 'video':
              this.loadCanPlayThrough(asset);
              break;

            case 'text':
            case 'binary':
            case 'json':
              this.loadXHR(asset);
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
     * @since 0.1.0
     * 
     * @param {string} key A unique key to reference this image asset by.
     * @param {string} src The path to the image asset.
     * @param {boolean} [replace=false] Indicates whether an image asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "image",
    value: function image(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('image', key, src, replace);
    }
    /**
     * Adds an audio asset to the load queue.
     * 
     * Muliple `src` paths can be provided in case one or more are not supported
     * by the user's browser.
     * 
     * @since 0.1.0
     * 
     * @param {string} key A unique key to reference this audio asset by.
     * @param {string|Array<string>} src A path to the audio asset or an array of paths to an audio asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether an audio asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "audio",
    value: function audio(key, srcs) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('audio', key, srcs, replace);
    }
    /**
     * Adds a video asset to the load queue.
     * 
     * Muliple `src` paths can be provided in case one or more are not supported
     * by the user's browser.
     * 
     * @since 0.1.0
     * 
     * @param {string} key A unique key to reference this video asset by.
     * @param {string|Array<string>} src A path to the video asset or an array of paths to a video asset and its fallbacks.
     * @param {boolean} [replace=false] Indicates whether a video asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "video",
    value: function video(key, srcs) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('video', key, srcs, replace);
    }
    /**
     * Adds the contents of a text file to the load queue.
     * 
     * @since 0.1.0
     * 
     * @param {string} key A unique key to reference this text asset by.
     * @param {string} src The path to the text asset.
     * @param {boolean} [replace=false] Indicates whether a text asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "text",
    value: function text(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('text', key, src, replace);
    }
    /**
     * Adds the binary contents of a file to the load queue.
     * 
     * @since 0.1.0
     * 
     * @param {string} key A unique key to reference this binary asset by.
     * @param {string} src The path to the binary asset.
     * @param {boolean} [replace=false] Indicates whether a binary asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "binary",
    value: function binary(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('binary', key, src, replace);
    }
    /**
      * Add the contents of a JSON file as a parsed object to the load queue.
      * 
      * @since 0.1.0
      * 
      * @param {string} key A unique key to reference this JSON asset by.
      * @param {string} src The path to the JSON asset.
      * @param {boolean} [replace=false] Indicates whether a JSON asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "json",
    value: function json(key, src) {
      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.addToQueue('json', key, src, replace);
    }
    /**
     * Takes the supplied asset, creates an asset instance out of it, and
     * adds it to the load queue.
     * 
     * @since 0.1.0
     * @private
     * 
     * @param {string} type The type of asset this asset is.
     * @param {string} key The key for the asset.
     * @param {string|Array<string>} src The path/s to the asset.
     * @param {boolean} replace Indicates whether an asset with the same key should be replaced in the cache or not.
     */

  }, {
    key: "addToQueue",
    value: function addToQueue(type, key, src, replace) {
      var asset = {
        type: type,
        key: key,
        src: src
      };
      this.queue.push(asset);
      this.assetsToLoad++;
    }
    /**
     * Load assets that can be loaded through the simple use of an event listener
     * that listens to the asset's load event.
     * 
     * @since 2.0.0
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "loadDefault",
    value: function loadDefault(asset) {
      var _this2 = this;

      asset.data = new Image();
      asset.data.addEventListener('load', function () {
        _this2.cacheAsset(asset);
      }, false);
      asset.data.addEventListener('error', function () {// this.handleAssetError(asset);
      }, false);
      asset.data.src = asset.src.toString();
      if (this.crossOrigin) asset.data.crossOrigin = this.crossOrigin;
    }
    /**
     * Load assets that can be loaded through the use of the `canPlayThrough` event
     * listener.
     * 
     * @since 2.0.0
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "loadCanPlayThrough",
    value: function loadCanPlayThrough(asset) {
      var _this3 = this;

      if (!Array.isArray(asset.src)) asset.src = [asset.src];
      if (asset.type === 'audio') asset.data = new Audio();else asset.data = document.createElement('video');
      asset.data.addEventListener('canplaythrough', function () {
        _this3.cacheAsset(asset);
      }, false);
      asset.data.addEventListener('error', function () {// this.handleAssetError(asset);
      }, false);
      asset.data.src = media.getPlayableMedia(asset.type, asset.src);
    }
    /**
     * Load assets that can be loaded through XHR.
     * 
     * @since 2.0.0
     * @private
     * 
     * @param {Asset} asset The asset to load.
     */

  }, {
    key: "loadXHR",
    value: function loadXHR(asset) {
      var _this4 = this;

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

          _this4.cacheAsset(asset);
        }
      }, false);
      asset.data.addEventListener('error', function () {// this.handleAssetError(asset);
      }, false);
      if (asset.type == 'binary') asset.data.responseType = 'arraybuffer';
      asset.data.open('GET', asset.src);
      asset.data.send();
    }
    /**
     * Takes the loaded asset and adds it to the cache while updating properties of this
     * module including the load progress.
     * 
     * @since 2.0.0
     * @private
     * 
     * @param {Asset} asset The loaded asset.
     */

  }, {
    key: "cacheAsset",
    value: function cacheAsset(asset) {
      this.cache.set(asset.type, asset.key, asset.data);
      this.assetsLoaded++;
      this.updateLoadStatus(asset);
    }
    /**
     * Check to see if the queue has finished processing and all of the assets have
     * been loaded.
     * 
     * This also updates the progress property to reflect the most update to date
     * progress.
     * 
     * Finally, if all of the items are loaded, the load complete event is emitted
     * signaling that it is safe to use all of the loaded assets.
     * 
     * @since 2.0.0
     * @private
     * 
     * @param {Asset} asset The most recently loaded asset.
     */

  }, {
    key: "updateLoadStatus",
    value: function updateLoadStatus(asset) {
      this._progress = parseInt((this.assetsLoaded / this.assetsToLoad * 100).toFixed(0));
      this.emit('asset-loaded', asset.data);
      if (this.assetsLoaded === this.assetsToLoad) this.emit('load-complete');
    }
  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
  }]);

  return MuskOx;
}(_index["default"]);

exports["default"] = MuskOx;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsInF1ZXVlIiwiYXNzZXQiLCJ0eXBlIiwibG9hZERlZmF1bHQiLCJsb2FkQ2FuUGxheVRocm91Z2giLCJsb2FkWEhSIiwia2V5Iiwic3JjIiwicmVwbGFjZSIsImFkZFRvUXVldWUiLCJzcmNzIiwicHVzaCIsImFzc2V0c1RvTG9hZCIsImRhdGEiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZUFzc2V0IiwidG9TdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1lZGlhIiwiZ2V0UGxheWFibGVNZWRpYSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImFycmF5QnVmZmVyIiwicmVzcG9uc2UiLCJVaW50OEFycmF5IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJzZXQiLCJhc3NldHNMb2FkZWQiLCJ1cGRhdGVMb2FkU3RhdHVzIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiZW1pdCIsIkV2ZW50dmVyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsTTs7Ozs7QUFFcEI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7QUFJQSxrQkFBWUMsV0FBWixFQUFpQztBQUFBOztBQUFBOztBQUVoQzs7QUFGZ0MsNERBNURsQixJQUFJQyxpQkFBSixFQTREa0I7O0FBQUEsNERBcERsQixJQUFJQyxpQkFBSixDQUFVLE1BQUtD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QUFOLENBQVdxQixZQUFYLEdBQTBCLGFBQTFCO0FBRTVCakMsTUFBQUEsS0FBSyxDQUFDWSxJQUFOLENBQVdzQixJQUFYLENBQWdCLEtBQWhCLEVBQXVCbEMsS0FBSyxDQUFDTSxHQUE3QjtBQUVBTixNQUFBQSxLQUFLLENBQUNZLElBQU4sQ0FBV3VCLElBQVg7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7K0JBU21CbkMsSyxFQUFjO0FBRWhDLFdBQUtGLEtBQUwsQ0FBV3NDLEdBQVgsQ0FBZXBDLEtBQUssQ0FBQ0MsSUFBckIsRUFBMkJELEtBQUssQ0FBQ0ssR0FBakMsRUFBc0NMLEtBQUssQ0FBQ1ksSUFBNUM7QUFFQSxXQUFLeUIsWUFBTDtBQUVBLFdBQUtDLGdCQUFMLENBQXNCdEMsS0FBdEI7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBZXlCQSxLLEVBQWM7QUFFdEMsV0FBS3VDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQyxDQUFFLEtBQUtILFlBQUwsR0FBb0IsS0FBSzFCLFlBQTFCLEdBQTBDLEdBQTNDLEVBQWdEOEIsT0FBaEQsQ0FBd0QsQ0FBeEQsQ0FBRCxDQUF6QjtBQUVBLFdBQUtDLElBQUwsQ0FBVSxjQUFWLEVBQTBCMUMsS0FBSyxDQUFDWSxJQUFoQztBQUVBLFVBQUksS0FBS3lCLFlBQUwsS0FBc0IsS0FBSzFCLFlBQS9CLEVBQTZDLEtBQUsrQixJQUFMLENBQVUsZUFBVjtBQUU3Qzs7O3dCQTNUc0I7QUFFdEIsYUFBTyxLQUFLSCxTQUFaO0FBRUE7Ozs7RUF4RmtDSSxpQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEFzc2V0IGZyb20gJy4vaW50ZXJmYWNlcy9Bc3NldCc7XHJcblxyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi9mZXRjaC9GZXRjaCc7XHJcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlL0NhY2hlJztcclxuaW1wb3J0ICogYXMgbWVkaWEgZnJvbSAnLi91dGlscy9tZWRpYSc7XHJcbmltcG9ydCBFdmVudHZlcnNlIGZyb20gJ2V2ZW50dmVyc2UvbGliL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgc3BlY2lmaWVkIGFzc2V0cyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBjYWNoZS5cclxuICogXHJcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pIDxyb2JlcnRjb3Jwb25vaUBnbWFpbC5jb20+XHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAzLjEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVza094IGV4dGVuZHMgRXZlbnR2ZXJzZSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWNoZSB1c2VkIHRvIHN0b3JlIGFzc2V0cy5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxyXG5cdCAqL1xyXG5cdGNhY2hlOiBDYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIHRoZSBmZXRjaCBtb2R1bGUgdG8gcmV0cmlldmUgYXNzZXRzIGZyb20gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEByZWFkb25seVxyXG5cdCAqL1xyXG5cdGZldGNoOiBGZXRjaCA9IG5ldyBGZXRjaCh0aGlzLmNhY2hlKTtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGNyb3NzT3JpZ2luIG9wdGlvbiBwYXNzZWQgdG8gTXVza094IG9uIGluaXRpYWxpemF0aW9uLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAzLjAuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG5cdCAqIEByZWFkb25seVxyXG5cdCAqL1xyXG5cdGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN0b3JlcyBhc3NldHMgdGhhdCBzdGlsbCBoYXZlIHlldCB0byBiZSBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtBcnJheTxBc3NldD59XHJcblx0ICovXHJcblx0cXVldWU6IEFycmF5PEFzc2V0PiA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cclxuXHQgKi9cclxuXHRhc3NldHNMb2FkZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBhc3NldHMgdGhhdCBoYXZlIHlldCB0byBiZSBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XHJcblx0ICovXHJcblx0YXNzZXRzVG9Mb2FkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHBlcmNlbnQgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IGxvYWRpbmcgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFxyXG5cdCAqL1xyXG5cdF9wcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDYWNoZX0gY2FjaGUgQSByZWZlcmVuY2UgdG8gdGhlIE11c2tPeCBjYWNoZS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NPcmlnaW4gVGhlIGNyb3NzT3JpZ2luIG9wdGlvbiBwYXNzZWQgdG8gTXVza094IG9uIGluaXRpYWxpemF0aW9uLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGNyb3NzT3JpZ2luOiBzdHJpbmcpIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvYWRpbmcgcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge251bWJlcn1cclxuXHQgKi9cclxuXHRnZXQgcHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5fcHJvZ3Jlc3M7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIGFzc2V0cyBmcm9tIHRoZSBsb2FkIHF1ZXVlIGFuZCBvbmUgYnkgb25lIGl0IHVzZXMgdGhlIGFwcHJvcHJpYXRlIFxyXG5cdCAqIG1ldGhvZCB0byBsb2FkIGl0IGFuZCB0aGVuIGFkZCBpdCB0byB0aGUgY2FjaGUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICovXHJcblx0c3RhcnQoKSB7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBhc3NldCBvZiB0aGlzLnF1ZXVlKSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcclxuXHJcblx0XHRcdFx0Y2FzZSAnaW1hZ2UnOlxyXG5cdFx0XHRcdFx0dGhpcy5sb2FkRGVmYXVsdChhc3NldCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYXVkaW8nOlxyXG5cdFx0XHRcdGNhc2UgJ3ZpZGVvJzpcclxuXHRcdFx0XHRcdHRoaXMubG9hZENhblBsYXlUaHJvdWdoKGFzc2V0KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRjYXNlICdiaW5hcnknOlxyXG5cdFx0XHRcdGNhc2UgJ2pzb24nOlxyXG5cdFx0XHRcdFx0dGhpcy5sb2FkWEhSKGFzc2V0KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGltYWdlIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGltYWdlIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIGltYWdlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGltYWdlIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGltYWdlKGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCdpbWFnZScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGFuIGF1ZGlvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWRcclxuXHQgKiBieSB0aGUgdXNlcidzIGJyb3dzZXIuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgYXVkaW8gYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIEEgcGF0aCB0byB0aGUgYXVkaW8gYXNzZXQgb3IgYW4gYXJyYXkgb2YgcGF0aHMgdG8gYW4gYXVkaW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXVkaW8gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcblx0YXVkaW8oa2V5OiBzdHJpbmcsIHNyY3M6IEFycmF5PHN0cmluZz4sIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgnYXVkaW8nLCBrZXksIHNyY3MsIHJlcGxhY2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSB2aWRlbyBhc3NldCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBNdWxpcGxlIGBzcmNgIHBhdGhzIGNhbiBiZSBwcm92aWRlZCBpbiBjYXNlIG9uZSBvciBtb3JlIGFyZSBub3Qgc3VwcG9ydGVkXHJcblx0ICogYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHZpZGVvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIHZpZGVvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGEgdmlkZW8gYXNzZXQgYW5kIGl0cyBmYWxsYmFja3MuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB2aWRlbyBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHR2aWRlbyhrZXk6IHN0cmluZywgc3JjczogQXJyYXk8c3RyaW5nPiwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCd2aWRlbycsIGtleSwgc3JjcywgcmVwbGFjZSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgY29udGVudHMgb2YgYSB0ZXh0IGZpbGUgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgdGV4dCBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSB0ZXh0IGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgdGV4dCBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHR0ZXh0KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCd0ZXh0Jywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGJpbmFyeSBjb250ZW50cyBvZiBhIGZpbGUgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgYmluYXJ5IGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIGJpbmFyeSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIGJpbmFyeSBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHRiaW5hcnkoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcblx0XHR0aGlzLmFkZFRvUXVldWUoJ2JpbmFyeScsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgKiBBZGQgdGhlIGNvbnRlbnRzIG9mIGEgSlNPTiBmaWxlIGFzIGEgcGFyc2VkIG9iamVjdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuICAgKiBcclxuICAgKiBAc2luY2UgMC4xLjBcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBKU09OIGFzc2V0IGJ5LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIEpTT04gYXNzZXQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBKU09OIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGpzb24oa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcblx0XHR0aGlzLmFkZFRvUXVldWUoJ2pzb24nLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIHN1cHBsaWVkIGFzc2V0LCBjcmVhdGVzIGFuIGFzc2V0IGluc3RhbmNlIG91dCBvZiBpdCwgYW5kXHJcblx0ICogYWRkcyBpdCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRoaXMgYXNzZXQgaXMuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIFRoZSBwYXRoL3MgdG8gdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGFkZFRvUXVldWUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgc3JjOiAoc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiksIHJlcGxhY2U6IGJvb2xlYW4pIHtcclxuXHJcblx0XHRjb25zdCBhc3NldDogQXNzZXQgPSB7IHR5cGU6IHR5cGUsIGtleToga2V5LCBzcmM6IHNyYyB9O1xyXG5cclxuXHRcdHRoaXMucXVldWUucHVzaChhc3NldCk7XHJcblxyXG5cdFx0dGhpcy5hc3NldHNUb0xvYWQrKztcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCB0aGUgc2ltcGxlIHVzZSBvZiBhbiBldmVudCBsaXN0ZW5lclxyXG5cdCAqIHRoYXQgbGlzdGVucyB0byB0aGUgYXNzZXQncyBsb2FkIGV2ZW50LlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBsb2FkRGVmYXVsdChhc3NldDogQXNzZXQpIHtcclxuXHJcblx0XHRhc3NldC5kYXRhID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYWNoZUFzc2V0KGFzc2V0KTtcclxuXHJcblx0XHR9LCBmYWxzZSk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcclxuXHJcblx0XHRcdC8vIHRoaXMuaGFuZGxlQXNzZXRFcnJvcihhc3NldCk7XHJcblxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuc3JjID0gYXNzZXQuc3JjLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3Jvc3NPcmlnaW4pXHRhc3NldC5kYXRhLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCB0aGUgdXNlIG9mIHRoZSBgY2FuUGxheVRocm91Z2hgIGV2ZW50XHJcblx0ICogbGlzdGVuZXIuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDIuMC4wXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Fzc2V0fSBhc3NldCBUaGUgYXNzZXQgdG8gbG9hZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGxvYWRDYW5QbGF5VGhyb3VnaChhc3NldDogQXNzZXQpIHtcclxuXHJcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXNzZXQuc3JjKSkgYXNzZXQuc3JjID0gW2Fzc2V0LnNyY107XHJcblxyXG5cdFx0aWYgKGFzc2V0LnR5cGUgPT09ICdhdWRpbycpIGFzc2V0LmRhdGEgPSBuZXcgQXVkaW8oKTtcclxuXHJcblx0XHRlbHNlIGFzc2V0LmRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhY2hlQXNzZXQoYXNzZXQpO1xyXG5cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Ly8gdGhpcy5oYW5kbGVBc3NldEVycm9yKGFzc2V0KTtcclxuXHJcblx0XHR9LCBmYWxzZSk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5zcmMgPSBtZWRpYS5nZXRQbGF5YWJsZU1lZGlhKGFzc2V0LnR5cGUsIGFzc2V0LnNyYyk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggWEhSLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBsb2FkWEhSKGFzc2V0OiBBc3NldCkge1xyXG5cclxuXHRcdGFzc2V0LmRhdGEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoYXNzZXQuZGF0YS5yZWFkeVN0YXRlID09IDQgJiYgYXNzZXQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoYXNzZXQudHlwZSkge1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHRhc3NldC5kYXRhID0gYXNzZXQuZGF0YS5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ2JpbmFyeSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IGFycmF5QnVmZmVyID0gYXNzZXQuZGF0YS5yZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0aWYgKGFycmF5QnVmZmVyKSBhc3NldC5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdqc29uJzpcclxuXHRcdFx0XHRcdFx0YXNzZXQuZGF0YSA9IEpTT04ucGFyc2UoYXNzZXQuZGF0YS5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FjaGVBc3NldChhc3NldCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyB0aGlzLmhhbmRsZUFzc2V0RXJyb3IoYXNzZXQpO1xyXG5cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRpZiAoYXNzZXQudHlwZSA9PSAnYmluYXJ5JykgYXNzZXQuZGF0YS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEub3BlbignR0VUJywgYXNzZXQuc3JjKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLnNlbmQoKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUYWtlcyB0aGUgbG9hZGVkIGFzc2V0IGFuZCBhZGRzIGl0IHRvIHRoZSBjYWNoZSB3aGlsZSB1cGRhdGluZyBwcm9wZXJ0aWVzIG9mIHRoaXNcclxuXHQgKiBtb2R1bGUgaW5jbHVkaW5nIHRoZSBsb2FkIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGxvYWRlZCBhc3NldC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNhY2hlQXNzZXQoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG5cdFx0dGhpcy5jYWNoZS5zZXQoYXNzZXQudHlwZSwgYXNzZXQua2V5LCBhc3NldC5kYXRhKTtcclxuXHJcblx0XHR0aGlzLmFzc2V0c0xvYWRlZCsrO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTG9hZFN0YXR1cyhhc3NldCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBxdWV1ZSBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyBhbmQgYWxsIG9mIHRoZSBhc3NldHMgaGF2ZVxyXG5cdCAqIGJlZW4gbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgYWxzbyB1cGRhdGVzIHRoZSBwcm9ncmVzcyBwcm9wZXJ0eSB0byByZWZsZWN0IHRoZSBtb3N0IHVwZGF0ZSB0byBkYXRlXHJcblx0ICogcHJvZ3Jlc3MuXHJcblx0ICogXHJcblx0ICogRmluYWxseSwgaWYgYWxsIG9mIHRoZSBpdGVtcyBhcmUgbG9hZGVkLCB0aGUgbG9hZCBjb21wbGV0ZSBldmVudCBpcyBlbWl0dGVkXHJcblx0ICogc2lnbmFsaW5nIHRoYXQgaXQgaXMgc2FmZSB0byB1c2UgYWxsIG9mIHRoZSBsb2FkZWQgYXNzZXRzLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIG1vc3QgcmVjZW50bHkgbG9hZGVkIGFzc2V0LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlTG9hZFN0YXR1cyhhc3NldDogQXNzZXQpIHtcclxuXHJcblx0XHR0aGlzLl9wcm9ncmVzcyA9IHBhcnNlSW50KCgodGhpcy5hc3NldHNMb2FkZWQgLyB0aGlzLmFzc2V0c1RvTG9hZCkgKiAxMDApLnRvRml4ZWQoMCkpO1xyXG5cclxuXHRcdHRoaXMuZW1pdCgnYXNzZXQtbG9hZGVkJywgYXNzZXQuZGF0YSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXNzZXRzTG9hZGVkID09PSB0aGlzLmFzc2V0c1RvTG9hZCkgdGhpcy5lbWl0KCdsb2FkLWNvbXBsZXRlJyk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIl19