'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayableMedia = getPlayableMedia;

var _codecs = _interopRequireDefault(require("./codecs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var codec = _codecs["default"][type][ext];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS50cyJdLCJuYW1lcyI6WyJnZXRQbGF5YWJsZU1lZGlhIiwidHlwZSIsInNyY3MiLCJhc3NldCIsImlzQXVkaW8iLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImV4dCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJjb2RlYyIsImNvZGVjcyIsImNhblBsYXlUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUF3Q0MsSUFBeEMsRUFBcUU7QUFFMUUsTUFBSUMsS0FBSjtBQUVBLE1BQU1DLE9BQWdCLEdBQUdILElBQUksS0FBSyxPQUFsQztBQUVBLE1BQUlHLE9BQUosRUFBYUQsS0FBSyxHQUFHLElBQUlFLEtBQUosRUFBUixDQUFiLEtBRUtGLEtBQUssR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFScUU7QUFBQTtBQUFBOztBQUFBO0FBVTFFLHlCQUFrQkwsSUFBbEIsOEhBQXdCO0FBQUEsVUFBYk0sR0FBYTtBQUV0QixVQUFNQyxHQUFXLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRixHQUFHLENBQUNHLFdBQUosQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBakMsQ0FBcEI7QUFFQSxVQUFNQyxLQUFhLEdBQUdDLG1CQUFPWixJQUFQLEVBQWFRLEdBQWIsQ0FBdEI7O0FBRUEsVUFBSU4sS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixVQUE1QixJQUEwQ1QsS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixPQUExRSxFQUFtRjtBQUVqRixlQUFPSixHQUFQO0FBRUQ7QUFFRjtBQXRCeUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QjFFLFNBQU8sRUFBUDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgY29kZWNzIGZyb20gJy4vY29kZWNzJztcclxuXHJcbi8qKlxyXG4gKiBHb2VzIHRocm91Z2ggc3JjIHN0cmluZ3MgZm9yIGF1ZGlvIGFuZCB2aWRlbyBmaWxlcyBhbmQgY29tcGFyZXMgY29kZWNzIHRvIGZpbmQgdGhlIHNyYyB0aGF0IHRoZSBicm93c2VyIGlzXHJcbiAqIG1vc3QgbGlrZWx5IGNhcGFibGUgb2YgcGxheWluZy5cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IGJlaW5nIGxvYWRlZCwgZWl0aGVyIGF1ZGlvIG9yIHZpZGVvLlxyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNyY3MgVGhlIHNyY3MgcHJvdmlkZWQgZm9yIHRoZSBhc3NldC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNyYyBvZiB0aGUgYXNzZXQgdGhhdCB0aGUgYnJvd3NlciBpcyBtb3N0IGxpa2VseSBjYXBhYmxlIG9mIHBsYXlpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWFibGVNZWRpYSh0eXBlOiBzdHJpbmcsIHNyY3M6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xyXG5cclxuICBsZXQgYXNzZXQ6IChIVE1MQXVkaW9FbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IGlzQXVkaW86IGJvb2xlYW4gPSB0eXBlID09PSAnYXVkaW8nO1xyXG5cclxuICBpZiAoaXNBdWRpbykgYXNzZXQgPSBuZXcgQXVkaW8oKTtcclxuXHJcbiAgZWxzZSBhc3NldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gIGZvciAoY29uc3Qgc3JjIG9mIHNyY3MpIHtcclxuXHJcbiAgICBjb25zdCBleHQ6IHN0cmluZyA9IHNyYy5zbGljZShzcmMubGFzdEluZGV4T2YoJy4nKSArIDEpO1xyXG5cclxuICAgIGNvbnN0IGNvZGVjOiBzdHJpbmcgPSBjb2RlY3NbdHlwZV1bZXh0XTtcclxuXHJcbiAgICBpZiAoYXNzZXQuY2FuUGxheVR5cGUoY29kZWMpID09ICdwcm9iYWJseScgfHwgYXNzZXQuY2FuUGxheVR5cGUoY29kZWMpID09ICdtYXliZScpIHtcclxuXHJcbiAgICAgIHJldHVybiBzcmM7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAnJztcclxuXHJcbn0iXX0=