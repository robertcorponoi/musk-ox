'use strict';
/**
 * Describes the structure of the audio and video codecs
 * objects.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
  /**
   * Describes common audio and video codecs to use when loading
   * audio and video assets.
   */

};
var _default = codecs;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2RlY3MudHMiXSwibmFtZXMiOlsiY29kZWNzIiwiYXVkaW8iLCJ2aWRlbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7O0FBY0EsSUFBTUEsTUFBYyxHQUFHO0FBRXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFFTixXQUFPLFlBRkQ7QUFHTixXQUFPLFdBSEQ7QUFJTixXQUFPLDJCQUpEO0FBS04sV0FBTyw4QkFMRDtBQU1OLFlBQVEsNEJBTkY7QUFPTixXQUFPO0FBUEQsR0FGZTtBQWF0QkMsRUFBQUEsS0FBSyxFQUFFO0FBRU4sV0FBTyxtQ0FGRDtBQUdOLFdBQU8sMkNBSEQ7QUFJTixZQUFRO0FBSkY7QUFVUjs7Ozs7QUF2QnVCLENBQXZCO2VBMkJlRixNIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb2RlY3NcclxuICogb2JqZWN0cy5cclxuICovXHJcbmludGVyZmFjZSBDb2RlY3Mge1xyXG5cclxuXHRba2V5OiBzdHJpbmddOiB7XHJcblxyXG5cdFx0W2tleTogc3RyaW5nXTogc3RyaW5nXHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGNvZGVjczogQ29kZWNzID0ge1xyXG5cclxuXHRhdWRpbzoge1xyXG5cclxuXHRcdCdtcDMnOiAnYXVkaW8vbXBlZycsXHJcblx0XHQnbTRhJzogJ2F1ZGlvL21wNCcsXHJcblx0XHQnb2dnJzogJ2F1ZGlvL29nZztjb2RlY3M9XCJ2b3JiaXNcIicsXHJcblx0XHQnbXA0JzogJ2F1ZGlvL21wNDtjb2RlY3M9XCJtcDRhLjQwLjVcIicsXHJcblx0XHQnd2VibSc6ICdhdWRpby93ZWJtO2NvZGVjcz1cInZvcmJpc1wiJyxcclxuXHRcdCd3YXYnOiAnYXVkaW8vd2F2O2NvZGVjcz1cIjFcIidcclxuXHJcblx0fSxcclxuXHJcblx0dmlkZW86IHtcclxuXHJcblx0XHQnb2dnJzogJ3ZpZGVvL29nZztjb2RlY3M9XCJ0aGVvcmEsIHZvcmJpc1wiJyxcclxuXHRcdCdtcDQnOiAndmlkZW8vbXA0O2NvZGVjcz1cImF2YzEuNEQ0MDFFLCBtcDRhLjQwLjJcIicsXHJcblx0XHQnd2VibSc6ICd2aWRlby93ZWJtO2NvZGVjcz1cInZwOC4wLCB2b3JiaXNcIidcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBjb21tb24gYXVkaW8gYW5kIHZpZGVvIGNvZGVjcyB0byB1c2Ugd2hlbiBsb2FkaW5nXHJcbiAqIGF1ZGlvIGFuZCB2aWRlbyBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjb2RlY3M7Il19