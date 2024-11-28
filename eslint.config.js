import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
}, {
  rules: {
    'ts/consistent-type-definitions': 'off',
    'react-refresh/only-export-components': 'off',
    'react/prefer-destructuring-assignment': 'off',
  },
})
