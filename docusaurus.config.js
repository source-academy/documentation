// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Source Academy Documentation",
  tagline: "Documentation for Source Academy",
  favicon: "img/sourcepower.ico",

  // Set the production url of your site here
  url: "https://docs2.sourceacademy.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "source-academy", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/source-academy/documentation/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/source-academy/documentation/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: undefined,
      navbar: {
        title: "Source Academy Documentation",
        logo: {
          alt: "Source Academy Logo",
          src: "img/sourcepower.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Docs",
          },
          {
            to: "/about",
            position: "left",
            label: "About",
          },
          {
            href: "https://github.com/source-academy",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Main Docs",
            items: [
              {
                label: "General",
                href: "https://about.sourceacademy.org",
              },
              {
                label: "Modules",
                href: "https://source-academy.github.io/modules/documentation/",
              },
              {
                label: "js-slang",
                href: "https://docs.sourceacademy.org",
              },
            ],
          },
          {
            title: "Other Docs",
            items: [
              // Taken from https://github.com/source-academy/js-slang/blob/master/scripts/jsdoc.sh
              "Auxiliary",
              "Misc",
              "Math",
              "Lists",
              "Streams",
              "Arrays",
              "Pairmutators",
              "Concurrency",
              "Non-det",
              "MCE",
              "Runes",
              "Curves",
              "Sounds",
              "Binarytrees",
              "PixNFlix",
              "Game",
              "EV3",
              ["External Libraries", "External libraries"],
            ].map((item) => ({
              label: Array.isArray(item) ? item[0] : item,
              href: `https://docs.sourceacademy.org/${
                Array.isArray(item) ? item[1] : item.toUpperCase()
              }/`,
            })),
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/source-academy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Source Academy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
