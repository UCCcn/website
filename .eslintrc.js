module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    React: 'readonly'
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
