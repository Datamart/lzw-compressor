# LZW Compressor [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=LZW%20compressor%20module%20from%20Glize%20library.&url=https://glize.js.org&via=GitHub&hashtags=Glize,JavaScript,ECMAScript,ES6)
[![Build Status](https://github.com/Datamart/lzw-compressor/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Datamart/lzw-compressor/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/lzw-compressor.svg?style=flat)](https://npmjs.org/package/lzw-compressor) [![Website](https://img.shields.io/website-up-down-green-red/https/glize.js.org.svg?style=flat)](https://glize.js.org)

LZW compressor module from Glize library.

## Usage

```bash
npm install lzw-compressor --save
```

```js
import { compress, decompress } from 'lzw-compressor';

/**
 * Compress data string using LZW lossless data compression algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
const encoded = compress(input);

/**
 * Decompress data string compressed with the LZW algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
const decoded = decompress(encoded);
```

For more information please visit [Glize project page](https://glize.js.org).
