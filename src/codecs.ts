'use strict'

/**
 * Describes the structure of the audio and video codecs
 * objects.
 */
interface Codecs {

	[key: string]: {

		[key: string]: string

	}

}

const codecs: Codecs = {

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

}

/**
 * Describes common audio and video codecs to use when loading
 * audio and video assets.
 */
export default codecs;