/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-gray": "#202123",
                "light-gray": "#4d4e50",
                "mid-gray": "#2b2c2f",
                "default-purple": "#343541",
                "light-purple": "#40414f",
                white: "#ececf1",
                input: "#40414f",
            },
        },
    },
    plugins: [],
};
