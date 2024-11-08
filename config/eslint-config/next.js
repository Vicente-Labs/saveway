/** @type { import('eslint').Linter.Config } */

module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort', 'react-hooks'],
  rules: {
    'simple-import-sort/imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
