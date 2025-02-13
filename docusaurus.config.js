module.exports = {
  title: 'Test Docs',
  url: 'https://saiMokshith305.github.io',
  baseUrl: '/after-docs/',
  onBrokenLinks: 'throw',
  organizationName: 'saiMokshith305', // GitHub org/user name
    projectName: 'after-docs',
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
