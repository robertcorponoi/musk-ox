function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

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

var Cache =
/*#__PURE__*/
function () {
  /**
   * All loaded assets are stored here.
   * 
   * @since 0.1.0
   * 
   * @property {Object}
   */
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "assets", new Object(null));

    this.boot();
  }
  /**
   * Initialize the properties of the assets Object so that assets can
   * be saved in their proper places.
   * 
   * @since 0.1.0
   */


  _createClass(Cache, [{
    key: "boot",
    value: function boot() {
      this.assets.image = new Object(null);
      this.assets.audio = new Object(null);
      this.assets.video = new Object(null);
      this.assets.text = new Object(null);
      this.assets.binary = new Object(null);
      this.assets.json = new Object(null);
    }
    /**
     * Returns an asset from the cache.
     * 
     * @since 0.1.0
     * 
     * @param {string} type The type of asset to retrieve
     * @param {string} key The name of the asset to retrieve.
     * 
     * @returns {HTMLElement|undefined} Returns the asset or undefined if it doesn't exist.
     */

  }, {
    key: "get",
    value: function get(type, key) {
      if (this.exists(type, key)) return this.assets[type][key];
    }
    /**
     * Adds an asset to the cache.
     * 
     * @since 0.1.0
     * @private
     * 
     * @param {string} type The type of asset to add.
     * @param {string} key The key of the asset.
     * @param {HTMLElement} asset The actual asset to add.
     * @param {boolean} [replace=false] Indicates whether an asset with an existing key should be replaced with the current asset or not.
     * 
     * @returns {boolean} Returns true if the asset was successfully added to the cache or false if the asset already exists and `replace` is set to false.
     */

  }, {
    key: "set",
    value: function set(type, key, asset) {
      var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this.exists(type, key) && !replace) return false;
      this.assets[type][key] = asset;
      return true;
    }
    /**
     * Check to see if an asset exists in the cache.
     * 
     * This is used internally by the cache to save checking for assets
     * that don't exist.
     * 
     * @param {string} type The type of asset to check if exists.
     * @param {string} key The key of the asset.
     * 
     * @returns {boolean} Returns true if the asset exists or false otherwise.
     */

  }, {
    key: "exists",
    value: function exists(type, key) {
      if (this.assets[type][key]) return true;
      return false;
    }
  }]);

  return Cache;
}();

/**
 * Describes the structure of the audio and video codecs
 * objects.
 */

var codecs = {
  audio: {
    'mp3': 'audio/mpeg',
    'm4a': 'audio/mp4',
    'ogg': 'audio/ogg;codecs="vorbis"',
    'mp4': 'audio/mp4;codecs="mp4a.40.5"',
    'webm': 'audio/webm;codecs="vorbis"',
    'wav': 'audio/wav;codecs="1"'
  },
  video: {
    'ogg': 'video/ogg;codecs="theora, vorbis"',
    'mp4': 'video/mp4;codecs="avc1.4D401E, mp4a.40.2"',
    'webm': 'video/webm;codecs="vp8.0, vorbis"'
  }
};

/**
 * Provides helper functions to help deal with audio and video files since
 * they differ from other assets in terms of codecs and fallbacks.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 3.0.0
 */

/**
 * Go through all of the provided srcs for the audio or video files and return
 * the first one that the browser is most likely capable of playing.
 * 
 * @since 2.0.0
 * 
 * @param {string} type The type of asset being loaded, either audio or video.
 * @param {Array<string>} srcs The srcs provided for the asset.
 * 
 * @returns {string} The src of the asset that the browser is most likely capable of playing.
 */

