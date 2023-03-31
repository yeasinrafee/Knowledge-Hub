/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#241b77",

          secondary: "#60e07a",

          accent: "#807efc",

          neutral: "#2A2235",

          "base-100": "#FFFFFF",

          info: "#9CCFF2",

          success: "#1A705D",

          warning: "#8C590D",

          error: "#F66F98",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
