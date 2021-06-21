// typescript 

/**
 * Compress data string using LZW lossless data compression algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
export declare function compress(str: string): string;

/**
 * Decompress data string compressed with the LZW algorithm.
 * @param {string} str Data to compress.
 * @return {string} Returns compressed data.
 */
export declare function decompress(str: string): string;
