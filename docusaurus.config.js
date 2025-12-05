// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A complete book on Physical AI, humanoid systems, perception, kinematics, and intelligent machines.',
  url: 'https://samiyamarium.vercel.app', // Replace with your Vercel domain if different
  baseUrl: '/', // Must be a path, not a full URL
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'samiyamarium', // GitHub org/user name
  projectName: 'Physical_AI_Humanoid_Robotics', // GitHub repo name

  // GitHub pages deployment config (not needed for Vercel, but safe to keep)
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/samiyamarium/Physical_AI_Humanoid_Robotics/edit/main/',
        },
        blog: false, // No blog needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Book Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Abstract_Acknowlegrment_Synopsis_Table_of_contents/Abstract',
            position: 'left',
            label: 'Contents',
          },
          {
            href: 'https://github.com/samiyamarium/Physical_AI_Humanoid_Robotics',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contents',
                to: '/docs/Abstract_Acknowlegrment_Synopsis_Table_of_contents/Abstract',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/samiyamarium/Physical_AI_Humanoid_Robotics',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Samiya Marium. All rights reserved.`,
      },
    }),
};

module.exports = config;
