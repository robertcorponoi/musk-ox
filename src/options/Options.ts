'use strict'

/**
 * Defines the options for an instance of MuskOx and their default values.
 */
export default class Options {
  /**
   * A cross-origin property to set for all assets that use cross-origin.
   * 
   * @property {string}
   * 
   * @default ''
   */
  crossOrigin: string = '';

  /**
   * A reference to an existing AudioContext to use if creating web audio assets.
   * 
   * If one is not assigned then a new instance of an AudioContext will be used.
   * 
   * @property {AudioContext}
   */
  audioContext: (AudioContext | null) = null;

  /**
   * @param {Object} options The options passed to MuskOx on initialization.
   */
  constructor(options: Object) {
    Object.assign(this, options);

    if (!this.audioContext) this.audioContext = new AudioContext();
  }
}