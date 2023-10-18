module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react',
    'react-native',
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'promise',
    'unused-imports',
  ],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'max-len': ['error', 200],
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'import/no-named-as-default-member': 2,
    'import/order': 0,
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': 2,
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/named': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default': 0,
    'import/no-unused-modules': 0,
    'import/no-deprecated': 0,
    '@typescript-eslint/indent': 0,
    'react-hooks/rules-of-hooks': 2,
    camelcase: 0,
    'jest/no-identical-title': 0,
    'jest/valid-expect': 0,
    'prefer-destructuring': 2,
    'no-nested-ternary': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-return-assign': 'off',
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    'default-case': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'array-callback-return': 'off',
    'no-unsafe-optional-chaining': 'off',
    'import/no-cycle': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'no-promise-executor-return': 'off',
    'react/destructuring-assignment': 'off',
    'no-await-in-loop': 'off',
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 2,
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
  },
};
