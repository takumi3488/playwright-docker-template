/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
module.exports = {
  extends: ['prettier', 'plugin:import/recommended'],
  plugins: ['unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '**/**.css',
            group: 'index',
            position: 'before',
          },
        ],
      },
    ],
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    quotes: ['error', 'single'],
  },
  parserOptions: {
    ecmaVersion: 2023,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
}
