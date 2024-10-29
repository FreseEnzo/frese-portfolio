import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/frese-portfolio/blog',
    component: ComponentCreator('/frese-portfolio/blog', 'aa5'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/archive',
    component: ComponentCreator('/frese-portfolio/blog/archive', '046'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/authors',
    component: ComponentCreator('/frese-portfolio/blog/authors', '928'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/frese-portfolio/blog/authors/all-sebastien-lorber-articles', 'f1c'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/authors/yangshun',
    component: ComponentCreator('/frese-portfolio/blog/authors/yangshun', 'f7a'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/first-blog-post',
    component: ComponentCreator('/frese-portfolio/blog/first-blog-post', '11f'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/long-blog-post',
    component: ComponentCreator('/frese-portfolio/blog/long-blog-post', '809'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/frese-portfolio/blog/mdx-blog-post', '867'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/tags',
    component: ComponentCreator('/frese-portfolio/blog/tags', '775'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/frese-portfolio/blog/tags/docusaurus', 'd25'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/tags/facebook',
    component: ComponentCreator('/frese-portfolio/blog/tags/facebook', '1a2'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/tags/hello',
    component: ComponentCreator('/frese-portfolio/blog/tags/hello', '36f'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/tags/hola',
    component: ComponentCreator('/frese-portfolio/blog/tags/hola', '3e2'),
    exact: true
  },
  {
    path: '/frese-portfolio/blog/welcome',
    component: ComponentCreator('/frese-portfolio/blog/welcome', '23f'),
    exact: true
  },
  {
    path: '/frese-portfolio/markdown-page',
    component: ComponentCreator('/frese-portfolio/markdown-page', '5eb'),
    exact: true
  },
  {
    path: '/frese-portfolio/docs',
    component: ComponentCreator('/frese-portfolio/docs', '0e5'),
    routes: [
      {
        path: '/frese-portfolio/docs',
        component: ComponentCreator('/frese-portfolio/docs', 'e6d'),
        routes: [
          {
            path: '/frese-portfolio/docs',
            component: ComponentCreator('/frese-portfolio/docs', '256'),
            routes: [
              {
                path: '/frese-portfolio/docs/category/tutorial---basics',
                component: ComponentCreator('/frese-portfolio/docs/category/tutorial---basics', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/category/tutorial---extras',
                component: ComponentCreator('/frese-portfolio/docs/category/tutorial---extras', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/Eletric Skateboard',
                component: ComponentCreator('/frese-portfolio/docs/Projects/Eletric Skateboard', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/Indoor Mapping',
                component: ComponentCreator('/frese-portfolio/docs/Projects/Indoor Mapping', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/Modular Multi Buck Boost Converter',
                component: ComponentCreator('/frese-portfolio/docs/Projects/Modular Multi Buck Boost Converter', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/Nucleo H723-ZG Education Board',
                component: ComponentCreator('/frese-portfolio/docs/Projects/Nucleo H723-ZG Education Board', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/Portable Soldering Station',
                component: ComponentCreator('/frese-portfolio/docs/Projects/Portable Soldering Station', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/Projects/SSL Robot',
                component: ComponentCreator('/frese-portfolio/docs/Projects/SSL Robot', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/resume',
                component: ComponentCreator('/frese-portfolio/docs/resume', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/congratulations', 'd32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/create-a-blog-post', 'f67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/create-a-document', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/create-a-page', '533'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/deploy-your-site', '93b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-basics/markdown-features', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-extras/manage-docs-versions', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frese-portfolio/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/frese-portfolio/docs/tutorial-extras/translate-your-site', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/frese-portfolio/',
    component: ComponentCreator('/frese-portfolio/', 'daf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
