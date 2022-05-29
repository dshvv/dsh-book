// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '丁少华的个人网站',
  tagline: '这个网站很酷啊，赶紧收藏吧！',
  url: 'https://your-docusaurus-test-site.com',
  // baseUrl: '/',
  baseUrl: '/dsh-book/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
        title: '丁少华的个人网站',
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
