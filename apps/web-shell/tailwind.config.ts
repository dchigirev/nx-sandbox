import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './apps/web-shell/src/**/*.{html,ts,scss}',
    './apps/webOne/src/**/*.{html,ts,scss}',
    './libs/**/*.{html,ts,scss}',
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
