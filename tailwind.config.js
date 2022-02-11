const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './includes/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: "media", // or 'media' or 'class'
  topBar: "100px",
  theme: {
    extend: {
      colors: {
        "primary-color": "#fc5e28",
        "bg-black": "#040e26",
      },
      textColor: theme => theme('colors'),
      textColor: {
        'primary-contrast-text': 'rgba(255, 255, 255, 0.8)',
        'bg-black-contrast-text': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        ptext: ["Popins", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      width: {
        "100vw": "100vw",
        "80vw": '80vw',
        "websiteMaxWidth:": "1500px"
      },
      padding: {
        websiteWidthSm: "0 0 0 0",
        websiteWidthMd: "0 1vw 0 1vw",
        websiteWidthXl: "0 15vw 0 15vw",
        websiteWidthLg: "0 15vw 0 15vw",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '1-2': '1fr 2fr',
      },
      backgroundImage: {
        "body-dark": "url(/images/background-dark.jpg)",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/*

`
--blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc107;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: ;
--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`
*/