//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/global.css',
  plugins: ['prettier-plugin-tailwindcss'],
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  useTabs: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
}

export default config
