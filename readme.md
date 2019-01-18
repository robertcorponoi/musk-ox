<p align="center">
  <img width="250" height="250" src="./muskox.png">
</p>

<h1 align="center">MuskOx</h1>

<p align="center">MuskOx is an easy to use, event-driven, and efficient asset preloader for the browser.<p>

<div align="center">
	<img src="https://img.shields.io/npm/v/musk-ox.svg?style=flat-square">
	<img src="https://img.shields.io/david/robertcorponoi/musk-ox.svg?style=flat-square">
	<img src="https://img.shields.io/gitter/room/robertcorponoi/musk-ox.svg?style=flat-square">
</div>

## **Installation**

MuskOx is meant to be used as an ES6 moudle.

To install MuskOx through npm, simply use the following command:

```
$ npm install --save musk-ox
```

Otherwise you can download the muskox.js file and reference that.

## **Usage**

To use MuskOx, simply import the module:

```js
import MuskOx from './path/to/muskox.js';
```

## **Initialization**

After importing MuskOx, a new instance can be initialized like so:

```js
const ox = new MuskOx();
```

There is also currently one initialization option that allows you to specify a global cross origin policy for loading images from an external source. This is useful if you have a lot of assets coming from a single external source. If no value is specified, then it is left null and not used.

| param       | type   | description                                                      | default |
|-------------|--------|------------------------------------------------------------------|---------|
| crossOrigin | string | A cross origin policy to set on all assets that use cross origin | null    |

## **Usage**

The MuskOx asset loading system is split into three steps: defining assets to load, initiating the load, and retrieving loaded assets.

## **Step 1: Defining Assets to Load**

The first step in using MuskOx involves defining the assets that need to be loaded. As of current, MuskOx supports loading images, audio, video, text, binary, and JSON assets. Assets defined during the loading phase are set to a queue that will process when the `start` method is called.

Using the instance created above, we can use the loading functionality by accessing `ox.load` and then using the appropriate method for loading the desired asset.

### **image**

Adds an image asset to the load queue.

| param   | type    | description                                                                             | default |
|---------|---------|-----------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this image asset by when using it          |         |
| src     | string  | The path to the image asset.                                                            |         |
| replace | boolean | If set to true, this image asset will replace an existing image asset with the same key | false   |

```js
ox.load.image('star', './images/star.png');
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
ox.load.audio('podcast', './recordings/2019-01-01.m4a');
```

Using fallback sources:

```js
ox.load.audio('podcast', ['./recordings/2019-01-01.m4a', './recordings/2019-01-01.wav']);
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
ox.load.video('stream', './recordings/stardew-valley-1.m4a');
```

Using fallback sources:

```js
ox.load.video('stream', ['./recordings/stardew-valley-1.mp4', './recordings/stardew-valley-1.webm']);
```

### **text**

Adds a text asset to the load queue.

| param   | type    | description                                                                             | default |
|---------|---------|-----------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this text asset by when using it           |         |
| src     | string  | The path to the text asset.                                                             |         |
| replace | boolean | If set to true, this text asset will replace an existing text asset with the same key   | false   |

```js
ox.load.text('bio', './documents/biography.txt');
```

### **binary**

Adds a binary asset to the load queue. Any file provided to this will be turned into a binary format.

| param   | type    | description                                                                                 | default |
|---------|---------|---------------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this binary asset by when using it             |         |
| src     | string  | The path to the binary asset.                                                               |         |
| replace | boolean | If set to true, this binary asset will replace an existing binary asset with the same key   | false   |

```js
ox.load.binary('bio', './documents/biography.txt');
```

### **json**

Adds a JSON asset to the load queue. The JSON will be stored as a parsed object.

| param   | type    | description                                                                                 | default |
|---------|---------|---------------------------------------------------------------------------------------------|---------|
| key     | string  | A unique key which will be used to reference this JSON asset by when using it               |         |
| src     | string  | The path to the JSON asset.                                                                 |         |
| replace | boolean | If set to true, this JSON asset will replace an existing JSON asset with the same key       | false   |

```js
ox.load.json('movies', './documents/favorite-movies.json');
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
ox.on('load-complete', () => {

	// You can start using assets here.
	const star = ox.get.image('star');

	document.body.appendChild(star);

});
```

Retrieving assets from the cache is made possible through the `get` methods. By using the method that corresponds to the asset type and
the asset key, you can easily retrieve any saved asset.

### **image**

Get a saved image asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the image asset when loading it |         |

```js
const star = ox.get.image('star');
```

### **audio**

Get a saved audio asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the audio asset when loading it |         |

```js
const podcast = ox.get.audio('podcast');
```

### **video**

Get a saved video asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the video asset when loading it |         |

```js
const stream = ox.get.video('stream');
```

### **text**

Get a saved text asset from the cache.

| param | type   | description                                         | default |
|-------|--------|-----------------------------------------------------|---------|
| key   | string | The key assigned to the text asset when loading it  |         |

```js
const bio = ox.get.text('bio');
```

### **binary**

Get a saved binary asset from the cache.

| param | type   | description                                          | default |
|-------|--------|------------------------------------------------------|---------|
| key   | string | The key assigned to the binary asset when loading it |         |

```js
const bio = ox.get.binary('bio');
```

### **json**

Get a saved JSON asset from the cache.

| param | type   | description                                        | default |
|-------|--------|----------------------------------------------------|---------|
| key   | string | The key assigned to the JSON asset when loading it |         |

```js
const movies = ox.get.json('movies');
```