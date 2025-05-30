/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      // Custom color palette from Personic Medical Design Guide
      colors: {
        primary: {
          DEFAULT: '#52683E',  // Dark Green
          light: '#B6BB85',    // Pale Green
          dark: '#3B3B37',     // Dark Grey
        },
        secondary: {
          DEFAULT: '#589AA1',  // Sky Blue
          light: '#8BC1C8',    // Light Sky Blue
        },
        accent: {
          DEFAULT: '#D3B01C',  // Mustard
          apricot: '#E59D63',  // Apricot
        },
        background: {
          DEFAULT: '#FFFFFF',  // White
          light: '#D6D6CE',    // Light Grey
          warm: '#D9C2AD',     // Oat
          accent: '#E59D63',   // Apricot
        },
        text: {
          DEFAULT: '#3B3B37',  // Dark Grey
          light: '#6D6D68',    // Medium Grey
        },
        // Utility colors
        success: '#52683E',    // Dark Green
        warning: '#D3B01C',    // Mustard
        info: '#589AA1',       // Sky Blue
        error: '#E74C3C',      // Red
      },
      
      // Custom font families
      fontFamily: {
        'primary': ['Nunito Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      
      // Custom spacing scale
      spacing: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        'xxl': '3rem',      // 48px
      },
      
      // Custom border radius
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.625rem',
        'pill': '9999px',
      },
      
      // Custom shadows
      boxShadow: {
        'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 8px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07)',
        'lg': '0 12px 20px -3px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.07)',
      },
      
      // Custom transitions
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      
      // Custom breakpoints for responsive design
      screens: {
        'tablet': '600px',
        'desktop': '768px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 