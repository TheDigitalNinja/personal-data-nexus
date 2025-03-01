import { generateSummary } from './summary';

describe('Summary Command', () => {
  test('generateSummary function exists', async () => {
    expect(generateSummary).toBeDefined();
    expect(typeof generateSummary).toBe('function');
    
    // Just make sure it doesn't throw an error
    await expect(generateSummary({ period: 'test', format: 'default' })).resolves.not.toThrow();
  });
});