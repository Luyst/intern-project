/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '4/6': '4 / 6',
                'doc-card': '5/7',
            },
            maxWidth: {
                88: '22rem',
            },
            height: {
                '66dvh': '66dvh',
            },
        },
        colors: {
            cyan: '#99FFFF',
            white: '#FFF',
            black: '#000',

            //background
            'blue-background': '#002F5CCC',
            'secondary-background': '#4E95DBB2',
            'footer-background': '#002549CC',

            //blue
            'blue-50': '#E6EEF7',
            'blue-300': '#6698CA',
            'blue-500': '#0054A6',
            'blue-600': '#003F7D',

            //gray
            'gray-50': '#F0F0F0',
            'gray-400': '#858585',
            'gray-500': '#666666',
            'gray-600': '#4D4D4D',
            'gray-700': '#333333',
        },
    },

    plugins: [require('@xpd/tailwind-3dtransforms')],
};
