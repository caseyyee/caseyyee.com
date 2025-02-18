/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './blog/**/*.{html,md,mdx,tsx,js,jsx}'],
  theme: {
    fonts: {
      'nunito': ['Nunito', 'system-ui', 'sans-serif'],
    },
    extend: {
      // other extensions...
    },
  },
  plugins: [],
};

