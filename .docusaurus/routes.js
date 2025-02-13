import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/another-internal-docs/__docusaurus/debug',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug', '2fe'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/config',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/config', 'c38'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/content',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/content', 'a1e'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/globalData', 'ee4'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/metadata', 'c46'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/registry', '9d7'),
    exact: true
  },
  {
    path: '/another-internal-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/another-internal-docs/__docusaurus/debug/routes', '526'),
    exact: true
  },
  {
    path: '/another-internal-docs/',
    component: ComponentCreator('/another-internal-docs/', '9cc'),
    routes: [
      {
        path: '/another-internal-docs/',
        component: ComponentCreator('/another-internal-docs/', 'eb7'),
        routes: [
          {
            path: '/another-internal-docs/',
            component: ComponentCreator('/another-internal-docs/', '5a0'),
            routes: [
              {
                path: '/another-internal-docs/appendix',
                component: ComponentCreator('/another-internal-docs/appendix', '36a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/campaign-monitor',
                component: ComponentCreator('/another-internal-docs/campaign-monitor', '137'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor',
                component: ComponentCreator('/another-internal-docs/how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor', 'c57'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/how-to-adjust-email-automation-delay',
                component: ComponentCreator('/another-internal-docs/how-to-adjust-email-automation-delay', '102'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/how-to-modify-collection-date',
                component: ComponentCreator('/another-internal-docs/how-to-modify-collection-date', 'a64'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/how-to-modify-email-automation',
                component: ComponentCreator('/another-internal-docs/how-to-modify-email-automation', '7d4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/how-to-modify-or-add-automations',
                component: ComponentCreator('/another-internal-docs/how-to-modify-or-add-automations', 'd87'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/maintenance',
                component: ComponentCreator('/another-internal-docs/maintenance', '504'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/make',
                component: ComponentCreator('/another-internal-docs/make', '598'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/squarespace',
                component: ComponentCreator('/another-internal-docs/squarespace', '3cf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/system-overview',
                component: ComponentCreator('/another-internal-docs/system-overview', '104'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/troubleshooting',
                component: ComponentCreator('/another-internal-docs/troubleshooting', 'f71'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/workflow-and-automations',
                component: ComponentCreator('/another-internal-docs/workflow-and-automations', 'bb0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/another-internal-docs/',
                component: ComponentCreator('/another-internal-docs/', '796'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
