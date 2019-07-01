'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNdXNrT3giLCJjcm9zc09yaWdpbiIsIkNhY2hlIiwiRmV0Y2giLCJjYWNoZSIsInF1ZXVlIiwiYXNzZXQiLCJ0eXBlIiwibG9hZERlZmF1bHQiLCJsb2FkQ2FuUGxheVRocm91Z2giLCJsb2FkWEhSIiwia2V5Iiwic3JjIiwicmVwbGFjZSIsImFkZFRvUXVldWUiLCJzcmNzIiwicHVzaCIsImFzc2V0c1RvTG9hZCIsImRhdGEiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZUFzc2V0IiwidG9TdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1lZGlhIiwiZ2V0UGxheWFibGVNZWRpYSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImFycmF5QnVmZmVyIiwicmVzcG9uc2UiLCJVaW50OEFycmF5IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJzZXQiLCJhc3NldHNMb2FkZWQiLCJ1cGRhdGVMb2FkU3RhdHVzIiwiX3Byb2dyZXNzIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiZW1pdCIsIkV2ZW50dmVyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJBLE07Ozs7O0FBRXBCOzs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7O0FBSUEsa0JBQVlDLFdBQVosRUFBaUM7QUFBQTs7QUFBQTs7QUFFaEM7O0FBRmdDLDREQTVEbEIsSUFBSUMsY0FBSixFQTREa0I7O0FBQUEsNERBcERsQixJQUFJQyxjQUFKLENBQVUsTUFBS0MsS0FB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Q0FBV3FCLFlBQVgsR0FBMEIsYUFBMUI7QUFFNUJqQyxNQUFBQSxLQUFLLENBQUNZLElBQU4sQ0FBV3NCLElBQVgsQ0FBZ0IsS0FBaEIsRUFBdUJsQyxLQUFLLENBQUNNLEdBQTdCO0FBRUFOLE1BQUFBLEtBQUssQ0FBQ1ksSUFBTixDQUFXdUIsSUFBWDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzsrQkFTbUJuQyxLLEVBQWM7QUFFaEMsV0FBS0YsS0FBTCxDQUFXc0MsR0FBWCxDQUFlcEMsS0FBSyxDQUFDQyxJQUFyQixFQUEyQkQsS0FBSyxDQUFDSyxHQUFqQyxFQUFzQ0wsS0FBSyxDQUFDWSxJQUE1QztBQUVBLFdBQUt5QixZQUFMO0FBRUEsV0FBS0MsZ0JBQUwsQ0FBc0J0QyxLQUF0QjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FleUJBLEssRUFBYztBQUV0QyxXQUFLdUMsU0FBTCxHQUFpQkMsUUFBUSxDQUFDLENBQUUsS0FBS0gsWUFBTCxHQUFvQixLQUFLMUIsWUFBMUIsR0FBMEMsR0FBM0MsRUFBZ0Q4QixPQUFoRCxDQUF3RCxDQUF4RCxDQUFELENBQXpCO0FBRUEsV0FBS0MsSUFBTCxDQUFVLGNBQVYsRUFBMEIxQyxLQUFLLENBQUNZLElBQWhDO0FBRUEsVUFBSSxLQUFLeUIsWUFBTCxLQUFzQixLQUFLMUIsWUFBL0IsRUFBNkMsS0FBSytCLElBQUwsQ0FBVSxlQUFWO0FBRTdDOzs7d0JBM1RzQjtBQUV0QixhQUFPLEtBQUtILFNBQVo7QUFFQTs7OztFQXhGa0NJLGMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IEFzc2V0IGZyb20gJy4vaW50ZXJmYWNlcy9Bc3NldCc7XG5cbmltcG9ydCBGZXRjaCBmcm9tICcuL2ZldGNoL0ZldGNoJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlL0NhY2hlJztcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IEV2ZW50dmVyc2UgZnJvbSAnZXZlbnR2ZXJzZS9saWIvaW5kZXgnO1xuXG4vKipcbiAqIExvYWRzIHRoZSBzcGVjaWZpZWQgYXNzZXRzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGNhY2hlLlxuICogXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxuICogXG4gKiBAdmVyc2lvbiAzLjEuMFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNrT3ggZXh0ZW5kcyBFdmVudHZlcnNlIHtcblxuXHQvKipcblx0ICogQSByZWZlcmVuY2UgdG8gdGhlIGNhY2hlIHVzZWQgdG8gc3RvcmUgYXNzZXRzLlxuXHQgKiBcblx0ICogQHNpbmNlIDIuMC4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge0NhY2hlfVxuXHQgKi9cblx0Y2FjaGU6IENhY2hlID0gbmV3IENhY2hlKCk7XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIGZldGNoIG1vZHVsZSB0byByZXRyaWV2ZSBhc3NldHMgZnJvbSB0aGUgY2FjaGUuXG5cdCAqIFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHRmZXRjaDogRmV0Y2ggPSBuZXcgRmV0Y2godGhpcy5jYWNoZSk7XG5cblx0LyoqXG5cdCAqIFRoZSBjcm9zc09yaWdpbiBvcHRpb24gcGFzc2VkIHRvIE11c2tPeCBvbiBpbml0aWFsaXphdGlvbi5cblx0ICogXG5cdCAqIEBzaW5jZSAzLjAuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9XG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0Y3Jvc3NPcmlnaW46IHN0cmluZztcblxuXHQvKipcblx0ICogU3RvcmVzIGFzc2V0cyB0aGF0IHN0aWxsIGhhdmUgeWV0IHRvIGJlIGxvYWRlZC5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtBcnJheTxBc3NldD59XG5cdCAqL1xuXHRxdWV1ZTogQXJyYXk8QXNzZXQ+ID0gW107XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBhc3NldHMgdGhhdCBoYXZlIGJlZW4gbG9hZGVkLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cblx0ICovXG5cdGFzc2V0c0xvYWRlZDogbnVtYmVyID0gMDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGFzc2V0cyB0aGF0IGhhdmUgeWV0IHRvIGJlIGxvYWRlZC5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XG5cdCAqL1xuXHRhc3NldHNUb0xvYWQ6IG51bWJlciA9IDA7XG5cblx0LyoqXG5cdCAqIEEgcGVyY2VudCB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcy5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFxuXHQgKi9cblx0X3Byb2dyZXNzOiBudW1iZXIgPSAwO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0NhY2hlfSBjYWNoZSBBIHJlZmVyZW5jZSB0byB0aGUgTXVza094IGNhY2hlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NPcmlnaW4gVGhlIGNyb3NzT3JpZ2luIG9wdGlvbiBwYXNzZWQgdG8gTXVza094IG9uIGluaXRpYWxpemF0aW9uLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoY3Jvc3NPcmlnaW46IHN0cmluZykge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcy5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuXG5cdH1cblxuXHQvKipcblx0ICogVGFrZXMgdGhlIGFzc2V0cyBmcm9tIHRoZSBsb2FkIHF1ZXVlIGFuZCBvbmUgYnkgb25lIGl0IHVzZXMgdGhlIGFwcHJvcHJpYXRlIFxuXHQgKiBtZXRob2QgdG8gbG9hZCBpdCBhbmQgdGhlbiBhZGQgaXQgdG8gdGhlIGNhY2hlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqL1xuXHRzdGFydCgpIHtcblxuXHRcdGZvciAoY29uc3QgYXNzZXQgb2YgdGhpcy5xdWV1ZSkge1xuXG5cdFx0XHRzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcblxuXHRcdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRcdFx0dGhpcy5sb2FkRGVmYXVsdChhc3NldCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYXVkaW8nOlxuXHRcdFx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRcdFx0dGhpcy5sb2FkQ2FuUGxheVRocm91Z2goYXNzZXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRjYXNlICdiaW5hcnknOlxuXHRcdFx0XHRjYXNlICdqc29uJzpcblx0XHRcdFx0XHR0aGlzLmxvYWRYSFIoYXNzZXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGltYWdlIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyBpbWFnZSBhc3NldCBieS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgYXNzZXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGFuIGltYWdlIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxuXHQgKi9cblx0aW1hZ2Uoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgnaW1hZ2UnLCBrZXksIHNyYywgcmVwbGFjZSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGF1ZGlvIGFzc2V0IHRvIHRoZSBsb2FkIHF1ZXVlLlxuXHQgKiBcblx0ICogTXVsaXBsZSBgc3JjYCBwYXRocyBjYW4gYmUgcHJvdmlkZWQgaW4gY2FzZSBvbmUgb3IgbW9yZSBhcmUgbm90IHN1cHBvcnRlZFxuXHQgKiBieSB0aGUgdXNlcidzIGJyb3dzZXIuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGF1ZGlvIGFzc2V0IGJ5LlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBzcmMgQSBwYXRoIHRvIHRoZSBhdWRpbyBhc3NldCBvciBhbiBhcnJheSBvZiBwYXRocyB0byBhbiBhdWRpbyBhc3NldCBhbmQgaXRzIGZhbGxiYWNrcy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXVkaW8gYXNzZXQgd2l0aCB0aGUgc2FtZSBrZXkgc2hvdWxkIGJlIHJlcGxhY2VkIGluIHRoZSBjYWNoZSBvciBub3QuXG5cdCAqL1xuXHRhdWRpbyhrZXk6IHN0cmluZywgc3JjczogQXJyYXk8c3RyaW5nPiwgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0XHR0aGlzLmFkZFRvUXVldWUoJ2F1ZGlvJywga2V5LCBzcmNzLCByZXBsYWNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSB2aWRlbyBhc3NldCB0byB0aGUgbG9hZCBxdWV1ZS5cblx0ICogXG5cdCAqIE11bGlwbGUgYHNyY2AgcGF0aHMgY2FuIGJlIHByb3ZpZGVkIGluIGNhc2Ugb25lIG9yIG1vcmUgYXJlIG5vdCBzdXBwb3J0ZWRcblx0ICogYnkgdGhlIHVzZXIncyBicm93c2VyLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgdW5pcXVlIGtleSB0byByZWZlcmVuY2UgdGhpcyB2aWRlbyBhc3NldCBieS5cblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc3JjIEEgcGF0aCB0byB0aGUgdmlkZW8gYXNzZXQgb3IgYW4gYXJyYXkgb2YgcGF0aHMgdG8gYSB2aWRlbyBhc3NldCBhbmQgaXRzIGZhbGxiYWNrcy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSB2aWRlbyBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cblx0ICovXG5cdHZpZGVvKGtleTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+LCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgndmlkZW8nLCBrZXksIHNyY3MsIHJlcGxhY2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogQWRkcyB0aGUgY29udGVudHMgb2YgYSB0ZXh0IGZpbGUgdG8gdGhlIGxvYWQgcXVldWUuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIHRleHQgYXNzZXQgYnkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIHBhdGggdG8gdGhlIHRleHQgYXNzZXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIGEgdGV4dCBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cblx0ICovXG5cdHRleHQoa2V5OiBzdHJpbmcsIHNyYzogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRcdHRoaXMuYWRkVG9RdWV1ZSgndGV4dCcsIGtleSwgc3JjLCByZXBsYWNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgdGhlIGJpbmFyeSBjb250ZW50cyBvZiBhIGZpbGUgdG8gdGhlIGxvYWQgcXVldWUuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSB1bmlxdWUga2V5IHRvIHJlZmVyZW5jZSB0aGlzIGJpbmFyeSBhc3NldCBieS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgYmluYXJ5IGFzc2V0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBhIGJpbmFyeSBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cblx0ICovXG5cdGJpbmFyeShrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCdiaW5hcnknLCBrZXksIHNyYywgcmVwbGFjZSk7XG5cblx0fVxuXG5cdC8qKlxuICAgKiBBZGQgdGhlIGNvbnRlbnRzIG9mIGEgSlNPTiBmaWxlIGFzIGEgcGFyc2VkIG9iamVjdCB0byB0aGUgbG9hZCBxdWV1ZS5cbiAgICogXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHVuaXF1ZSBrZXkgdG8gcmVmZXJlbmNlIHRoaXMgSlNPTiBhc3NldCBieS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBUaGUgcGF0aCB0byB0aGUgSlNPTiBhc3NldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgYSBKU09OIGFzc2V0IHdpdGggdGhlIHNhbWUga2V5IHNob3VsZCBiZSByZXBsYWNlZCBpbiB0aGUgY2FjaGUgb3Igbm90LlxuXHQgKi9cblx0anNvbihrZXk6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKCdqc29uJywga2V5LCBzcmMsIHJlcGxhY2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVGFrZXMgdGhlIHN1cHBsaWVkIGFzc2V0LCBjcmVhdGVzIGFuIGFzc2V0IGluc3RhbmNlIG91dCBvZiBpdCwgYW5kXG5cdCAqIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWUuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogQHByaXZhdGVcblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IHRoaXMgYXNzZXQgaXMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGFzc2V0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBzcmMgVGhlIHBhdGgvcyB0byB0aGUgYXNzZXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJbmRpY2F0ZXMgd2hldGhlciBhbiBhc3NldCB3aXRoIHRoZSBzYW1lIGtleSBzaG91bGQgYmUgcmVwbGFjZWQgaW4gdGhlIGNhY2hlIG9yIG5vdC5cblx0ICovXG5cdHByaXZhdGUgYWRkVG9RdWV1ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzcmM6IChzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSwgcmVwbGFjZTogYm9vbGVhbikge1xuXG5cdFx0Y29uc3QgYXNzZXQ6IEFzc2V0ID0geyB0eXBlOiB0eXBlLCBrZXk6IGtleSwgc3JjOiBzcmMgfTtcblxuXHRcdHRoaXMucXVldWUucHVzaChhc3NldCk7XG5cblx0XHR0aGlzLmFzc2V0c1RvTG9hZCsrO1xuXG5cdH1cblxuXHQvKipcblx0ICogTG9hZCBhc3NldHMgdGhhdCBjYW4gYmUgbG9hZGVkIHRocm91Z2ggdGhlIHNpbXBsZSB1c2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXJcblx0ICogdGhhdCBsaXN0ZW5zIHRvIHRoZSBhc3NldCdzIGxvYWQgZXZlbnQuXG5cdCAqIFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQHByaXZhdGVcblx0ICogXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxuXHQgKi9cblx0cHJpdmF0ZSBsb2FkRGVmYXVsdChhc3NldDogQXNzZXQpIHtcblxuXHRcdGFzc2V0LmRhdGEgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblxuXHRcdFx0dGhpcy5jYWNoZUFzc2V0KGFzc2V0KTtcblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG5cblx0XHRcdC8vIHRoaXMuaGFuZGxlQXNzZXRFcnJvcihhc3NldCk7XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRhc3NldC5kYXRhLnNyYyA9IGFzc2V0LnNyYy50b1N0cmluZygpO1xuXG5cdFx0aWYgKHRoaXMuY3Jvc3NPcmlnaW4pXHRhc3NldC5kYXRhLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcblxuXHR9XG5cblx0LyoqXG5cdCAqIExvYWQgYXNzZXRzIHRoYXQgY2FuIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIGBjYW5QbGF5VGhyb3VnaGAgZXZlbnRcblx0ICogbGlzdGVuZXIuXG5cdCAqIFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQHByaXZhdGVcblx0ICogXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxuXHQgKi9cblx0cHJpdmF0ZSBsb2FkQ2FuUGxheVRocm91Z2goYXNzZXQ6IEFzc2V0KSB7XG5cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXNzZXQuc3JjKSkgYXNzZXQuc3JjID0gW2Fzc2V0LnNyY107XG5cblx0XHRpZiAoYXNzZXQudHlwZSA9PT0gJ2F1ZGlvJykgYXNzZXQuZGF0YSA9IG5ldyBBdWRpbygpO1xuXG5cdFx0ZWxzZSBhc3NldC5kYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cblx0XHRcdHRoaXMuY2FjaGVBc3NldChhc3NldCk7XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRhc3NldC5kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuXG5cdFx0XHQvLyB0aGlzLmhhbmRsZUFzc2V0RXJyb3IoYXNzZXQpO1xuXG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0YXNzZXQuZGF0YS5zcmMgPSBtZWRpYS5nZXRQbGF5YWJsZU1lZGlhKGFzc2V0LnR5cGUsIGFzc2V0LnNyYyk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBMb2FkIGFzc2V0cyB0aGF0IGNhbiBiZSBsb2FkZWQgdGhyb3VnaCBYSFIuXG5cdCAqIFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQHByaXZhdGVcblx0ICogXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBhc3NldCB0byBsb2FkLlxuXHQgKi9cblx0cHJpdmF0ZSBsb2FkWEhSKGFzc2V0OiBBc3NldCkge1xuXG5cdFx0YXNzZXQuZGF0YSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0YXNzZXQuZGF0YS5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuXG5cdFx0XHRpZiAoYXNzZXQuZGF0YS5yZWFkeVN0YXRlID09IDQgJiYgYXNzZXQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cblx0XHRcdFx0c3dpdGNoIChhc3NldC50eXBlKSB7XG5cblx0XHRcdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0XHRcdGFzc2V0LmRhdGEgPSBhc3NldC5kYXRhLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnYmluYXJ5Jzpcblx0XHRcdFx0XHRcdGNvbnN0IGFycmF5QnVmZmVyID0gYXNzZXQuZGF0YS5yZXNwb25zZTtcblx0XHRcdFx0XHRcdGlmIChhcnJheUJ1ZmZlcikgYXNzZXQuZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnanNvbic6XG5cdFx0XHRcdFx0XHRhc3NldC5kYXRhID0gSlNPTi5wYXJzZShhc3NldC5kYXRhLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2FjaGVBc3NldChhc3NldCk7XG5cblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGFzc2V0LmRhdGEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG5cblx0XHRcdC8vIHRoaXMuaGFuZGxlQXNzZXRFcnJvcihhc3NldCk7XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRpZiAoYXNzZXQudHlwZSA9PSAnYmluYXJ5JykgYXNzZXQuZGF0YS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG5cdFx0YXNzZXQuZGF0YS5vcGVuKCdHRVQnLCBhc3NldC5zcmMpO1xuXG5cdFx0YXNzZXQuZGF0YS5zZW5kKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUYWtlcyB0aGUgbG9hZGVkIGFzc2V0IGFuZCBhZGRzIGl0IHRvIHRoZSBjYWNoZSB3aGlsZSB1cGRhdGluZyBwcm9wZXJ0aWVzIG9mIHRoaXNcblx0ICogbW9kdWxlIGluY2x1ZGluZyB0aGUgbG9hZCBwcm9ncmVzcy5cblx0ICogXG5cdCAqIEBzaW5jZSAyLjAuMFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBcblx0ICogQHBhcmFtIHtBc3NldH0gYXNzZXQgVGhlIGxvYWRlZCBhc3NldC5cblx0ICovXG5cdHByaXZhdGUgY2FjaGVBc3NldChhc3NldDogQXNzZXQpIHtcblxuXHRcdHRoaXMuY2FjaGUuc2V0KGFzc2V0LnR5cGUsIGFzc2V0LmtleSwgYXNzZXQuZGF0YSk7XG5cblx0XHR0aGlzLmFzc2V0c0xvYWRlZCsrO1xuXG5cdFx0dGhpcy51cGRhdGVMb2FkU3RhdHVzKGFzc2V0KTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGUgcXVldWUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcgYW5kIGFsbCBvZiB0aGUgYXNzZXRzIGhhdmVcblx0ICogYmVlbiBsb2FkZWQuXG5cdCAqIFxuXHQgKiBUaGlzIGFsc28gdXBkYXRlcyB0aGUgcHJvZ3Jlc3MgcHJvcGVydHkgdG8gcmVmbGVjdCB0aGUgbW9zdCB1cGRhdGUgdG8gZGF0ZVxuXHQgKiBwcm9ncmVzcy5cblx0ICogXG5cdCAqIEZpbmFsbHksIGlmIGFsbCBvZiB0aGUgaXRlbXMgYXJlIGxvYWRlZCwgdGhlIGxvYWQgY29tcGxldGUgZXZlbnQgaXMgZW1pdHRlZFxuXHQgKiBzaWduYWxpbmcgdGhhdCBpdCBpcyBzYWZlIHRvIHVzZSBhbGwgb2YgdGhlIGxvYWRlZCBhc3NldHMuXG5cdCAqIFxuXHQgKiBAc2luY2UgMi4wLjBcblx0ICogQHByaXZhdGVcblx0ICogXG5cdCAqIEBwYXJhbSB7QXNzZXR9IGFzc2V0IFRoZSBtb3N0IHJlY2VudGx5IGxvYWRlZCBhc3NldC5cblx0ICovXG5cdHByaXZhdGUgdXBkYXRlTG9hZFN0YXR1cyhhc3NldDogQXNzZXQpIHtcblxuXHRcdHRoaXMuX3Byb2dyZXNzID0gcGFyc2VJbnQoKCh0aGlzLmFzc2V0c0xvYWRlZCAvIHRoaXMuYXNzZXRzVG9Mb2FkKSAqIDEwMCkudG9GaXhlZCgwKSk7XG5cblx0XHR0aGlzLmVtaXQoJ2Fzc2V0LWxvYWRlZCcsIGFzc2V0LmRhdGEpO1xuXG5cdFx0aWYgKHRoaXMuYXNzZXRzTG9hZGVkID09PSB0aGlzLmFzc2V0c1RvTG9hZCkgdGhpcy5lbWl0KCdsb2FkLWNvbXBsZXRlJyk7XG5cblx0fVxuXG59XG4iXX0=