
const jsdoc = require('eslint-plugin-jsdoc');

module.exports = [
  {
    plugins: {
      jsdoc,
    },
    rules: {
      ...jsdoc.configs.recommended.rules,
      // Add other JSDoc specific rules here if needed
    },
    languageOptions: {
      ecmaVersion: 2021,
    },
  },
];
