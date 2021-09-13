const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1f447e',
              '@secondary-color': '#db9b3a',
              '@accent-color': '#3987cd',
              '@warning-color': '#ff6e57 ',
              '@light-green-color': '#62b999',
              '@dark-green-color': '#2b7068',
              'border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
