'use strict'

/**
 * Describes the structure of the codecs object that contains popular audio and video codecs.
 */
export default interface Codecs {

  [key: string]: {
    [key: string]: string;
  };

};