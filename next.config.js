const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['utilities'] = path.join(__dirname, 'utilities');
    return config;
  },
};
