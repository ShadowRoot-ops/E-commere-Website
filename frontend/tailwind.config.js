// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    FontFamily: {
      Kanit: "Kanit,sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
