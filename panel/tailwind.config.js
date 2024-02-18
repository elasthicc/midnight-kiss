const colors = require('tailwindcss/colors');

const gray = {
    50: 'hsl(311, 100%, 97%)',
    100: 'hsl(311, 100%, 93%)',
    200: 'hsl(311, 100%, 84%)',  // Title text
    300: 'hsl(311, 100%, 84%)', // Text sub navbar
    400: 'hsl(311, 100%, 84%)', // Main text
    500: 'hsl(295, 100%, 67%)', // Primary (material.io)
    600: 'hsl(295, 100%, 30%)', // Input field color
    700: 'hsl(295, 84%, 18%)', // Sub Navigation 
    800: 'hsl(295, 100%, 4%)', // Main background
    900: 'hsl(295, 100%, 5%)', // Header bar
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
