'use strict'

import MuskOx from '../muskox.js';

let ox;

/**
 * Verifies that images can be properly loaded and retrieved
 * as HTMLImageElements.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Images', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve an image', (done) => {

		ox.on('load-complete', () => {

			const star = ox.fetch.image('star');

			chai.expect(star.nodeName).to.equal('IMG') &&

				chai.expect(star instanceof HTMLImageElement).to.be.true &&

				chai.expect(star.width).to.equal(270) &&

				chai.expect(star.height).to.equal(256);

			done();

		});

		ox.image('star', './assets/star.png');

		ox.start();

	});

});

/**
 * Verifies that audio can be properly loaded and retrieved
 * as an HTMLAudioElement.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Audio', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve an audio clip', (done) => {

		ox.on('load-complete', () => {

			const voice = ox.fetch.audio('voice');

			chai.expect(voice.nodeName).to.equal('AUDIO') &&

				chai.expect(voice instanceof HTMLAudioElement).to.be.true;

			done();

		});

		ox.audio('voice', './assets/123.m4a');

		ox.start();

	});

});

/**
 * Verifies that video can be properly loaded and retrieved
 * as an HTMLVideoElement.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Video', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a video clip', (done) => {

		ox.on('load-complete', () => {

			const lol = ox.fetch.video('lol');

			chai.expect(lol.nodeName).to.equal('VIDEO') &&

				chai.expect(lol instanceof HTMLVideoElement).to.be.true;

			done();

		});

		ox.video('lol', './assets/game.mp4');

		ox.start();

	});

});

/**
 * Verifies that text can be properly loaded and retrieved
 * as a string
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Text', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a text file', (done) => {

		ox.on('load-complete', () => {

			const hw = ox.fetch.text('hw');

			chai.expect(hw).to.equal('Hello World!');

			done();

		});

		ox.text('hw', './assets/helloworld.txt');

		ox.start();

	});

});

/**
 * Verifies that text can be properly loaded and retrieved
 * as binary.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Binary', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a text file as binary', (done) => {

		ox.on('load-complete', () => {

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

		});

		ox.binary('hw', './assets/helloworld.txt');

		ox.start();

	});

});

/**
 * Verifies that text can be properly loaded and retrieved
 * as binary.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving Binary', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a text file as binary', (done) => {

		ox.on('load-complete', () => {

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

		});

		ox.binary('hw', './assets/helloworld.txt');

		ox.start();

	});

});

/**
 * Verifies that text can be properly loaded and retrieved
 * as binary.
 * 
 * @since 0.1.0
 */
describe('Loading and Retrieving JSON', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a json file as an object', (done) => {

		ox.on('load-complete', () => {

			const food = ox.fetch.json('food');

			chai.expect(food).to.deep.equal({
				'favorite-foods': { 'fruits': ['apple', 'orange'], 'pizza': ['chicken'] }
			});

			done();

		});

		ox.json('food', './assets/favorite-foods.json');

		ox.start();

	});

});