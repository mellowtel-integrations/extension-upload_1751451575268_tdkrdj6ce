const path = require('path');
module.exports = {
  entry: { background: './src/background.js', 'mellowtel-content': './src/mellowtel-content.js' },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js', clean: true },
  resolve: { extensions: ['.js'] },
  optimization: { minimize: false }
};