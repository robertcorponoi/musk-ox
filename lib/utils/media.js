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
      if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') return src;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS50cyJdLCJuYW1lcyI6WyJnZXRQbGF5YWJsZU1lZGlhIiwidHlwZSIsInNyY3MiLCJhc3NldCIsImlzQXVkaW8iLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImV4dCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJjb2RlYyIsImNvZGVjcyIsImNhblBsYXlUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUF3Q0MsSUFBeEMsRUFBcUU7QUFDMUUsTUFBSUMsS0FBSjtBQUVBLE1BQU1DLE9BQWdCLEdBQUdILElBQUksS0FBSyxPQUFsQztBQUVBLE1BQUlHLE9BQUosRUFBYUQsS0FBSyxHQUFHLElBQUlFLEtBQUosRUFBUixDQUFiLEtBRUtGLEtBQUssR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFQcUU7QUFBQTtBQUFBOztBQUFBO0FBUzFFLHlCQUFrQkwsSUFBbEIsOEhBQXdCO0FBQUEsVUFBYk0sR0FBYTtBQUN0QixVQUFNQyxHQUFXLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRixHQUFHLENBQUNHLFdBQUosQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBakMsQ0FBcEI7QUFFQSxVQUFNQyxLQUFhLEdBQUdDLG1CQUFPWixJQUFQLEVBQWFRLEdBQWIsQ0FBdEI7QUFFQSxVQUFJTixLQUFLLENBQUNXLFdBQU4sQ0FBa0JGLEtBQWxCLEtBQTRCLFVBQTVCLElBQTBDVCxLQUFLLENBQUNXLFdBQU4sQ0FBa0JGLEtBQWxCLEtBQTRCLE9BQTFFLEVBQW1GLE9BQU9KLEdBQVA7QUFFcEY7QUFoQnlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0IxRSxTQUFPLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IGNvZGVjcyBmcm9tICcuL2NvZGVjcyc7XHJcblxyXG4vKipcclxuICogR29lcyB0aHJvdWdoIHNyYyBzdHJpbmdzIGZvciBhdWRpbyBhbmQgdmlkZW8gZmlsZXMgYW5kIGNvbXBhcmVzIGNvZGVjcyB0byBmaW5kIHRoZSBzcmMgdGhhdCB0aGUgYnJvd3NlciBpc1xyXG4gKiBtb3N0IGxpa2VseSBjYXBhYmxlIG9mIHBsYXlpbmcuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCBiZWluZyBsb2FkZWQsIGVpdGhlciBhdWRpbyBvciB2aWRlby5cclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzcmNzIFRoZSBzcmNzIHByb3ZpZGVkIGZvciB0aGUgYXNzZXQuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzcmMgb2YgdGhlIGFzc2V0IHRoYXQgdGhlIGJyb3dzZXIgaXMgbW9zdCBsaWtlbHkgY2FwYWJsZSBvZiBwbGF5aW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXlhYmxlTWVkaWEodHlwZTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcclxuICBsZXQgYXNzZXQ6IChIVE1MQXVkaW9FbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IGlzQXVkaW86IGJvb2xlYW4gPSB0eXBlID09PSAnYXVkaW8nO1xyXG5cclxuICBpZiAoaXNBdWRpbykgYXNzZXQgPSBuZXcgQXVkaW8oKTtcclxuXHJcbiAgZWxzZSBhc3NldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gIGZvciAoY29uc3Qgc3JjIG9mIHNyY3MpIHtcclxuICAgIGNvbnN0IGV4dDogc3RyaW5nID0gc3JjLnNsaWNlKHNyYy5sYXN0SW5kZXhPZignLicpICsgMSk7XHJcblxyXG4gICAgY29uc3QgY29kZWM6IHN0cmluZyA9IGNvZGVjc1t0eXBlXVtleHRdO1xyXG5cclxuICAgIGlmIChhc3NldC5jYW5QbGF5VHlwZShjb2RlYykgPT0gJ3Byb2JhYmx5JyB8fCBhc3NldC5jYW5QbGF5VHlwZShjb2RlYykgPT0gJ21heWJlJykgcmV0dXJuIHNyYztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn0iXX0=