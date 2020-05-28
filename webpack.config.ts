const config = {
  mode: 'development',
  entry: ['./src/index.ts'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};

export default config;
