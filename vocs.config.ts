import { defineConfig } from 'vocs';

export default defineConfig({
  description: 'Mostly for me. though could be useful to others',
  title: 'Casey Yee',
  rootDir: 'blog',
  basePath: '/blog',
  topNav: [
    { text: 'caseyyee.com', link: '/' },
    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/whoyee' },
    { text: 'Email', link: 'mailto:caseyyee.ca@gmail.com' },
  ],
});
