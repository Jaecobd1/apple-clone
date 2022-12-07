/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'darkBlue': '#030128',
            'lightBlue': '#0367cc',
            'white': '#ffffff',
            'grey': '#323233',
            'black': '#000000',
            'lightGrey': '#fbfbfd',
            'orange': '#fd6a13',
            'red': '#c01f25',
            'footerGrey': '#727278'

        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            },
            height: {
                '692': '43.25rem',
                'heroImgLg': '35.5rem',
                'heroImgMd': '30rem',
                'heroImgSm': '25rem'
          },
          fontSize: {
            'footer': '12px',
          }
        },
    },
    plugins: [],
}