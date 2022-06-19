// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '丁少华',
  url: 'https://dingshaohua.com', // seo
  // baseUrl: '/',
  baseUrl: '/dsh-book/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // github pages自动部署用到.
  projectName: 'docusaurus', // github pages自动部署用到.
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs/redux',
          routeBasePath: 'redux',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    ['docusaurus-plugin-sass',{}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'life',
        path: 'docs/life',
        routeBasePath: 'life',
        sidebarPath: require.resolve('./sidebars.js')
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '丁少华',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '1、初识',
            label: 'redux',
          },
          {
            docsPluginId:'life',
            type: 'doc',
            docId: '认识我',
            label: '碎碎念',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
