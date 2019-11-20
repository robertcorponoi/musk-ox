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

    _defineProperty(this, "cache", void 0);

    this.cache = cache;
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
      return this.cache.get('image', key);
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
      return this.cache.get('audio', key);
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
      return this.cache.get('video', key);
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
      return this.cache.get('text', key);
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
      return this.cache.get('binary', key);
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
      return this.cache.get('json', key);
    }
  }]);

  return Fetch;
}();

var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "assets", {
      image: {},
      audio: {},
      video: {},
      text: {},
      binary: {},
      json: {}
    });
  }

  _createClass(Cache, [{
    key: "get",

    /**
     * Returns an asset from the cache.
     * 
     * @param {string} type The type of asset to retrieve
     * @param {string} key The name of the asset to retrieve.
     * 
     * @returns {HTMLElement|undefined} Returns the asset or undefined if it doesn't exist.
     */
    value: function get(type, key) {
      if (this._exists(type, key)) return this.assets[type][key];
    }
    /**
     * Adds an asset to the cache.
     * 
     * @since 0.1.0
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
      if (this._exists(type, key) && !replace) return false;
      this.assets[type][key] = asset;
      return true;
    }
    /**
     * Checks to see if an asset exists in the cache.
     * 
     * This is used internally by this module to save time checking for assets that don't exist.
     * 
     * @private
    * 
    * @param {string} type The type of asset to check if exists.
    * @param {string} key The key of the asset.
    * 
    * @returns {boolean} Returns true if the asset exists or false otherwise.
    */

  }, {
    key: "_exists",
    value: function _exists(type, key) {
      if (this.assets[type][key]) return true;
      return false;
    }
  }]);

  return Cache;
}();

/**
 * Common audio and video codecs to use when loading audo and video assets.
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
 * Goes through src strings for audio and video files and compares codecs to find the src that the browser is
 * most likely capable of playing.
 * 
 * @param {string} type The type of asset being loaded, either audio or video.
 * @param {Array<string>} srcs The srcs provided for the asset.
 * 
 * @returns {string} Returns the src of the asset that the browser is most likely capable of playing.
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

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass$1;

function _defineProperty$1(obj, key, value) {
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

var defineProperty = _defineProperty$1;

var Task =
/*#__PURE__*/
function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
    * @private
    * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
    * 
    * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
    * 
    * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    classCallCheck(this, Task);

    defineProperty(this, "fn", void 0);

    defineProperty(this, "_once", void 0);

    defineProperty(this, "_delete", false);

    defineProperty(this, "_timesCalled", 0);

    defineProperty(this, "paused", false);

    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  createClass(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);

  return Task;
}();

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 */

var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    classCallCheck(this, Hypergiant);

    defineProperty(this, "_tasks", new Set());
  }

  createClass(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._tasks.add(new Task(fn, once));

      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
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
     * Removes a task from this signal by name.
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

            break;
          }
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
     * Removes all tasks from this signal.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this._tasks.clear();

      return this;
    }
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this;
    }
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Set<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.size;
    }
  }]);

  return Hypergiant;
}();

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

    _defineProperty(this, "_cache", new Cache());

    _defineProperty(this, "_fetch", new Fetch(this.cache));

    _defineProperty(this, "_queue", []);

    _defineProperty(this, "_assetsLoaded", 0);

    _defineProperty(this, "_assetsToLoad", 0);

    _defineProperty(this, "_crossOrigin", void 0);

    _defineProperty(this, "_progress", 0);

    _defineProperty(this, "_onProgress", new Hypergiant());

    _defineProperty(this, "_onLoad", new Hypergiant());

    _defineProperty(this, "_onError", new Hypergiant());

    _defineProperty(this, "_onComplete", new Hypergiant());

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
      asset.data.src = getPlayableMedia(asset.type, asset.src);
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

export default MuskOx;
