import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './apps/mobile/src/**/*.{html,ts,scss}',
    './packages/**/*.{html,ts,scss}',
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
