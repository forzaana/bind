import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography'
const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['SST Arabic', ...defaultTheme.fontFamily.sans],
            },
            writingMode: {
                "vertical-rl": "vertical-rl",
            },
            textOrientation: {
                mixed: "mixed",
                upright: "upright",
                sideways: "sideways",
                "sideways-right": "sideways-right",
            },
            colors: {
                'bind': {
                    '50': '#f0f1fd',
                    '100': '#e4e5fb',
                    '200': '#cecff7',
                    '300': '#b0b0f1',
                    '400': '#9790e9',
                    '500': '#8374e0',
                    '600': '#745ad1',
                    '700': '#644ab8',
                    '800': '#513e95',
                    '900': '#443877',
                    '950': '#19142a',
                },
                'melrose': {
                    '50': '#f5f3ff',
                    '100': '#ede9fe',
                    '200': '#ded7fd',
                    '300': '#c5b5fc',
                    '400': '#aa8cf9',
                    '500': '#8f5ef4',
                    '600': '#803ceb',
                    '700': '#712ad7',
                    '800': '#5d23b4',
                    '900': '#4e1f93',
                    '950': '#2f1164',
                },
            },
            keyframes: {
                "scrolling-banner": {
                    from: {transform: "translateX(0)"},
                    to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
                },
                "scrolling-banner-vertical": {
                    from: {transform: "translateY(0)"},
                    to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
                },
            },
            animation: {
                "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
                "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
            },
        },
    },
    darkMode: "class",

    plugins: [heroui(), typography,
        function ({ addUtilities }) {
            addUtilities({
                ".writing-mode-vertical-rl": { "writing-mode": "vertical-rl" },
                ".text-orientation-mixed": { "text-orientation": "mixed" },
                ".text-orientation-upright": { "text-orientation": "upright" },
                ".text-orientation-sideways": { "text-orientation": "sideways" },
                ".text-orientation-revert": { "text-orientation": "revert" },
                ".text-orientation-sideways-right": { "text-orientation": "sideways-right" },
            });
        },
    ],
};
