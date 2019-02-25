'use strict'; /// <reference path='../interfaces/Asset.ts' />

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fetch = _interopRequireDefault(require("./fetch/Fetch"));

var _Cache = _interopRequireDefault(require("./cache/Cache"));

var media = _interopRequireWildcard(require("./utils/media"));

var _index = _interopRequireDefault(require("eventverse/lib/index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @version 3.0.0
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

    _defineProperty(_assertThisInitialized(_this), "cache", new _Cache.default());

    _defineProperty(_assertThisInitialized(_this), "fetch", new _Fetch.default(_this.cache));

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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
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
}(_index.default);

exports.default = MuskOx;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsInF1ZXVlIiwiYXNzZXQiLCJ0eXBlIiwibG9hZERlZmF1bHQiLCJsb2FkQ2FuUGxheVRocm91Z2giLCJsb2FkWEhSIiwia2V5Iiwic3JjIiwicmVwbGFjZSIsImFkZFRvUXVldWUiLCJzcmNzIiwicHVzaCIsImFzc2V0c1RvTG9hZCIsImRhdGEiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZUFzc2V0IiwidG9TdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1lZGlhIiwiZ2V0UGxheWFibGVNZWRpYSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImFycmF5QnVmZmVyIiwicmVzcG9uc2UiLCJVaW50OEFycmF5IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJzZXQiLCJhc3NldHNMb2FkZWQiLCJ1cGRhdGVMb2FkU3RhdHVzIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiZW1pdCIsIkV2ZW50dmVyc2UiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCQSxNOzs7OztBQUVwQjs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVFBOzs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7OztBQUlBLGtCQUFZQyxXQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBRWhDOztBQUZnQyw0REE1RGxCLElBQUlDLGNBQUosRUE0RGtCOztBQUFBLDREQXBEbEIsSUFBSUMsY0FBSixDQUFVLE1B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WSxJQUFOLENBQVdxQixZQUFYLEdBQTBCLGFBQTFCO0FBRTVCakMsTUFBQUEsS0FBSyxDQUFDWSxJQUFOLENBQVdzQixJQUFYLENBQWdCLEtBQWhCLEVBQXVCbEMsS0FBSyxDQUFDTSxHQUE3QjtBQUVBTixNQUFBQSxLQUFLLENBQUNZLElBQU4sQ0FBV3VCLElBQVg7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7K0JBU21CbkMsSyxFQUFjO0FBRWhDLFdBQUtGLEtBQUwsQ0FBV3NDLEdBQVgsQ0FBZXBDLEtBQUssQ0FBQ0MsSUFBckIsRUFBMkJELEtBQUssQ0FBQ0ssR0FBakMsRUFBc0NMLEtBQUssQ0FBQ1ksSUFBNUM7QUFFQSxXQUFLeUIsWUFBTDtBQUVBLFdBQUtDLGdCQUFMLENBQXNCdEMsS0FBdEI7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBZXlCQSxLLEVBQWM7QUFFdEMsV0FBS3VDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQyxDQUFFLEtBQUtILFlBQUwsR0FBb0IsS0FBSzFCLFlBQTFCLEdBQTBDLEdBQTNDLEVBQWdEOEIsT0FBaEQsQ0FBd0QsQ0FBeEQsQ0FBRCxDQUF6QjtBQUVBLFdBQUtDLElBQUwsQ0FBVSxjQUFWLEVBQTBCMUMsS0FBSyxDQUFDWSxJQUFoQztBQUVBLFVBQUksS0FBS3lCLFlBQUwsS0FBc0IsS0FBSzFCLFlBQS9CLEVBQTZDLEtBQUsrQixJQUFMLENBQVUsZUFBVjtBQUU3Qzs7O3dCQTNUc0I7QUFFdEIsYUFBTyxLQUFLSCxTQUFaO0FBRUE7Ozs7RUF4RmtDSSxjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi9pbnRlcmZhY2VzL0Fzc2V0LnRzJyAvPlxyXG5cclxuaW1wb3J0IEZldGNoIGZyb20gJy4vZmV0Y2gvRmV0Y2gnO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9jYWNoZS9DYWNoZSc7XHJcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgRXZlbnR2ZXJzZSBmcm9tICdldmVudHZlcnNlL2xpYi9pbmRleCc7XHJcblxyXG4vKipcclxuICogTG9hZHMgdGhlIHNwZWNpZmllZCBhc3NldHMgYW5kIGFkZHMgdGhlbSB0byB0aGUgY2FjaGUuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMy4wLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2tPeCBleHRlbmRzIEV2ZW50dmVyc2Uge1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FjaGUgdXNlZCB0byBzdG9yZSBhc3NldHMuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDIuMC4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtDYWNoZX1cclxuXHQgKi9cclxuXHRjYWNoZTogQ2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSB0aGUgZmV0Y2ggbW9kdWxlIHRvIHJldHJpZXZlIGFzc2V0cyBmcm9tIHRoZSBjYWNoZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBAcmVhZG9ubHlcclxuXHQgKi9cclxuXHRmZXRjaDogRmV0Y2ggPSBuZXcgRmV0Y2godGhpcy5jYWNoZSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjcm9zc09yaWdpbiBvcHRpb24gcGFzc2VkIHRvIE11c2tPeCBvbiBpbml0aWFsaXphdGlvbi5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMy4wLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge3N0cmluZ31cclxuXHQgKiBAcmVhZG9ubHlcclxuXHQgKi9cclxuXHRjcm9zc09yaWdpbjogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTdG9yZXMgYXNzZXRzIHRoYXQgc3RpbGwgaGF2ZSB5ZXQgdG8gYmUgbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXk8QXNzZXQ+fVxyXG5cdCAqL1xyXG5cdHF1ZXVlOiBBcnJheTxBc3NldD4gPSBbXTtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiBsb2FkZWQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XHJcblx0ICovXHJcblx0YXNzZXRzTG9hZGVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgYXNzZXRzIHRoYXQgaGF2ZSB5ZXQgdG8gYmUgbG9hZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGFzc2V0c1RvTG9hZDogbnVtYmVyID0gMDtcclxuXHJcblx0LyoqXHJcblx0ICogQSBwZXJjZW50IHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBsb2FkaW5nIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBcclxuXHQgKi9cclxuXHRfcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlIEEgcmVmZXJlbmNlIHRvIHRoZSBNdXNrT3ggY2FjaGUuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNyb3NzT3JpZ2luIFRoZSBjcm9zc09yaWdpbiBvcHRpb24gcGFzc2VkIHRvIE11c2tPeCBvbiBpbml0aWFsaXphdGlvbi5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcihjcm9zc09yaWdpbjogc3RyaW5nKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkaW5nIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0Z2V0IHByb2dyZXNzKCk6IG51bWJlciB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBhc3NldHMgZnJvbSB0aGUgbG9hZCBxdWV1ZSBhbmQgb25lIGJ5IG9uZSBpdCB1c2VzIHRoZSBhcHByb3ByaWF0ZSBcclxuXHQgKiBtZXRob2QgdG8gbG9hZCBpdCBhbmQgdGhlbiBhZGQgaXQgdG8gdGhlIGNhY2hlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqL1xyXG5cdHN0YXJ0KCkge1xyXG5cclxuXHRcdGZvciAoY29uc3QgYXNzZXQgb2YgdGhpcy5xdWV1ZSkge1xyXG5cclxuXHRcdFx0c3dpdGNoIChhc3NldC50eXBlKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0XHRcdHRoaXMubG9hZERlZmF1bHQoYXNzZXQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcclxuXHRcdFx0XHRjYXNlICd2aWRlbyc6XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRDYW5QbGF5VGhyb3VnaChhc3NldCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0Y2FzZSAnYmluYXJ5JzpcclxuXHRcdFx0XHRjYXNlICdqc29uJzpcclxuXHRcdFx0XHRcdHRoaXMubG9hZFhIUihhc3NldCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhbiBpbWFnZSBhc3NldCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBpbWFnZSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhbiBpbWFnZSBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHRpbWFnZShrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgnaW1hZ2UnLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhbiBhdWRpbyBhc3NldCB0byB0aGUgbG9hZCBxdWV1ZS5cclxuXHQgKiBcclxuXHQgKiBNdWxpcGxlIGBzcmNgIHBhdGhzIGNhbiBiZSBwcm92aWRlZCBpbiBjYXNlIG9uZSBvciBtb3JlIGFyZSBub3Qgc3VwcG9ydGVkXHJcblx0ICogYnkgdGhlIHVzZXIncyBicm93c2VyLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGF1ZGlvIGFzc2V0IGJ5LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBBIHBhdGggdG8gdGhlIGF1ZGlvIGFzc2V0IG9yIGFuIGFycmF5IG9mIHBhdGhzIHRvIGFuIGF1ZGlvIGFzc2V0IGFuZCBpdHMgZmFsbGJhY2tzLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGF1ZGlvIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGF1ZGlvKGtleTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcblx0XHR0aGlzLmFkZFRvUXVldWUoJ2F1ZGlvJywga2V5LCBzcmNzLCByZXBsYWNlKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGEgdmlkZW8gYXNzZXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogTXVsaXBsZSBgc3JjYCBwYXRocyBjYW4gYmUgcHJvdmlkZWQgaW4gY2FzZSBvbmUgb3IgbW9yZSBhcmUgbm90IHN1cHBvcnRlZFxyXG5cdCAqIGJ5IHRoZSB1c2VyJ3MgYnJvd3Nlci5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyB2aWRlbyBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBzcmMgQSBwYXRoIHRvIHRoZSB2aWRlbyBhc3NldCBvciBhbiBhcnJheSBvZiBwYXRocyB0byBhIHZpZGVvIGFzc2V0IGFuZCBpdHMgZmFsbGJhY2tzLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgdmlkZW8gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcblx0dmlkZW8oa2V5OiBzdHJpbmcsIHNyY3M6IEFycmF5PHN0cmluZz4sIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgndmlkZW8nLCBrZXksIHNyY3MsIHJlcGxhY2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dCBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHRleHQgYXNzZXQgYnkuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgdGV4dCBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIHRleHQgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcblx0dGV4dChrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgndGV4dCcsIGtleSwgc3JjLCByZXBsYWNlKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBiaW5hcnkgY29udGVudHMgb2YgYSBmaWxlIHRvIHRoZSBsb2FkIHF1ZXVlLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGJpbmFyeSBhc3NldCBieS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBiaW5hcnkgYXNzZXQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBiaW5hcnkgYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcblx0YmluYXJ5KGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCdiaW5hcnknLCBrZXksIHNyYywgcmVwbGFjZSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICogQWRkIHRoZSBjb250ZW50cyBvZiBhIEpTT04gZmlsZSBhcyBhIHBhcnNlZCBvYmplY3QgdG8gdGhlIGxvYWQgcXVldWUuXHJcbiAgICogXHJcbiAgICogQHNpbmNlIDAuMS4wXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgSlNPTiBhc3NldCBieS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBwYXRoIHRvIHRoZSBKU09OIGFzc2V0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgSlNPTiBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cclxuXHQgKi9cclxuXHRqc29uKGtleTogc3RyaW5nLCBzcmM6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCdqc29uJywga2V5LCBzcmMsIHJlcGxhY2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRha2VzIHRoZSBzdXBwbGllZCBhc3NldCwgY3JlYXRlcyBhbiBhc3NldCBpbnN0YW5jZSBvdXQgb2YgaXQsIGFuZFxyXG5cdCAqIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCB0aGlzIGFzc2V0IGlzLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGFzc2V0LlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNyYyBUaGUgcGF0aC9zIHRvIHRoZSBhc3NldC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhZGRUb1F1ZXVlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHNyYzogKHN0cmluZyB8IEFycmF5PHN0cmluZz4pLCByZXBsYWNlOiBib29sZWFuKSB7XHJcblxyXG5cdFx0Y29uc3QgYXNzZXQ6IEFzc2V0ID0geyB0eXBlOiB0eXBlLCBrZXk6IGtleSwgc3JjOiBzcmMgfTtcclxuXHJcblx0XHR0aGlzLnF1ZXVlLnB1c2goYXNzZXQpO1xyXG5cclxuXHRcdHRoaXMuYXNzZXRzVG9Mb2FkKys7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggdGhlIHNpbXBsZSB1c2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXJcclxuXHQgKiB0aGF0IGxpc3RlbnMgdG8gdGhlIGFzc2V0J3MgbG9hZCBldmVudC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbG9hZERlZmF1bHQoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG5cdFx0YXNzZXQuZGF0YSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHRoaXMuY2FjaGVBc3NldChhc3NldCk7XHJcblxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyB0aGlzLmhhbmRsZUFzc2V0RXJyb3IoYXNzZXQpO1xyXG5cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLnNyYyA9IGFzc2V0LnNyYy50b1N0cmluZygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNyb3NzT3JpZ2luKVx0YXNzZXQuZGF0YS5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW47XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggdGhlIHVzZSBvZiB0aGUgYGNhblBsYXlUaHJvdWdoYCBldmVudFxyXG5cdCAqIGxpc3RlbmVyLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAyLjAuMFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGFzc2V0IHRvIGxvYWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBsb2FkQ2FuUGxheVRocm91Z2goYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFzc2V0LnNyYykpIGFzc2V0LnNyYyA9IFthc3NldC5zcmNdO1xyXG5cclxuXHRcdGlmIChhc3NldC50eXBlID09PSAnYXVkaW8nKSBhc3NldC5kYXRhID0gbmV3IEF1ZGlvKCk7XHJcblxyXG5cdFx0ZWxzZSBhc3NldC5kYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYWNoZUFzc2V0KGFzc2V0KTtcclxuXHJcblx0XHR9LCBmYWxzZSk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcclxuXHJcblx0XHRcdC8vIHRoaXMuaGFuZGxlQXNzZXRFcnJvcihhc3NldCk7XHJcblxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdGFzc2V0LmRhdGEuc3JjID0gbWVkaWEuZ2V0UGxheWFibGVNZWRpYShhc3NldC50eXBlLCBhc3NldC5zcmMpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIFhIUi5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbG9hZFhIUihhc3NldDogQXNzZXQpIHtcclxuXHJcblx0XHRhc3NldC5kYXRhID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKGFzc2V0LmRhdGEucmVhZHlTdGF0ZSA9PSA0ICYmIGFzc2V0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdFx0YXNzZXQuZGF0YSA9IGFzc2V0LmRhdGEucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdiaW5hcnknOlxyXG5cdFx0XHRcdFx0XHRjb25zdCBhcnJheUJ1ZmZlciA9IGFzc2V0LmRhdGEucmVzcG9uc2U7XHJcblx0XHRcdFx0XHRcdGlmIChhcnJheUJ1ZmZlcikgYXNzZXQuZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAnanNvbic6XHJcblx0XHRcdFx0XHRcdGFzc2V0LmRhdGEgPSBKU09OLnBhcnNlKGFzc2V0LmRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLmNhY2hlQXNzZXQoYXNzZXQpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Ly8gdGhpcy5oYW5kbGVBc3NldEVycm9yKGFzc2V0KTtcclxuXHJcblx0XHR9LCBmYWxzZSk7XHJcblxyXG5cdFx0aWYgKGFzc2V0LnR5cGUgPT0gJ2JpbmFyeScpIGFzc2V0LmRhdGEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuXHJcblx0XHRhc3NldC5kYXRhLm9wZW4oJ0dFVCcsIGFzc2V0LnNyYyk7XHJcblxyXG5cdFx0YXNzZXQuZGF0YS5zZW5kKCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGFrZXMgdGhlIGxvYWRlZCBhc3NldCBhbmQgYWRkcyBpdCB0byB0aGUgY2FjaGUgd2hpbGUgdXBkYXRpbmcgcHJvcGVydGllcyBvZiB0aGlzXHJcblx0ICogbW9kdWxlIGluY2x1ZGluZyB0aGUgbG9hZCBwcm9ncmVzcy5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBsb2FkZWQgYXNzZXQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjYWNoZUFzc2V0KGFzc2V0OiBBc3NldCkge1xyXG5cclxuXHRcdHRoaXMuY2FjaGUuc2V0KGFzc2V0LnR5cGUsIGFzc2V0LmtleSwgYXNzZXQuZGF0YSk7XHJcblxyXG5cdFx0dGhpcy5hc3NldHNMb2FkZWQrKztcclxuXHJcblx0XHR0aGlzLnVwZGF0ZUxvYWRTdGF0dXMoYXNzZXQpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGUgcXVldWUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcgYW5kIGFsbCBvZiB0aGUgYXNzZXRzIGhhdmVcclxuXHQgKiBiZWVuIGxvYWRlZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGFsc28gdXBkYXRlcyB0aGUgcHJvZ3Jlc3MgcHJvcGVydHkgdG8gcmVmbGVjdCB0aGUgbW9zdCB1cGRhdGUgdG8gZGF0ZVxyXG5cdCAqIHByb2dyZXNzLlxyXG5cdCAqIFxyXG5cdCAqIEZpbmFsbHksIGlmIGFsbCBvZiB0aGUgaXRlbXMgYXJlIGxvYWRlZCwgdGhlIGxvYWQgY29tcGxldGUgZXZlbnQgaXMgZW1pdHRlZFxyXG5cdCAqIHNpZ25hbGluZyB0aGF0IGl0IGlzIHNhZmUgdG8gdXNlIGFsbCBvZiB0aGUgbG9hZGVkIGFzc2V0cy5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMi4wLjBcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBtb3N0IHJlY2VudGx5IGxvYWRlZCBhc3NldC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZUxvYWRTdGF0dXMoYXNzZXQ6IEFzc2V0KSB7XHJcblxyXG5cdFx0dGhpcy5fcHJvZ3Jlc3MgPSBwYXJzZUludCgoKHRoaXMuYXNzZXRzTG9hZGVkIC8gdGhpcy5hc3NldHNUb0xvYWQpICogMTAwKS50b0ZpeGVkKDApKTtcclxuXHJcblx0XHR0aGlzLmVtaXQoJ2Fzc2V0LWxvYWRlZCcsIGFzc2V0LmRhdGEpO1xyXG5cclxuXHRcdGlmICh0aGlzLmFzc2V0c0xvYWRlZCA9PT0gdGhpcy5hc3NldHNUb0xvYWQpIHRoaXMuZW1pdCgnbG9hZC1jb21wbGV0ZScpO1xyXG5cclxuXHR9XHJcblxyXG59Il19