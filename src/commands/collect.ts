import { logger } from '../utils/logger';

interface CollectOptions {
  period: string;
  source?: string;
}

export async function collectData(options: CollectOptions): Promise<void> {
  logger.info(`Collecting data for period: ${options.period}`);
  if (options.source) {
    logger.info(`Source specified: ${options.source}`);
  }
  // More implementation to come later
}