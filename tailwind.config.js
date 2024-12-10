import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js'
    ],
    theme: {
            extend: {
            // fontFamily: {
            //     sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            // },
            colors: {
                "black" : "#060606"
            },
            fontSize: {
                '10px': '0.625rem'
            }
        },
    },
    plugins: [],
};
