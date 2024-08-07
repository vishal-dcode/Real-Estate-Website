/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        d1: 'clamp(2.566rem, -0.1492rem + 10.8608vw, 5.96rem)',
        d2: 'clamp(2.281rem, 0.2914rem + 7.9584vw, 4.768rem)',
        d3: 'clamp(2.027rem, 0.5966rem + 5.7216vw, 3.815rem)',
        1: 'clamp(1.802rem, 0.802rem + 4vw, 3.052rem)',
        2: 'clamp(1.602rem, 0.9308rem + 2.6848vw, 2.441rem)',
        3: 'clamp(1.424rem, 1.0008rem + 1.6928vw, 1.953rem)',
        4: 'clamp(1.266rem, 1.0284rem + 0.9504vw, 1.563rem)',
        5: 'clamp(1.125rem, 1.025rem + 0.4vw, 1.25rem)',
        6: 'clamp(1rem, 1rem + 0vw, 1rem)',
        regular: 'clamp(0.875rem, 0.8158rem + 0.2105vw, 1rem)',
        small: 'clamp(0.8125rem, 0.7875rem + 0.1vw, 0.875rem)',
        xsmall: 'clamp(0.6875rem, 0.6375rem + 0.2vw, 0.8125rem)'
      }
    }
  }
};

