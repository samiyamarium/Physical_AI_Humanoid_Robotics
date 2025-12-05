// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A complete book on Physical AI, humanoid systems, perception, kinematics, and intelligent machines.',
  url: 'https://samiyamarium.vercel.app', // your Vercel domain
  baseUrl: '/', // root path, required for Vercel
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'samiyamarium',
  projectName: 'physical_ai_humanoid_robotics',

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/samiyamarium/Physical_AI_Humanoid_Robotics/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Book Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'front_matter/abstract',
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
            title: '',
            items: [
              { label: 'Docs', to: '/docs/front_matter/abstract' },
              { label: 'Contents', to: '/docs/front_matter/abstract' },
              { label: 'Community', to: '/docs/front_matter/abstract' }, // optional, replace if needed
              { label: 'GitHub', href: 'https://github.com/samiyamarium/Physical_AI_Humanoid_Robotics' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Samiya Marium. All rights reserved.`,
      },
    }),
};

module.exports = config;
