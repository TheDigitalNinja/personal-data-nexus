import { Command } from 'commander';
import dotenv from 'dotenv';
import { collectData } from './commands/collect';
import { generateSummary } from './commands/summary';
import { exportData } from './commands/export';
import { logger } from './utils/logger';

// Configure environment variables
dotenv.config();

// Create the CLI program
const program = new Command();

program
  .name('personal-data-nexus')
  .description('Personal data aggregation system for LLM consumption')
  .version('1.0.0');

// Define the 'collect' command
program
  .command('collect')
  .description('Collect data from various sources')
  .option('--period <period>', 'Time period to collect (this-week, last-week, this-month, etc.)', 'this-week')
  .option('--source <source>', 'Specific source to collect from')
  .action(collectData);

// Define the 'summary' command
program
  .command('summary')
  .description('Generate summaries from collected data')
  .option('--period <period>', 'Time period to summarize', 'last-week')
  .option('--format <format>', 'Output format', 'default')
  .action(generateSummary);

// Define the 'export' command
program
  .command('export')
  .description('Create LLM-ready exports')
  .option('--days <number>', 'Number of days to include', '30')
  .option('--output <filename>', 'Output filename')
  .option('--type <type>', 'Export type (health, finance, all)', 'all')
  .action(exportData);

// Handle errors
process.on('unhandledRejection', (error) => {
  logger.error('Unhandled rejection:', error);
  process.exit(1);
});

// Parse command line arguments
program.parse();

// If no args provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}