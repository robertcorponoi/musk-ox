'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayableMedia = getPlayableMedia;

var _codecs = _interopRequireDefault(require("../codecs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS50cyJdLCJuYW1lcyI6WyJnZXRQbGF5YWJsZU1lZGlhIiwidHlwZSIsInNyY3MiLCJhc3NldCIsImlzQXVkaW8iLCJBdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImV4dCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJjb2RlYyIsImNvZGVjcyIsImNhblBsYXlUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQVdPLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUF3Q0MsSUFBeEMsRUFBcUU7QUFFM0UsTUFBSUMsS0FBSjtBQUVBLE1BQU1DLE9BQWdCLEdBQUdILElBQUksS0FBSyxPQUFsQztBQUVBLE1BQUlHLE9BQUosRUFBYUQsS0FBSyxHQUFHLElBQUlFLEtBQUosRUFBUixDQUFiLEtBRUtGLEtBQUssR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFSc0U7QUFBQTtBQUFBOztBQUFBO0FBVTNFLHlCQUFrQkwsSUFBbEIsOEhBQXdCO0FBQUEsVUFBYk0sR0FBYTtBQUV2QixVQUFNQyxHQUFXLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRixHQUFHLENBQUNHLFdBQUosQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBakMsQ0FBcEI7QUFFQSxVQUFNQyxLQUFhLEdBQUdDLG1CQUFPWixJQUFQLEVBQWFRLEdBQWIsQ0FBdEI7O0FBRUEsVUFBSU4sS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixVQUE1QixJQUEwQ1QsS0FBSyxDQUFDVyxXQUFOLENBQWtCRixLQUFsQixLQUE0QixPQUExRSxFQUFtRjtBQUVsRixlQUFPSixHQUFQO0FBRUE7QUFFRDtBQXRCMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QjNFLFNBQU8sRUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgY29kZWNzIGZyb20gJy4uL2NvZGVjcyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byBoZWxwIGRlYWwgd2l0aCBhdWRpbyBhbmQgdmlkZW8gZmlsZXMgc2luY2VcclxuICogdGhleSBkaWZmZXIgZnJvbSBvdGhlciBhc3NldHMgaW4gdGVybXMgb2YgY29kZWNzIGFuZCBmYWxsYmFja3MuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMy4wLjBcclxuICovXHJcblxyXG4vKipcclxuICogR28gdGhyb3VnaCBhbGwgb2YgdGhlIHByb3ZpZGVkIHNyY3MgZm9yIHRoZSBhdWRpbyBvciB2aWRlbyBmaWxlcyBhbmQgcmV0dXJuXHJcbiAqIHRoZSBmaXJzdCBvbmUgdGhhdCB0aGUgYnJvd3NlciBpcyBtb3N0IGxpa2VseSBjYXBhYmxlIG9mIHBsYXlpbmcuXHJcbiAqIFxyXG4gKiBAc2luY2UgMi4wLjBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGFzc2V0IGJlaW5nIGxvYWRlZCwgZWl0aGVyIGF1ZGlvIG9yIHZpZGVvLlxyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNyY3MgVGhlIHNyY3MgcHJvdmlkZWQgZm9yIHRoZSBhc3NldC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzcmMgb2YgdGhlIGFzc2V0IHRoYXQgdGhlIGJyb3dzZXIgaXMgbW9zdCBsaWtlbHkgY2FwYWJsZSBvZiBwbGF5aW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXlhYmxlTWVkaWEodHlwZTogc3RyaW5nLCBzcmNzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcclxuXHJcblx0bGV0IGFzc2V0OiAoSFRNTEF1ZGlvRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQpO1xyXG5cclxuXHRjb25zdCBpc0F1ZGlvOiBib29sZWFuID0gdHlwZSA9PT0gJ2F1ZGlvJztcclxuXHJcblx0aWYgKGlzQXVkaW8pIGFzc2V0ID0gbmV3IEF1ZGlvKCk7XHJcblxyXG5cdGVsc2UgYXNzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuXHRmb3IgKGNvbnN0IHNyYyBvZiBzcmNzKSB7XHJcblxyXG5cdFx0Y29uc3QgZXh0OiBzdHJpbmcgPSBzcmMuc2xpY2Uoc3JjLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcclxuXHJcblx0XHRjb25zdCBjb2RlYzogc3RyaW5nID0gY29kZWNzW3R5cGVdW2V4dF07XHJcblxyXG5cdFx0aWYgKGFzc2V0LmNhblBsYXlUeXBlKGNvZGVjKSA9PSAncHJvYmFibHknIHx8IGFzc2V0LmNhblBsYXlUeXBlKGNvZGVjKSA9PSAnbWF5YmUnKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gc3JjO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gJyc7XHJcblxyXG59Il19