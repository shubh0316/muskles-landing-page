import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kooky: ['Cartoonist Kooky', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
