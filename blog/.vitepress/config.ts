import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Casey Yee',
  description: 'My piece of the interwebs',
  outDir: '../docs/posts',
  base: '/posts/',
  themeConfig: {
    sidebar: [
      {
        text: 'Blog Posts',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
    ],
  },
});
