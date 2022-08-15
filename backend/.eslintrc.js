module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    NodeJS: true
  },
  overrides: [
    {
      files: ['src/*.tsx', 'src/*.ts'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'typescript-sort-keys',
    'sort-keys-fix'
  ],

  rules: {
    curly: ['warn', 'multi'],
    'max-len': ['warn', {
      code: 115,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true
    }],
    semi: ['error'],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error'
  }
}
