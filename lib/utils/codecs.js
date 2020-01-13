'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = codecs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb2RlY3MudHMiXSwibmFtZXMiOlsiY29kZWNzIiwiYXVkaW8iLCJ2aWRlbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7O0FBR0EsSUFBTUEsTUFBYyxHQUFHO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxXQUFPLFlBREY7QUFFTCxXQUFPLFdBRkY7QUFHTCxXQUFPLDJCQUhGO0FBSUwsV0FBTyw4QkFKRjtBQUtMLFlBQVEsNEJBTEg7QUFNTCxXQUFPO0FBTkYsR0FEYztBQVVyQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0wsV0FBTyxtQ0FERjtBQUVMLFdBQU8sMkNBRkY7QUFHTCxZQUFRO0FBSEg7QUFWYyxDQUF2QjtlQWlCZUYsTSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IENvZGVjcyBmcm9tICcuLi9pbnRlcmZhY2VzL0NvZGVjcyc7XHJcblxyXG4vKipcclxuICogQ29tbW9uIGF1ZGlvIGFuZCB2aWRlbyBjb2RlY3MgdG8gdXNlIHdoZW4gbG9hZGluZyBhdWRvIGFuZCB2aWRlbyBhc3NldHMuXHJcbiAqL1xyXG5jb25zdCBjb2RlY3M6IENvZGVjcyA9IHtcclxuICBhdWRpbzoge1xyXG4gICAgJ21wMyc6ICdhdWRpby9tcGVnJyxcclxuICAgICdtNGEnOiAnYXVkaW8vbXA0JyxcclxuICAgICdvZ2cnOiAnYXVkaW8vb2dnO2NvZGVjcz1cInZvcmJpc1wiJyxcclxuICAgICdtcDQnOiAnYXVkaW8vbXA0O2NvZGVjcz1cIm1wNGEuNDAuNVwiJyxcclxuICAgICd3ZWJtJzogJ2F1ZGlvL3dlYm07Y29kZWNzPVwidm9yYmlzXCInLFxyXG4gICAgJ3dhdic6ICdhdWRpby93YXY7Y29kZWNzPVwiMVwiJ1xyXG4gIH0sXHJcblxyXG4gIHZpZGVvOiB7XHJcbiAgICAnb2dnJzogJ3ZpZGVvL29nZztjb2RlY3M9XCJ0aGVvcmEsIHZvcmJpc1wiJyxcclxuICAgICdtcDQnOiAndmlkZW8vbXA0O2NvZGVjcz1cImF2YzEuNEQ0MDFFLCBtcDRhLjQwLjJcIicsXHJcbiAgICAnd2VibSc6ICd2aWRlby93ZWJtO2NvZGVjcz1cInZwOC4wLCB2b3JiaXNcIidcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2RlY3M7Il19