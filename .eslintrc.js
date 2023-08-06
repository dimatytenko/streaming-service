module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
