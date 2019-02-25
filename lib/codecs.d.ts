/**
 * Describes the structure of the audio and video codecs
 * objects.
 */
interface Codecs {
    [key: string]: {
        [key: string]: string;
    };
}
declare const codecs: Codecs;
/**
 * Describes common audio and video codecs to use when loading
 * audio and video assets.
 */
export default codecs;
