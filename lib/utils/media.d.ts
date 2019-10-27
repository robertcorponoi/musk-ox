/**
 * Goes through src strings for audio and video files and compares codecs to find the src that the browser is
 * most likely capable of playing.
 *
 * @param {string} type The type of asset being loaded, either audio or video.
 * @param {Array<string>} srcs The srcs provided for the asset.
 *
 * @returns {string} Returns the src of the asset that the browser is most likely capable of playing.
 */
export declare function getPlayableMedia(type: string, srcs: Array<string>): string;
