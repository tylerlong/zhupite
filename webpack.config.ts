/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:
        'ZhuPiTe, 朱皮特, an unofficial clone of the official RingCentral App',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
};

export default config;
