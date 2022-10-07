module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/display-name': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@stitches/react',
            importNames: ['styled'],
            allowTypeImports: true,
            message:
              'Use the `styled` function exported from the `stitches.config.ts` file instead, in order to correctly extract styles in consumers of the library.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*/*.stories.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    }
  ]
};
