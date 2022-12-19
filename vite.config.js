/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import webExtension from '@samrum/vite-plugin-web-extension';
import pkg from './package.json';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    webExtension({
      manifest: {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        manifest_version: 2,
        permissions: ['storage', 'tabs', 'https://*.youtube.com/*'],
        background: {
          scripts: ['src/background.js'],
        },
        content_scripts: [
          {
            matches: ['https://*.youtube.com/*'],
            js: ['src/inject.js'],
          },
        ],
        browser_action: {
          default_title: 'Youtube Annotate',
          default_popup: 'src/popup.html',
        },
      },
    }),
  ],
});
