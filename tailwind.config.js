/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: "395px",
      xs: "512px",
      ss: "620px",
      sm: "768px",
      ms: "860px",
      smd: "910px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",

      ow1515: "1515px",
      ow1235: "1235px",
      ow1020: "1020px",
      ow775: "775px",
      ow512: "512px",
    },
  },
  plugins: [],
};
