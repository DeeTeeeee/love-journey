module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@constants': './src/constants/index.ts',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils/index.ts',
          '@apis': './src/apis',
          '@hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
}
