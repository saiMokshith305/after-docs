module.exports = {
  title: 'Test Docs',
  url: 'https://saiMokshith305.github.io',
  baseUrl: '/another-internal-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
