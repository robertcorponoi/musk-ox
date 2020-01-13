'use strict'

import MuskOx from '../muskox.js';

let ox;

beforeEach(() => ox = new MuskOx());

afterEach(() => ox = null);

describe('Listening to signals', () => {
  it('should dispatch a signal after each asset is loaded', done => {
    const spy = sinon.spy();

    setTimeout(() => {
      chai.expect(spy.calledTwice).to.be.true;

      done();
    }, 1500);

    ox.onLoad.add(spy);

    ox.image('star', './assets/star.png');
    ox.image('star2', './assets/star.png');

    ox.start();
  });

  it('should dispatch a signal when all assets are loaded', done => {
    const spy = sinon.spy();

    setTimeout(() => {
      chai.expect(spy.calledOnce).to.be.true;

      done();
    }, 1500);

    ox.onComplete.add(spy);

    ox.image('star', './assets/star.png');
    ox.image('star2', './assets/star.png');

    ox.start();
  });

  it('should dispatch a signal when all assets are loaded even if no assets are defined', done => {
    const spy = sinon.spy();

    setTimeout(() => {
      chai.expect(spy.calledOnce).to.be.true;

      done();
    }, 1500);

    ox.onComplete.add(spy);

    ox.start();
  });

  it('should dispatch a signal when loading progress is updated', done => {
    const progress = [];

    const check = () => {
      chai.expect(progress).to.deep.equal([50, 100]);

      done();
    };

    const updateProgress = (percent) => {
      progress.push(percent);
    };

    ox.onProgress.add(updateProgress);
    ox.onComplete.add(check);

    ox.image('star', './assets/star.png');
    ox.image('star2', './assets/star.png');

    ox.start();
  });

  it('should dispatch a signal when an asset fails to load', done => {
    const spy = sinon.spy();

    setTimeout(() => {
      chai.expect(spy.calledOnce).to.be.true;

      done();
    }, 1500);

    ox.onError.add(spy);

    ox.image('star', './assets/star2.png');

    ox.start();
  });
});