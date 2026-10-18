// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    integrations: [
        starlight({
            title: 'Memo',
            favicon: '/favicon.svg',
            customCss: ['./src/styles/main.css'],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jsah-mc/memo' }],
            expressiveCode: {
                styleOverrides: {
                    borderRadius: '0rem',
                },
            },
            sidebar: [
                {
                    label: 'Get Started',
                    items: [
                        { label: 'Info', slug: 'get-started/info' },
                        { label: 'Installation', slug: 'get-started/installation' },
                    ],
                },
            ],
        }),
    ],
    adapter: cloudflare(),
});