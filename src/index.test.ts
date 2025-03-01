import { Command } from 'commander';

describe('CLI Program', () => {
  test('commander package is properly imported', () => {
    const program = new Command();
    expect(program).toBeDefined();
    expect(typeof program.parse).toBe('function');
  });
});