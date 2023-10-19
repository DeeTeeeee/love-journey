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
          '@containers': './src/containers',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
}
