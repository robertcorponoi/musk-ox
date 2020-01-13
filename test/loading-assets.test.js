'use strict'

import MuskOx from '../muskox.js';

let ox;

beforeEach(() => ox = new MuskOx());

afterEach(() => ox = null);

describe('Loading and retrieving assets', () => {
  it('should load and retrieve an image asset as HTML image elements', done => {
    const check = () => {
      const star = ox.fetch.image('star');

      chai.expect(star instanceof HTMLImageElement).to.be.true;

      done();
    };

    ox.onComplete.add(check);

    ox.image('star', './assets/star.png');

    ox.start();
  });

  it('should create the image with the correct dimensions', done => {
    const check = () => {
      const star = ox.fetch.image('star');

      chai.expect(star.width).to.equal(270) && chai.expect(star.height).to.equal(256);

      done();
    };

    ox.onComplete.add(check);

    ox.image('star', './assets/star.png');

    ox.start();
  });

  it('should load and retrieve an audio clip as an HTML audio element', done => {
    const check = () => {
      const voice = ox.fetch.audio('voice');

      chai.expect(voice instanceof HTMLAudioElement).to.be.true;

      done();
    };

    ox.onComplete.add(check);

    ox.audio('voice', './assets/123.m4a');

    ox.start();
  });

  it('should load and retrieve a video clip', done => {
    const check = () => {
      const lol = ox.fetch.video('lol');

      chai.expect(lol instanceof HTMLVideoElement).to.be.true;

      done();
    };

    ox.onComplete.add(check);

    ox.video('lol', './assets/game.mp4');

    ox.start();
  });

  it('should load and retrieve a text file', done => {
    const check = () => {

      const hw = ox.fetch.text('hw');

      chai.expect(hw).to.equal('Hello World!');

      done();
    };

    ox.onComplete.add(check);

    ox.text('hw', './assets/helloworld.txt');

    ox.start();
  });

  it('should load and retrieve a text file as binary', done => {
    const check = () => {
      const hw = ox.fetch.binary('hw');

      const expected = new Uint8Array(12);

      expected[0] = 72;
      expected[1] = 101;
      expected[2] = 108;
      expected[3] = 108;
      expected[4] = 111;
      expected[5] = 32;
      expected[6] = 87;
      expected[7] = 111;
      expected[8] = 114;
      expected[9] = 108;
      expected[10] = 100;
      expected[11] = 33;

      chai.expect(hw).to.deep.equal(expected);

      done();
    };

    ox.onComplete.add(check);

    ox.binary('hw', './assets/helloworld.txt');

    ox.start();
  });

  it('should load and retrieve a json file as an object', done => {
    const check = () => {
      const food = ox.fetch.json('food');

      chai.expect(food).to.deep.equal({ 'favorite-foods': { 'fruits': ['apple', 'orange'], 'pizza': ['chicken'] } });

      done();
    };

    ox.onComplete.add(check);

    ox.json('food', './assets/favorite-foods.json');

    ox.start();
  });

  it('should load no assets but complete the cycle anyways', done => {
    const check = () => {
      chai.expect(true).to.be.true;

      done();
    };

    ox.onComplete.add(check);

    ox.start();
  });
});
