/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
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
  plugins: [
    new HtmlWebpackPlugin({
      title:
        'ZhuPiTe, 朱皮特, an unofficial clone of the official RingCentral App',
    }),
  ],
};

export default config;
