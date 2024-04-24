import { describe, expect, it } from 'vitest';
import { sleep } from '../../sleep';

describe('sleep', () => {
  it('should resolve after the specified number of milliseconds', async () => {
    const milliseconds = 1000;
    const start = Date.now();
    await sleep(milliseconds);
    const end = Date.now();
    const elapsed = end - start;
    expect(elapsed).toBeGreaterThanOrEqual(milliseconds);
  });

  it('should resolve immediately when milliseconds is 0', async () => {
    const milliseconds = 0;
    const start = Date.now();
    await sleep(milliseconds);
    const end = Date.now();
    const elapsed = end - start;
    expect(elapsed).toBeLessThan(1);
  });

  it('should resolve after a small delay', async () => {
    const milliseconds = 10;
    const start = Date.now();
    await sleep(milliseconds);
    const end = Date.now();
    const elapsed = end - start;
    expect(elapsed).toBeGreaterThanOrEqual(milliseconds);
  });
});
