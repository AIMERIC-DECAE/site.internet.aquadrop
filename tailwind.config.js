import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3.5rem',
        '2xl': '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        aquadrop: {
          'bg-deep': '#0F2F27',
          'surface-1': '#173C32',
          'ink-primary': '#E0C06A',
          'ink-body': '#E8E3D6',
          'accent-teal': '#2D6F65',
          'accent-olive': '#547A3A',
          'accent-sand': '#DCCDAE',
          'neutral-100': '#F3EEE3',
          'neutral-700': '#5A5A54',
          success: '#7FB069',
          error: '#D96C5F',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'aquadrop-soft': '0 32px 80px -40px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
