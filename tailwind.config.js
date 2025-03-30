/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        energy: {
          primary: "#0c4a6e",
          secondary: "#0ea5e9",
          accent: "#14b8a6",
          dark: "#1e293b",
          light: "#f1f5f9",
          warning: "#f59e0b",
          danger: "#ef4444",
          success: "#10b981",
        },
      },
    },
  },
  plugins: [],
};
