/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '390px',
            md: '480px',
            lg: '904px',
            xl: '1024px',
            '2xl': '1512px',
        },
        extend: {
            colors: {
                'light-grey': '#ececec',
                'off-white': '#F6F6F6',
                'light-silver': '#D7D7D7',
            },
            backgroundImage: {
                'coffee-background': "url('/images/coffee.png')",
            },
        },
    },
    plugins: [],
}
