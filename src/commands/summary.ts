import { logger } from '../utils/logger';

interface SummaryOptions {
  period: string;
  format: string;
}

export async function generateSummary(options: SummaryOptions): Promise<void> {
  logger.info(`Generating summary for period: ${options.period}`);
  logger.info(`Format: ${options.format}`);
  // More implementation to come later
}