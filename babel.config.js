module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg', '.png'],
        alias: {
          '~': './src',
          '@modules': './src/modules',
          '@assets': './src/assets',
          '@uiCore': './src/uiCore',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@redux': './src/redux',
          // '@models': './src/models',
        },
      },
    ],
    // [
    //   'module:react-native-dotenv',
    //   {
    //     moduleName: '@env',
    //     path: '.env',
    //     blacklist: null,
    //     whitelist: null,
    //     safe: false,
    //     allowUndefined: true,
    //   },
    // ],
    // ['react-native-reanimated/plugin'],
  ],
};
