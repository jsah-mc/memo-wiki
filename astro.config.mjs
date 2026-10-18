// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      conditions: ['node', 'import', 'default'],
      alias: {
        'satteri/browser': 'satteri',
      },
    },
  },
  integrations: [
      starlight({
          title: 'Memo',
          customCss: ['./src/styles/main.css'],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jsah-mc/memo' }],
          expressiveCode: {
              styleOverrides: {
                  borderRadius: '0rem', // Sets code block corners to square
              },
      		},
          sidebar: [
              {
                  label: 'Get Started',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Info', slug: 'get-started/info' },
                      { label: 'Installation', slug: 'get-started/installation' },
                  ],
              },
          ],
      }),
	],

  adapter: cloudflare(),
});