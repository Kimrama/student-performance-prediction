/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Arial"],
            },
            colors: {
                theme: {
                    blue: "#4e6aff",
                    blue_hover: "004aad",
                    green: "#4abc96",
                },
            },
        },
    },
    plugins: [],
};
