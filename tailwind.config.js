/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gi-bg':      '#0d1117',
        'gi-surface': '#161b22',
        'gi-card':    '#1c2333',
        'gi-border':  '#30363d',
        'gi-blue':    '#00aaff',
        'gi-purple':  '#7c3aed',
        'gi-text':    '#e6edf3',
        'gi-muted':   '#8b949e',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(0,170,255,0.7) 100%)',
        'card-glow': 'linear-gradient(135deg, rgba(0,170,255,0.08) 0%, rgba(124,58,237,0.08) 100%)',
        'ticker-gradient': 'linear-gradient(90deg, #7c3aed 0%, #00aaff 100%)',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(0, 170, 255, 0.15)',
        'card-purple': '0 8px 32px rgba(124, 58, 237, 0.2)',
        'glow-blue':  '0 0 20px rgba(0, 170, 255, 0.25)',
        'glow-purple':'0 0 20px rgba(124, 58, 237, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
