const path = require('path');

module.exports = {
  entry: 'components/custom.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
