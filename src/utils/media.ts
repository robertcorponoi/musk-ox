'use strict'

import codecs from './codecs';

/**
 * Goes through src strings for audio and video files and compares codecs to find the src that the browser is
 * most likely capable of playing.
 * 
 * @param {string} type The type of asset being loaded, either audio or video.
 * @param {Array<string>} srcs The srcs provided for the asset.
 * 
 * @returns {string} Returns the src of the asset that the browser is most likely capable of playing.
 */
export function getPlayableMedia(type: string, srcs: Array<string>): string {
  let asset: (HTMLAudioElement | HTMLVideoElement);

  const isAudio: boolean = type === 'audio';

  if (isAudio) asset = new Audio();

  else asset = document.createElement('video');

  for (const src of srcs) {
    const ext: string = src.slice(src.lastIndexOf('.') + 1);

    const codec: string = codecs[type][ext];

    if (asset.canPlayType(codec) == 'probably' || asset.canPlayType(codec) == 'maybe') return src;

  }

  return '';
}