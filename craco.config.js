const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#F99D3A',
              'border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
