/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // This is how you turn off semicolons, by the way
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
  ],
}