function getPlayableMedia(type, srcs) {
  var asset;
  var isAudio = type === 'audio';
  if (isAudio) asset = new Audio();else asset = document.createElement('video');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = srcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var src = _step.value;
      var ext = src.slice(src.lastIndexOf('.') + 1);
      var codec = codecs[type][ext];

      if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') {
        return src;
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

  return '';
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var utils = createCommonjsModule(function (module, exports) {
/**
 * Compare two functions by turning them into strings and
 * removing whitespace/line-breaks and then checking equality.
 * 
 * @since 0.1.0
 * 
 * @param {Function} fn1 The first function.
 * @param {Function} fn2 The second function.
 * 
 * @returns {boolean} Returns true if the functions are equal and false otherwise.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareFunctions = compareFunctions;

function compareFunctions(fn1, fn2) {
  var f1 = fn1.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');
  var f2 = fn2.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');
  if (f1 === f2) return true;
  return false;
}

});

unwrapExports(utils);
var utils_1 = utils.compareFunctions;

var Listener_1 = createCommonjsModule(function (module, exports) {
/**
 * A listener represents a single event listener.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Listener =
/**
 * The function that will be called when the listener is processed.
 * 
 * @property {Function}
 */

/**
 * The context to use when calling this listener.
 * 
 * @property {*}
 */

/**
 * Whether or not this listener will be automatically destroyed after being run once.
 * 
 * @property {boolean}
 */

/**
 * Keeps track of the number of times that this listener has been called.
 * 
 * @property {number} 
 */
function Listener(fn, ctx, once) {
  _classCallCheck(this, Listener);

  _defineProperty(this, "fn", void 0);

  _defineProperty(this, "ctx", void 0);

  _defineProperty(this, "once", void 0);

  _defineProperty(this, "timesCalled", 0);

  this.fn = fn;
  this.ctx = ctx;
  this.once = once;
};

exports["default"] = Listener;

});

unwrapExports(Listener_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var utils$1 = _interopRequireWildcard(utils);

var _Listener = _interopRequireDefault(Listener_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Eventverse is a higly performant and easy to use event emitter for Nodejs and the browser.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 */
var Eventverse =
/*#__PURE__*/
function () {
  /**
   * The maximum amount of listeners each event can have at one time.
   * 
   * @property {number}
   * 
   * @default 10
   */

  /**
   * A collection of all of the listeners created for this instance of Eventverse.
   * 
   * @property {Object}
   */

  /**
   * @param {number} [maxListenerCount=10] The maximum amount of listeners each event can have at one time. 
   */
  function Eventverse() {
    var maxListenerCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, Eventverse);

    _defineProperty(this, "maxListenerCount", void 0);

    _defineProperty(this, "events", Object.create(null));

    this.maxListenerCount = maxListenerCount;
  }
  /**
   * Returns the number of listeners for a given event.
   * 
   * @param {string} event The name of the event.
   * 
   * @returns {number}
   */


  _createClass(Eventverse, [{
    key: "listenerCount",
    value: function listenerCount(event) {
      return this.events[event].length;
    }
    /**
     * Returns the number of times a listener was called.
     * 
     * @param {string} event The name of the event to get the times called for.
     * 
     * @returns {number} Returns the number of times the event was called.
     */

  }, {
    key: "timesCalled",
    value: function timesCalled(event) {
      return this.events[event][0].timesCalled;
    }
    /**
     * Runs all of the listeners attached to this Eventverse with the event name and with the supplied arguments.
     * 
     * @param {string} event The name of the event to emit.
     * @param {...*} args The arguments to pass to the listeners.
     */

  }, {
    key: "emit",
    value: function emit(event) {
      if (!this.exists(event)) return;
      var listeners = this.events[event];

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _listener$fn;

          var listener = _step.value;

          (_listener$fn = listener.fn).call.apply(_listener$fn, [listener.ctx].concat(args));

          listener.timesCalled++;
          if (listener.once) this.removeListener(event, listener.fn);
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
     * Adds a listener function for the given event.
     * 
     * 
     * @param {string} event The name of the event to add a listener for.
     * @param {Function} fn The function to run when the event is emitted.
     * @param {Object} context The context to use when calling the listener.
     * @param {boolean} once Indicates whether this listener should only be called once.
     * 
     * @returns {Eventverse}
     */

  }, {
    key: "addListener",
    value: function addListener(event, fn) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var listener = new _Listener["default"](fn, context, once);

      if (!this.exists(event)) {
        this.events[event] = [];
      } else if (this.events[event].length === this.maxListenerCount) {
        console.warn("[Eventverse][addListener]: The event ".concat(event, " already has the max amount of listeners."));
        return;
      }

      this.events[event].push(listener);
      return this;
    }
    /**
     * Removes a listener function for the given event.
     * 
     * @param {string} event The name of the event to remove the listener on.
     * @param {Function} listener The listener to remove from the event.
     * 
     * @returns {Eventverse}
     */

  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      var _this = this;

      if (!this.exists(event)) {
        console.warn('[Eventverse][removeListener]: Unable to remove listener for an event that doesnt exist.');
        return;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var eventListener = _step2.value;

          if (utils$1.compareFunctions(eventListener.fn, listener)) {
            _this.events[event] = _this.events[event].filter(function (evListener) {
              return evListener != eventListener;
            });
            return "break";
          }
        };

        for (var _iterator2 = this.events[event][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
    /**
     * Removes all listeners from a given event.
     * 
     * @param {string} event The name of the event to remove all listeners from.
     * 
     * @returns {Eventverse}
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(event) {
      if (!this.exists(event)) {
        console.warn('[Eventverse][removeAllListeners]: Unable to remove listener for an event that doesnt exist.');
        return;
      }

      this.events[event] = [];
      return this;
    }
    /**
     * Add a listener function that will only run once.
     * 
     * @param {string} event The name of the event to add a listener for.
     * @param {Function} fn The function to run when the event is emitted.
     * @param {Object} [context=this] The context to use when calling the listener.
     * 
     * @returns {Eventverse}
     */

  }, {
    key: "once",
    value: function once(event, fn) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      this.addListener(event, fn, context, true);
      return this;
    }
    /**
     * Adds a listener function for the given event.
     * 
     * @param {string} event The name of the event to add a listener for.
     * @param {Function} fn The function to run when the event is emitted.
     * @param {Object} [context=this] The context to use when calling the listener.
     * 
     * @returns {Eventverse}
     */

  }, {
    key: "on",
    value: function on(event, fn) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      this.addListener(event, fn, context);
      return this;
    }
    /**
     * Checks if an event exists.
      * 
     * @private
     * 
     * @param {string} event The name of the event.
     * 
     * @returns {boolean} Returns true if the event exists or false otherwise.
     */

  }, {
    key: "exists",
    value: function exists(event) {
      if (this.events[event]) return true;
      return false;
    }
  }]);

  return Eventverse;
}();

exports["default"] = Eventverse;

});

var Eventverse = unwrapExports(lib);

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

    _defineProperty(_assertThisInitialized(_this), "cache", new Cache());

    _defineProperty(_assertThisInitialized(_this), "fetch", new Fetch(_this.cache));

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
      asset.data.src = getPlayableMedia(asset.type, asset.src);
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
}(Eventverse);

export default MuskOx;
