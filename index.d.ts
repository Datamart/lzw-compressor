// typescript 

/**
 * Compress data string using LZW lossless data compression algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
declare function compress(str: string): string;

// Exposed public method.
export default compress;

/**
 * Decompress data string compressed with the LZW algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
declare function decompress(str: string): string;

// Exposed public method.
export default decompress;
