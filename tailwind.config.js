/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: ".debug-board", // Prefija todos los estilos con .debug-board
  corePlugins: {
    preflight: false, // Evita que Tailwind resetee estilos globales
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
