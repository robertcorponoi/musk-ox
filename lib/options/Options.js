'use strict';
/**
 * Defines the options for an instance of MuskOx and their default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Options =
/**
 * A cross-origin property to set for all assets that use cross-origin.
 * 
 * @property {string}
 * 
 * @default ''
 */

/**
 * A reference to an existing AudioContext to use if creating web audio assets.
 * 
 * If one is not assigned then a new instance of an AudioContext will be used.
 * 
 * @property {AudioContext}
 */

/**
 * @param {Object} options The options passed to MuskOx on initialization.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "crossOrigin", '');

  _defineProperty(this, "audioContext", null);

  Object.assign(this, options);
  if (!this.audioContext) this.audioContext = new AudioContext();
};

exports["default"] = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7OztBQUdBLGlCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUEsdUNBZFAsRUFjTzs7QUFBQSx3Q0FMUyxJQUtUOztBQUMzQkMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFFQSxNQUFJLENBQUMsS0FBS0csWUFBVixFQUF3QixLQUFLQSxZQUFMLEdBQW9CLElBQUlDLFlBQUosRUFBcEI7QUFDekIsQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIG9wdGlvbnMgZm9yIGFuIGluc3RhbmNlIG9mIE11c2tPeCBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBBIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSB0byBzZXQgZm9yIGFsbCBhc3NldHMgdGhhdCB1c2UgY3Jvc3Mtb3JpZ2luLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0ICcnXHJcbiAgICovXHJcbiAgY3Jvc3NPcmlnaW46IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byBhbiBleGlzdGluZyBBdWRpb0NvbnRleHQgdG8gdXNlIGlmIGNyZWF0aW5nIHdlYiBhdWRpbyBhc3NldHMuXHJcbiAgICogXHJcbiAgICogSWYgb25lIGlzIG5vdCBhc3NpZ25lZCB0aGVuIGEgbmV3IGluc3RhbmNlIG9mIGFuIEF1ZGlvQ29udGV4dCB3aWxsIGJlIHVzZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBdWRpb0NvbnRleHR9XHJcbiAgICovXHJcbiAgYXVkaW9Db250ZXh0OiAoQXVkaW9Db250ZXh0IHwgbnVsbCkgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gTXVza094IG9uIGluaXRpYWxpemF0aW9uLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXVkaW9Db250ZXh0KSB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICB9XHJcbn0iXX0=