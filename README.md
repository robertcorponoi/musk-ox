<p align="center">
  <img width="250" height="250" src="https://github.com/robertcorponoi/graphics/blob/master/musk-ox/musk-ox-logo.png?raw=true">
</p>

<h1 align="center">MuskOx</h1>

<p align="center">MuskOx is an easy to use, event-driven, and efficient asset preloader for the browser.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/musk-ox.svg?style=flat)](https://www.npmjs.com/package/musk-ox)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/musk-ox/badge.svg)](https://snyk.io/test/github/robertcorponoi/musk-ox)
  ![npm](https://img.shields.io/npm/dt/musk-ox)
  [![NPM downloads](https://img.shields.io/npm/dm/musk-ox.svg?style=flat)](https://www.npmjs.com/package/musk-ox)
  <a href="https://badge.fury.io/js/musk-ox"><img src="https://img.shields.io/github/issues/robertcorponoi/musk-ox.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/musk-ox"><img src="https://img.shields.io/github/license/robertcorponoi/musk-ox.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Table of Contents**

- [Installation](#installation)
- [Initialization](#initialization)
- [Signals and Events](#signals-and-events)
- [Step 1: Defining Assets to Load](#step-1-defining-assets-to-load)
- [Step 2: Loading Assets](#step-2-start-loading)
- [Step 3: Fetching Assets](#step-3-using-loaded-assets)

## **Installation**

MuskOx is shipped as an ES6 module.

To install MuskOx through npm, simply use the following command:

```
$ npm install musk-ox
```

## **Initialization**

To use MuskOx, simply import the module:

```js
import MuskOx from './path/to/muskox.js';
```

and after that, a new instance can be initialized like so:

```js
const ox = new MuskOx();
```

As of 5.0.0 the single `crossOrigin` initialization parameter has been replaced with an options object:

| param        | type         | description                                                                                                                                              | default            |
|--------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| options      | Object       |                                                                                                                                                          |                    |
| crossOrigin  | string       | A cross-origin property to set for all assets that use cross-origin.                                                                                     | ''                 |
| audioContext | AudioContext | A reference to an existing AudioContext to use if creating web audio assets. If one is not assigned then a new instance of an AudioContext will be used. | new AudioContext() |

The MuskOx asset loading system is split into three steps: defining assets to load, initiating the load, and retrieving loaded assets.

## **Signals and Events**

Before we get into usage, it helps to know how Musk Ox's event system works. Instead of using traditional events, MuskOx uses signals which don't rely on event names but objects that dispatch the signal with any data needed.

To respond to a signal, you have to use the signal's `add` method and then declare the function that you want to run when the signal is dispatched.

Currently MuskOx has the following available events:

### **onLoad**

The onLoad signal is dispatched each time an asset is loaded and it contains the data of the asset that was loaded.

```js
const onLoadResponse = (asset) => {
  console.log(asset); // Asset is the asset that was most recently loaded.
};

ox.onLoad.add(onLoadResponse);
```

### **onComplete**

The onComplete signal is dispatched when all of the assets are loaded.

```js
const onCompleteResponse = () => {
};

ox.onComplete.add(onCompleteResponse);
```

### **onError**

The onError signal is dispatched if an asset encounters an error while loading and it contains the asset and error that was thrown.

```js
const onErrorResponse = (asset, err) => {
  console.log(asset); // Asset is the asset that had trouble loading.
  console.log(err); // Err is the error that was thrown while loading the asset.
};

ox.onError.add(onErrorResponse);
```

### **onProgress**

The onProgress signal is dispatched when the loading progress changes and it contains the current load percentage.

```js
const onProgressResponse = (percent) => {
  console.log(percent); // Percent is the current loading percentage.
};

ox.onProgress.add(onProgressResponse);
```

## **Step 1: Defining Assets to Load**

The first step in using MuskOx involves defining the assets that need to be loaded. As of current, MuskOx supports loading images, audio, video, text, binary, and JSON assets. Assets defined during the loading phase are set to a queue that will process when the `start` method is called.

### **image**

Adds an image asset to the load queue.

| param   | type    | description                                                                             | default |
|---------|---------|-----------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this image asset by when using it          |         |
| src     | string  | The path to the image asset.                                                            |         |
| replace | boolean | If set to true, this image asset will replace an existing image asset with the same key | false   |

```js
ox.image('star', './images/star.png');
```

### **audio**

Adds an audio asset to the load queue.

| param   | type                    | description                                                                                                                                               | default |
|---------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| key     | string                  | A unique key which will be used to reference this audio asset by when using it                                                                            |         |
| srcs    | string or Array<string> | One or more paths to the audio asset. Multiple paths can be passed as fallbacks in case the user's browser doesn't support the one or more of the formats |         |
| replace | boolean                 | If set to true, this audio asset will replace an existing audio asset with the same key                                                                   | false   |

Using a single source:

```js
ox.audio('podcast', './recordings/2019-01-01.m4a');
```

Using fallback sources:

```js
ox.audio('podcast', ['./recordings/2019-01-01.m4a', './recordings/2019-01-01.wav']);
```

### **audioBuffer**

Adds an audio asset to the load queue to load as an AudioBuffer.

| param   | type                    | description                                                                                                                                                 | default |
|---------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| key     | string                  | A unique key which will be used to reference this audio buffer by when using it                                                                             |         |
| src     | string                  | The path to the audio asset.                                                                                                                                |         |
| replace | boolean                 | If set to true, this audio buffer will replace an existing audio buffer with the same key                                                                   | false   |

```js
ox.audioBuffer('podcast', './recordings/2019-01-01.m4a');
```

### **video**

Adds a video asset to the load queue.

| param   | type                    | description                                                                                                                                               | default |
|---------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| key     | string                  | A unique key which will be used to reference this video asset by when using it                                                                            |         |
| srcs    | string or Array<string> | One or more paths to the video asset. Multiple paths can be passed as fallbacks in case the user's browser doesn't support the one or more of the formats |         |
| replace | boolean                 | If set to true, this video asset will replace an existing video asset with the same key                                                                   | false   |

Using a single source:

```js
ox.video('stream', './recordings/stardew-valley-1.m4a');
```

Using fallback sources:

```js
ox.video('stream', ['./recordings/stardew-valley-1.mp4', './recordings/stardew-valley-1.webm']);
```

### **text**

Adds a text asset to the load queue.

| param   | type    | description                                                                             | default |
|---------|---------|-----------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this text asset by when using it           |         |
| src     | string  | The path to the text asset.                                                             |         |
| replace | boolean | If set to true, this text asset will replace an existing text asset with the same key   | false   |

```js
ox.text('bio', './documents/biography.txt');
```

### **binary**

Adds a binary asset to the load queue. Any file provided to this will be turned into a binary format.

| param   | type    | description                                                                                 | default |
|---------|---------|---------------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this binary asset by when using it             |         |
| src     | string  | The path to the binary asset.                                                               |         |
| replace | boolean | If set to true, this binary asset will replace an existing binary asset with the same key   | false   |

```js
ox.binary('bio', './documents/biography.txt');
```

### **json**

Adds a JSON asset to the load queue. The JSON will be stored as a parsed object.

| param   | type    | description                                                                                 | default |
|---------|---------|---------------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this JSON asset by when using it               |         |
| src     | string  | The path to the JSON asset.                                                                 |         |
| replace | boolean | If set to true, this JSON asset will replace an existing JSON asset with the same key       | false   |

```js
ox.json('movies', './documents/favorite-movies.json');
```

### **arrayBuffer**

Adds an asset to load as an array buffer.

| param   | type    | description                                                                                     | default |
|---------|---------|-------------------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this array buffer by when using it                 |         |
| src     | string  | The path to the asset.                                                                          |         |
| replace | boolean | If set to true, this array buffer will replace an existing array buffer with the same key       | false   |

```js
ox.arrayBuffer('podcast', './podcasts/podcast-new.mp4');
```

## **Step 2: Start Loading**

After defining all of the assets that need to be loaded, you have to tell MuskOx that you're ready for it to actually load all of
the assets by calling the `start` method.

### **start**

Starts the loading process and emits the `load-complete` event when finished.

```js
ox.start();
```

## **Step 3: Using Loaded Assets**

Since loading assets is an asynchronous action, you must wait until the `load-complete` event is emitted to ensure that all of the assets
are loaded and ready to use.

Here is an example of how to listen to the `load-complete` event:

```js
const complete = () => {

  // You can start using assets here.
  const star = ox.fetch.image('star');

  document.body.appendChild(star);

};

ox.onComplete.add(complete);
```

Retrieving assets from the cache is made possible through the `fetch` methods. By using the method that corresponds to the asset type and
the asset key, you can easily retrieve any saved asset.

### **image**

Get a saved image asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the image asset when loading it |         |

```js
const star = ox.fetch.image('star');
```

### **audio**

Get a saved audio asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the audio asset when loading it |         |

```js
const podcast = ox.fetch.audio('podcast');
```

### **audioBuffer**

Get a saved audio buffer from the cache.

| param | type   | description                                          | default |
|-------|--------|------------------------------------------------------|---------|
| key   | string | The key assigned to the audio buffer when loading it |         |

```js
const podcast = ox.fetch.audioBuffer('podcast');
```


### **video**

Get a saved video asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the video asset when loading it |         |

```js
const stream = ox.fetch.video('stream');
```

### **text**

Get a saved text asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the text asset when loading it  |         |

```js
const bio = ox.fetch.text('bio');
```

### **binary**

Get a saved binary asset from the cache.

| param | type   | description                                          | default |
|-------|--------|------------------------------------------------------|---------|
| key   | string | The key assigned to the binary asset when loading it |         |

```js
const bio = ox.fetch.binary('bio');
```

### **json**

Get a saved JSON asset from the cache.

| param | type   | description                                        | default |
|-------|--------|----------------------------------------------------|---------|
| key   | string | The key assigned to the JSON asset when loading it |         |

```js
const movies = ox.fetch.json('movies');
```

### **arrayBuffer**

Get a saved arrayBuffer from the cache.

| param | type   | description                                          | default |
|-------|--------|------------------------------------------------------|---------|
| key   | string | The key assigned to the array buffer when loading it |         |

```js
const podcast = ox.fetch.arrayBuffer('podcast');
```

## Properties

There are also a few properties that are available:

### **assetsLoaded**

Gets the number of assets that have been loaded so far.

### **assetsToLoad**

Gets the number of assets that have yet to be loaded.

### **progress**

Gets the current loading progress as a percentage.

## License

MIT
