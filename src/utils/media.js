'use strict'

import codecs from '../codecs.js';

/**
 * Loop through an array of audio/video srcs and return the first
 * one that the browser is capable of playing.
 * 
 * @since 2.0.0
 * 
 * @param {string} type The type of asset being checked, audio or video.
 * @param {Array<string>} srcs The srcs to check.
 * 
 * @returns {src} The src of the audio/video asset that can be played. 
 */
export function getPlayableMedia(type, srcs) {

	let asset;

	const isAudio = type === 'audio';

	if (isAudio) asset = new Audio();

	else asset = document.createElement('video');

	for (const src of srcs) {

		const ext = src.slice(src.lastIndexOf('.') + 1);

		const codec = codecs[type][ext];

		if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') {

			return src;

		}

	}

}