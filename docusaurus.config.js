// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// 是否部署在gitPage上
const useGpage = process.env.BUILD_ENV === 'gitPage';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "丁少华的博客",
  url: "https://huashaoding.com", // seo
  baseUrl: useGpage?"/dsh-book/":'/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // github pages自动部署用到.
  projectName: "docusaurus", // github pages自动部署用到.
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  presets: [
    [
      "classic",
      // @ts-ignore
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve("./sidebars.js"),
          path: "docs/redux",
          routeBasePath: "redux",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    ["docusaurus-plugin-sass", {}],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "life-module",
        path: "docs/life",
        routeBasePath: "life",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "fe-module",
        path: "docs/fe",
        routeBasePath: "fe",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "babel-module",
        path: "docs/babel",
        routeBasePath: "babel",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "webpack-module",
        path: "docs/webpack",
        routeBasePath: "webpack",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "丁少华",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            docsPluginId: "fe-module",
            type: "doc",
            docId: "第1章_前言",
            label: "前端学习",
          },
          {
            docsPluginId: "babel-module",
            type: "doc",
            docId: "第1章_前言",
            label: "Babel",
          },
          {
            docsPluginId: "webpack-module",
            type: "doc",
            docId: "第1章_前言",
            label: "Webpack",
          },
          {
            type: "doc",
            docId: "1、初识",
            label: "Redux",
          },
          {
            docsPluginId: "life-module",
            type: "doc",
            docId: "认识我",
            label: "关于我",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-error",
            line: "error-next",
            block: { start: "error-start", end: "error-end" },
          },
          {
            className: "code-sucess",
            line: "sucess-next",
            block: { start: "sucess-start", end: "sucess-end" },
          },
          {
            className: "code-warn",
            line: "warn-next",
            block: { start: "warn-start", end: "warn-end" },
          },
        ],
      },
    }),
};

module.exports = config;
