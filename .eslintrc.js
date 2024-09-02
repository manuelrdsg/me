module.exports = {
  extends: ['prettier', 'next/core-web-vitals'],
  root: true,
  rules: {
    semi: ['error', 'never'],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-curly-brace-presence': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
}
