/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'notebook-blue': '#1e3a8a',
        'notebook-red': '#ef4444',
        'desk-bg': '#0f172a',
        'paper': '#fdfdfd',
      },
    },
  },
  plugins: [],
};
