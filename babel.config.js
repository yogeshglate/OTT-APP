module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          assets: './app/assets',
          components: './app/components/index.ts',
          context: './app/context/index.ts',
          hooks: './app/hooks/index.ts',
          navigation: './app/navigation/index.ts',
          screens: './app/screens/index.ts',
          services: './app/services/index.ts',
          styles: './app/styles/index.ts',
          types: './app/types/index.ts',
          utils: './app/utils/index.ts',
          constant: './app/constants/index.ts',
          app: './app/App.tsx',
        },
      },
    ],
  ],
};
