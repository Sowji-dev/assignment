module.exports = {
    env: {
      browser: true, // Enable browser environment
      node: true, // Enable Node.js environment
      es2020: true,
      "jest": true // Enable ECMAScript 2020 features (including Set)
    },
    extends: [
      'eslint:recommended', // Use ESLint's recommended rules
      'plugin:react/recommended', // Use React's recommended rules
    ],
    parserOptions: {
      ecmaVersion: 2020, // Ensure ECMAScript version is set to 2020 or higher
      sourceType: 'module', // Use module system (ES modules)
    },
    rules: {
      // Custom rules can be added or modified here
      'react/function-component-definition': [
        'error', // Enforce function declarations for named components
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function', // Use arrow functions for unnamed components
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  };
  