module.exports = {
  bracketSpacing: true,
  semi: false,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^content/(.*)$',
    '^lib/(.*)$',
    '^hooks/(.*)$',
    '^pages/(.*)$',
    '^styles/(.*)$',
    '^utils/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
