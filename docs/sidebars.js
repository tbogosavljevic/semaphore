/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  startSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Get Started',
        description: 'Your first steps with Semaphore',
        // slug: '/getting-started',
        keywords: ['quickstart'],
        // image: '/img/docusaurus.png',
      },
      items: [
          'getting-started/about-semaphore',
          {
            type: 'category',
            label: 'Guided Tour',
            link: {
              type: 'doc',
              id: 'getting-started/guided-tour'
            },
            collapsed: false,
            items: [
              'getting-started/tour/sign-up',
              'getting-started/tour/hello-world',
              'getting-started/tour/continuous-integration',
              'getting-started/tour/continuous-delivery'
            ]
          },
          {
            type: 'category',
            label: 'Migration Guides',
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'getting-started/migration',
              },
            ],
          },
        ],
    },
    'getting-started/faq',
    'getting-started/changelog'
  ],
  coreSidebar: [
    {
      type: 'category',
      label: 'Using Semaphore',
      link: {
        type: 'generated-index',
        title: 'How to use Semaphore',
        description: 'Semaphore Operations Guide',
        // slug: '/using-semaphore',
        keywords: ['handbook'],
        // image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'Workflows',
          link: {
            type: 'doc',
            id: 'using-semaphore/workflows'
          },
          collapsed: false,
          items: [
            'using-semaphore/jobs',
            'using-semaphore/pipelines',
            'using-semaphore/artifacts',
            'using-semaphore/secrets',
            'using-semaphore/promotions',
            'using-semaphore/tasks',
          ]
        },
        {
          type: 'category',
          label: 'Projects',
          link: {
            type: 'doc',
            id: 'using-semaphore/projects'
          },
          collapsed: true,
          items: [
            'using-semaphore/connect-github',
            'using-semaphore/connect-github-oauth',
            'using-semaphore/connect-bitbucket',
            'using-semaphore/insights',
            'using-semaphore/monorepo',
          ]
        },
        {
          type: 'category',
          label: 'Organizations',
          link: {
            type: 'doc',
            id: 'using-semaphore/organizations'
          },
          collapsed: true,
          items: [
            'using-semaphore/rbac',
            'using-semaphore/org-health',
            'using-semaphore/org-preflight',
            'using-semaphore/notifications',
            'using-semaphore/github-sso',
            'using-semaphore/okta',
            'using-semaphore/openid',
          ]
        },
        {
          type: 'category',
          label: 'Tests',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'using-semaphore/tests',
            },
          ],
        },
        {
          type: 'category',
          label: 'Languages and Databases',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'using-semaphore/languages',
            },
          ],
        },
        {
          type: 'category',
          label: 'Self-hosted Agents',
          link: {
            type: 'doc',
            id: 'using-semaphore/self-hosted'
          },
          collapsed: true,
          items: [
            'using-semaphore/self-hosted-install',
            'using-semaphore/self-hosted-configure',
            'using-semaphore/self-hosted-aws',
          ]
        },
        {
          type: 'category',
          label: 'Optimization',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'using-semaphore/optimization',
            },
          ],
        },
      ],
    },
  ],
  // apiSidebar: apiSidebar.sidebar,
  apiSidebar: [
    {
      type: 'category',
      label: "API Specification",
      link: {
        type: 'generated-index',
        title: 'Semaphore API',
        description: 'Semaphore API Specification',
        // slug: '/using-semaphore',
        keywords: ['api'],
        // image: '/img/docusaurus.png',
      },
      items: require("./docs/openapi-spec/sidebar.ts")
      // items: apiSidebar.sidebar
      // items: [
      //   'openapi-spec/semaphore-public-api'
      //   // {
      //   //   type: 'autogenerated',
      //   //   dirName: 'openapi-spec',
      //   // }
      // ]
    }
  ],
  refSidebar: [
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Semaphore Reference',
        description: 'Reference for YAML resources and command line tools',
      },
      items: [
        'reference/api',
        'reference/semaphore-cli',
        'reference/toolbox',
        'reference/env-vars',
        'reference/conditions-dsl',
        'reference/self-hosted-config',
        'reference/audit-events',
        'reference/openid',
        {
          type: 'category',
          label: 'Machine Types',
          link: {
            type: 'doc',
            id: 'reference/machine-types',
          },
          collapsed: false,
          items: [
            'reference/os-ubuntu',
            'reference/os-apple',
          ]
        },
        {
          type: 'category',
          label: 'Resource YAML Reference',
          link: {
            type: 'doc',
            id: 'reference/resources-yaml',
          },
          collapsed: false,
          items: [
            'reference/agent-yaml',
            'reference/dashboard-yaml',
            'reference/jobs-yaml',
            'reference/deployment-target-yaml',
            'reference/notifications-yaml',
            'reference/pipeline-yaml',
            'reference/project-yaml',
            'reference/secret-yaml',
          ]
        },
      ],
    },
  ],

};

export default sidebars;
