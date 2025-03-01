import { exportData } from './export';

describe('Export Command', () => {
  test('exportData function exists', async () => {
    expect(exportData).toBeDefined();
    expect(typeof exportData).toBe('function');
    
    // Just make sure it doesn't throw an error
    await expect(exportData({ days: '30', type: 'all' })).resolves.not.toThrow();
  });
});