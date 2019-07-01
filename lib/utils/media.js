'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayableMedia = getPlayableMedia;

var _codecs = _interopRequireDefault(require("../codecs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var codec = _codecs.default[type][ext];

      if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') {
        return src;
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

  return '';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS50cyJdLCJuYW1lcyI6WyJnZXRQbGF5YWJsZU1lZGlhIiwidHlwZSIsInNyY3MiLCJhc3NldCIsImlzQXVkaW8iLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImV4dCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJjb2RlYyIsImNvZGVjcyIsImNhblBsYXlUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQVdPLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUF3Q0MsSUFBeEMsRUFBcUU7QUFFM0UsTUFBSUMsS0FBSjtBQUVBLE1BQU1DLE9BQWdCLEdBQUdILElBQUksS0FBSyxPQUFsQztBQUVBLE1BQUlHLE9BQUosRUFBYUQsS0FBSyxHQUFHLElBQUlFLEtBQUosRUFBUixDQUFiLEtBRUtGLEtBQUssR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFSc0U7QUFBQTtBQUFBOztBQUFBO0FBVTNFLHlCQUFrQkwsSUFBbEIsOEhBQXdCO0FBQUEsVUFBYk0sR0FBYTtBQUV2QixVQUFNQyxHQUFXLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRixHQUFHLENBQUNHLFdBQUosQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBakMsQ0FBcEI7QUFFQSxVQUFNQyxLQUFhLEdBQUdDLGdCQUFPWixJQUFQLEVBQWFRLEdBQWIsQ0FBdEI7O0FBRUEsVUFBSU4sS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixVQUE1QixJQUEwQ1QsS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixPQUExRSxFQUFtRjtBQUVsRixlQUFPSixHQUFQO0FBRUE7QUFFRDtBQXRCMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QjNFLFNBQU8sRUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjb2RlY3MgZnJvbSAnLi4vY29kZWNzJztcblxuLyoqXG4gKiBQcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIGhlbHAgZGVhbCB3aXRoIGF1ZGlvIGFuZCB2aWRlbyBmaWxlcyBzaW5jZVxuICogdGhleSBkaWZmZXIgZnJvbSBvdGhlciBhc3NldHMgaW4gdGVybXMgb2YgY29kZWNzIGFuZCBmYWxsYmFja3MuXG4gKiBcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pIDxyb2JlcnRjb3Jwb25vaUBnbWFpbC5jb20+XG4gKiBcbiAqIEB2ZXJzaW9uIDMuMC4wXG4gKi9cblxuLyoqXG4gKiBHbyB0aHJvdWdoIGFsbCBvZiB0aGUgcHJvdmlkZWQgc3JjcyBmb3IgdGhlIGF1ZGlvIG9yIHZpZGVvIGZpbGVzIGFuZCByZXR1cm5cbiAqIHRoZSBmaXJzdCBvbmUgdGhhdCB0aGUgYnJvd3NlciBpcyBtb3N0IGxpa2VseSBjYXBhYmxlIG9mIHBsYXlpbmcuXG4gKiBcbiAqIEBzaW5jZSAyLjAuMFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhc3NldCBiZWluZyBsb2FkZWQsIGVpdGhlciBhdWRpbyBvciB2aWRlby5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc3JjcyBUaGUgc3JjcyBwcm92aWRlZCBmb3IgdGhlIGFzc2V0LlxuICogXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3JjIG9mIHRoZSBhc3NldCB0aGF0IHRoZSBicm93c2VyIGlzIG1vc3QgbGlrZWx5IGNhcGFibGUgb2YgcGxheWluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXlhYmxlTWVkaWEodHlwZTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcblxuXHRsZXQgYXNzZXQ6IChIVE1MQXVkaW9FbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudCk7XG5cblx0Y29uc3QgaXNBdWRpbzogYm9vbGVhbiA9IHR5cGUgPT09ICdhdWRpbyc7XG5cblx0aWYgKGlzQXVkaW8pIGFzc2V0ID0gbmV3IEF1ZGlvKCk7XG5cblx0ZWxzZSBhc3NldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cblx0Zm9yIChjb25zdCBzcmMgb2Ygc3Jjcykge1xuXG5cdFx0Y29uc3QgZXh0OiBzdHJpbmcgPSBzcmMuc2xpY2Uoc3JjLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcblxuXHRcdGNvbnN0IGNvZGVjOiBzdHJpbmcgPSBjb2RlY3NbdHlwZV1bZXh0XTtcblxuXHRcdGlmIChhc3NldC5jYW5QbGF5VHlwZShjb2RlYykgPT0gJ3Byb2JhYmx5JyB8fCBhc3NldC5jYW5QbGF5VHlwZShjb2RlYykgPT0gJ21heWJlJykge1xuXG5cdFx0XHRyZXR1cm4gc3JjO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gJyc7XG5cbn0iXX0=