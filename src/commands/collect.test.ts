import { collectData } from './collect';

describe('Collect Command', () => {
  test('collectData function exists', async () => {
    expect(collectData).toBeDefined();
    expect(typeof collectData).toBe('function');
    
    // Just make sure it doesn't throw an error
    await expect(collectData({ period: 'test' })).resolves.not.toThrow();
  });
});