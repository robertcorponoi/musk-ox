'use strict';
/**
 * Describes the structure of the audio and video codecs
 * objects.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
 * Describes common audio and video codecs to use when loading
 * audio and video assets.
 */

var _default = codecs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2RlY3MudHMiXSwibmFtZXMiOlsiY29kZWNzIiwiYXVkaW8iLCJ2aWRlbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7O0FBY0EsSUFBTUEsTUFBYyxHQUFHO0FBRXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFFTixXQUFPLFlBRkQ7QUFHTixXQUFPLFdBSEQ7QUFJTixXQUFPLDJCQUpEO0FBS04sV0FBTyw4QkFMRDtBQU1OLFlBQVEsNEJBTkY7QUFPTixXQUFPO0FBUEQsR0FGZTtBQWF0QkMsRUFBQUEsS0FBSyxFQUFFO0FBRU4sV0FBTyxtQ0FGRDtBQUdOLFdBQU8sMkNBSEQ7QUFJTixZQUFRO0FBSkY7QUFiZSxDQUF2QjtBQXVCQTs7Ozs7ZUFJZUYsTSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBhdWRpbyBhbmQgdmlkZW8gY29kZWNzXHJcbiAqIG9iamVjdHMuXHJcbiAqL1xyXG5pbnRlcmZhY2UgQ29kZWNzIHtcclxuXHJcblx0W2tleTogc3RyaW5nXToge1xyXG5cclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5jb25zdCBjb2RlY3M6IENvZGVjcyA9IHtcclxuXHJcblx0YXVkaW86IHtcclxuXHJcblx0XHQnbXAzJzogJ2F1ZGlvL21wZWcnLFxyXG5cdFx0J200YSc6ICdhdWRpby9tcDQnLFxyXG5cdFx0J29nZyc6ICdhdWRpby9vZ2c7Y29kZWNzPVwidm9yYmlzXCInLFxyXG5cdFx0J21wNCc6ICdhdWRpby9tcDQ7Y29kZWNzPVwibXA0YS40MC41XCInLFxyXG5cdFx0J3dlYm0nOiAnYXVkaW8vd2VibTtjb2RlY3M9XCJ2b3JiaXNcIicsXHJcblx0XHQnd2F2JzogJ2F1ZGlvL3dhdjtjb2RlY3M9XCIxXCInXHJcblxyXG5cdH0sXHJcblxyXG5cdHZpZGVvOiB7XHJcblxyXG5cdFx0J29nZyc6ICd2aWRlby9vZ2c7Y29kZWNzPVwidGhlb3JhLCB2b3JiaXNcIicsXHJcblx0XHQnbXA0JzogJ3ZpZGVvL21wNDtjb2RlY3M9XCJhdmMxLjRENDAxRSwgbXA0YS40MC4yXCInLFxyXG5cdFx0J3dlYm0nOiAndmlkZW8vd2VibTtjb2RlY3M9XCJ2cDguMCwgdm9yYmlzXCInXHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgY29tbW9uIGF1ZGlvIGFuZCB2aWRlbyBjb2RlY3MgdG8gdXNlIHdoZW4gbG9hZGluZ1xyXG4gKiBhdWRpbyBhbmQgdmlkZW8gYXNzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY29kZWNzOyJdfQ==