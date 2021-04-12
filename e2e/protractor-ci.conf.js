const { config } = require('./protractor.conf');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  ...config,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['no-sandbox', 'headless', 'disable-gpu'],
    },
  },
};
