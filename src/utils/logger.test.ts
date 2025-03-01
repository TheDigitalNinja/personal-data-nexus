import { logger } from './logger';

describe('Logger', () => {
  test('logger is properly configured', () => {
    expect(logger).toBeDefined();
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.error).toBe('function');
  });
});