import * as assert from 'assert';
import { compress, decompress } from 'lzw-compressor';

const runTests = () => {
  const input = 'TOBEORNOTTOBEORTOBEORNOT#';
  const encoded = compress(input);
  const decoded = decompress(encoded);

  assert.ok(input.length > encoded.length);
  assert.strictEqual(input.length, decoded.length);
  assert.strictEqual(input, decoded);
};

runTests();
