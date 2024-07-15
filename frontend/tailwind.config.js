/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D6BFF',
        secondary: '#FDBD5C',
        purple: '#932687',
        green: '#80d95a',
        success: '#198754',
        info: '#FFF6F4',
        warning: '#fd7e14',
        danger: '#dc3545',
        light: '#f8f9fa',
        black: '#000000',
        white: '#ffffff',
        textColor: '#212529',
        subTextColor: 'rgba(37, 36, 36, 0.7)',
        bodyBgColor: '#f7f7ff',
        linkColor: '#4d6bff',
        linkHoverColor: '#4d6bff',
        linkActiveColor: '#1a3eed',
        facebook: '#3B5997',
        whatsapp: '#2AB318',
        instagram: '#25A3E1',
        email: '#475569',
        blue: '#0d6efd',
        indigo: '#020202',
        pink: '#d63384',
        red: '#dc3545',
      },
      fontFamily: {
        'Tajawal': ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
