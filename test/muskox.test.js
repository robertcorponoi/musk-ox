'use strict'

import MuskOx from '../muskox.js';

let ox;

// Images:
describe('Loading and Retrieving Images', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve an image', (done) => {

		ox.on('load-complete', () => {

			const star = ox.get.image('star');

			chai.expect(star.nodeName).to.equal('IMG') && chai.expect(star.width).to.equal(270) && chai.expect(star.height).to.equal(256);

			done();

		});

		ox.load.image('star', './assets/star.png');

		ox.start();

	});

});

// Audio:
describe('Loading and Retrieving Audio', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve an audio clip', (done) => {

		ox.on('load-complete', () => {

			const voice = ox.get.audio('voice');

			chai.expect(voice.nodeName).to.equal('AUDIO');

			done();

		});

		ox.load.audio('voice', './assets/123.m4a');

		ox.start();

	});

});

// Video:
describe('Loading and Retrieving Video', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve a video clip', (done) => {

		ox.on('load-complete', () => {

			const game = ox.get.video('game');

			chai.expect(game.nodeName).to.equal('VIDEO');

			done();

		});

		ox.load.video('game', './assets/game.mp4');

		ox.start();

	});

});

// Text:
describe('Loading and Retrieving Text', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve the contents of a text file', (done) => {

		ox.on('load-complete', () => {

			const helloworld = ox.get.text('helloworld');

			chai.expect(helloworld).to.equal('Hello World!');

			done();

		});

		ox.load.text('helloworld', './assets/helloworld.txt');

		ox.start();

	});

});

// Binary:
describe('Loading and Retrieving Binary', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve the contents of a text file', (done) => {

		ox.on('load-complete', () => {

			const helloworldBinary = ox.get.binary('helloworldBinary');

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

			chai.expect(helloworldBinary).to.deep.equal(expected);

			done();

		});

		ox.load.binary('helloworldBinary', './assets/helloworld.txt');

		ox.start();

	});

});

// JSON:
describe('Loading and Retrieving JSON', () => {

	beforeEach(() => ox = new MuskOx());

	afterEach(() => ox = null);

	it('should load and retrieve the contents of a text file', (done) => {

		ox.on('load-complete', () => {

			const favoriteFoods = ox.get.json('favoriteFoods');

			chai.expect(favoriteFoods).to.deep.equal({
				'favorite-foods': { 'fruits': ['apple', 'orange'], 'pizza': ['chicken'] }
			});

			done();

		});

		ox.load.json('favoriteFoods', './assets/favorite-foods.json');

		ox.start();

	});

});