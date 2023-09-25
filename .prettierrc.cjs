module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.tsx',
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};
