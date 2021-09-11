const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1A3865',
              '@secondary-color': '#FFE94F',
              'border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
