import { logger } from '../utils/logger';

interface ExportOptions {
  days: string;
  output?: string;
  type: string;
}

export async function exportData(options: ExportOptions): Promise<void> {
  logger.info(`Creating export for last ${options.days} days`);
  logger.info(`Export type: ${options.type}`);
  if (options.output) {
    logger.info(`Output filename: ${options.output}`);
  }
  // More implementation to come later
}