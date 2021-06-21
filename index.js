/**
 * @fileoverview LZW compressor module from Glize library.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://en.wikipedia.org/wiki/Lempel–Ziv–Welch
 * @see https://github.com/Datamart/Glize
 * @module lzw-compressor
 */


/**
 * Compress data string using LZW lossless data compression algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 * @method
 * @example
 * const result = compress(
 *   'Any string of any length. Any string of any length. Any string of any length.');
 * console.log(result);
 * //> Any string of aā leĈth. ĀĂĄĆĈĊČĎĂđēĕėďĚćĉċčďġgĔ.
 */
export const compress = (str) => {
  const dict = {};
  const data = str.split('');
  const out = [];
  let code = 256;
  let phrase = data.shift();

  while (data.length) {
    const next = data.shift();
    if (null != dict[phrase + next]) {
      phrase += next;
    } else {
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      dict[phrase + next] = code++;
      phrase = next;
    }
  }
  out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
  for (let i = 0; i < out.length; i++) {
    out[i] = String.fromCharCode(/** @type {number} */ (out[i]));
  }

  return out.join('');
};

/**
 * Decompress data string compressed with the LZW algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 * @method
 * @example
 * const result = decompress('Any string of aā leĈth. ĀĂĄĆĈĊČĎĂđēĕėďĚćĉċčďġgĔ.');
 * console.log(result);
 * //> Any string of any length. Any string of any length. Any string of any length.
 */
export const decompress = (str) => {
  const dict = {};
  const data = str.split('');
  const out = [data.shift()];
  let code = 256;
  let chr = out[0];
  let tmp = chr;

  for (let i = 0; i < data.length; i++) {
    const next = data[i].charCodeAt(0);
    const phrase = next < 256 ? 
        data[i] : 
        (dict[next] ? dict[next] : (tmp + chr));
    out.push(phrase);
    chr = phrase.charAt(0);
    dict[code++] = tmp + chr;
    tmp = phrase;
  }

  return out.join('');
};
