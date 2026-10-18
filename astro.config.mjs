// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
});
