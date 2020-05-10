module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'node/no-unsupported-features/es-syntax': 'off',
    'comma-dangle': ['warn', 'only-multiline']
  }
}