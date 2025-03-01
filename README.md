# Personal Data Nexus

A personal data aggregation system that collects, processes, and prepares data from various sources for LLM consumption. This tool helps you aggregate your personal data from services like Fitbit, Rubber Bands, Rocket Money, and more, organizing it into LLM-friendly formats.

## Features

- Collect personal data from multiple sources
- Organize data into daily, weekly, monthly, and quarterly summaries
- Generate LLM-ready markdown files for easy upload to Claude and other LLMs
- Command-line interface for flexible data collection and management
- Secure credential storage for service authentication

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/TheDigitalNinja/personal-data-nexus.git
   cd personal-data-nexus
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your credentials (see `.env.example`).

4. Build the project:
   ```bash
   npm run build
   ```

## Usage

### Basic Commands

- **Collect data from all sources**:
  ```bash
  npm run collect
  ```
  Use this command to gather fresh data from all configured sources. Typically run weekly (e.g., on Sundays) to maintain up-to-date personal data. This command pulls information from Fitbit, financial exports, workout tracking, and other sources, storing it in the raw data directory.

- **Generate summaries**:
  ```bash
  npm run summary -- --period last-week
  ```
  After collecting data, run this command to process raw data into meaningful summaries. This organizes information into patterns, trends, and insights. The summaries help you understand your progress over time and prepare the data for LLM consumption.

- **Create LLM-ready exports**:
  ```bash
  npm run export -- --days 30
  ```
  This command creates consolidated markdown files specifically formatted for uploading to LLMs like Claude. Run this before you want to have a conversation with an LLM about your personal data. The exported files are optimized for context window size and organized to maximize useful insights.

### Command Options

#### Collect Command

```bash
npm run collect -- [options]
```

Options:
- `--period <period>`: Time period to collect (this-week, last-week, this-month, etc.)
- `--source <source>`: Specific source to collect from (fitbit, financial, etc.)

#### Summary Command

```bash
npm run summary -- [options]
```

Options:
- `--period <period>`: Time period to summarize
- `--format <format>`: Output format (default, llm)

#### Export Command

```bash
npm run export -- [options]
```

Options:
- `--days <number>`: Number of days to include in export
- `--output <filename>`: Output filename
- `--type <type>`: Export type (health, finance, all)

### Development

- Start the development server:
  ```bash
  npm run dev
  ```

- Watch for changes and auto-restart:
  ```bash
  npm run watch
  ```

- Run tests:
  ```bash
  npm test
  ```

- Lint code:
  ```bash
  npm run lint
  ```

## Data Sources

The system can collect data from:

- **Fitbit**: Sleep, activity, food logs
- **Rubber Bands**: Workout data from Google Drive exports
- **Financial**: Transactions from Rocket Money (CSV import)
- **Google Calendar**: Events and schedule
- **Daylio**: Mood tracking

## Output Format

Data is stored in a hierarchical structure:

```
/data
  /daily              # Daily detailed records
  /weekly             # Weekly summaries
  /monthly            # Monthly summaries
  /quarterly          # Quarterly reviews
  /raw                # Raw data from sources
  /llm-ready          # Files optimized for LLM upload
    last-30-days.md
    last-quarter.md
```

## Project Structure

```
personal-data-nexus/
├── src/              # Source code
│   ├── collectors/   # Data source integrations
│   ├── processors/   # Data processing logic
│   ├── storage/      # File management
│   └── templates/    # Output templates
├── dist/             # Compiled JavaScript
├── data/             # Generated data (gitignored)
└── tests/            # Test files
```

## License

ISC

## Contributing

This is a personal project but suggestions and improvements are welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request