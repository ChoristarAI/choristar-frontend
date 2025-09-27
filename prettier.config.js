//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/global.css',
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  useTabs: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  importOrder: ['<THIRD_PARTY_MODULES>', '^\\w', '^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}

export default config
