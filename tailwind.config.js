/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibmplex': ['IBM Plex Mono', 'monospace'],
        'nunito': ['Nunito Sans', 'sans'],
      },
      colors: {
        'white-50': '#ffffff80',
        'white-32': '#ffffff52',
        'white-10': '#ffffff1a',
        'green-highlight': '#81c5c9',
        'yellow-highlight': '#e9d177',
        'pink-highlight': '#f9cdd9',
        'violet-highlight': '#d7d8fd',
      },
      width: {
        '200': '232px'
      }
      
    },
  },
  plugins: [],
}

