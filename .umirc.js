import path from "path";

const config = {
  treeShaking: true,
  ignoreMomentLocale: true,
  cssLoaderOptions:{
    camelCase: true
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        title: 'umi-debug',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [/components\//],
        },
      },
    ],
    ['umi-plugin-datahub', {
      store: path.join(__dirname, 'data'),
    }]
  ],
  hash: true,
  
};
export default config;

