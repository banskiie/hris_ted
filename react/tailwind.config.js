/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "roboto-condensed": ["Roboto Condensed"],
                roboto: ["Roboto"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#2fb44d",
                    secondary: "#53863d",
                },
            },
        ],
    },
};
