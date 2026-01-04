
# kn-lit-examples

This project is a collection of practical examples using custom web components with Lit and a modular JavaScript structure.

## Project Structure

- **src/**: Main source code.
  - **index.html**: Main HTML file.
  - **index.js**: Application entry point.
  - **routes.js**: Routing/navigation definitions.
  - **theme.js**: Global themes and styles.
  - **components/**: Reusable components (e.g., `main-bar.js`, `main-cont.js`).
  - **examples/**: Lit usage examples (`life-cycle-exam.js`, `list-exam.js`, `ref-exam.js`, `task-exam.js`).
  - **style/**: Global CSS stylesheets.
- **webpack.config.cjs**: Webpack configuration for bundling the project.
- **eslint.config.js**: ESLint configuration for code quality.
- **package.json**: Project dependencies and scripts.

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd kn-lit-examples
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the project in development mode:

```bash
npm run start
```

Open your browser at `http://localhost:8080` (or the configured port) to view the app.

## Useful Scripts

- `npm run start`: Starts the development server.
- `npm run build`: Builds the production version.
- `npm run lint`: Runs ESLint to check code quality.

## Technologies Used

- [Lit](https://lit.dev/): For building web components.
- Webpack: Module bundler.
- ESLint: JavaScript linter.

## Dependencies

### Runtime dependencies

- **lit**: Library for building fast, lightweight web components.
- **@lit-labs/router**: Experimental router for Lit-based applications.
- **@lit/task**: Task management utilities for Lit components.
- **bulma**: Modern CSS framework based on Flexbox.

### Development dependencies

- **css-loader**: Webpack loader to handle CSS imports.
- **style-loader**: Injects CSS into the DOM via Webpack.
- **webpack**: Bundles JavaScript files for usage in a browser.
- **webpack-cli**: Command line interface for Webpack.
- **webpack-dev-server**: Development server for Webpack projects.
- **html-webpack-plugin**: Simplifies creation of HTML files to serve Webpack bundles.
- **eslint**: Pluggable JavaScript linter.
- **@eslint/js**: ESLint's core rules as a sharable config.
- **@eslint/json**: ESLint plugin for JSON files.
- **globals**: Provides a list of global variables as used by ESLint.

## License

This project is licensed under the MIT License.
