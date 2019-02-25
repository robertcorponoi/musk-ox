'use strict'

import codecs from '../codecs';

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
export function getPlayableMedia(type: string, srcs: Array<string>): string {

	let asset: (HTMLAudioElement | HTMLVideoElement);

	const isAudio: boolean = type === 'audio';

	if (isAudio) asset = new Audio();

	else asset = document.createElement('video');

	for (const src of srcs) {

		const ext: string = src.slice(src.lastIndexOf('.') + 1);

		const codec: string = codecs[type][ext];

		if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') {

			return src;

		}

	}

	return '';

}