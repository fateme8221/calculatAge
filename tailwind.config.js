/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "normal": " 0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      container: {
        center: true,
        'padding': {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
      },
      fontFamily: {
        "dana": "dana",
        "danaMedium": "dana Medium",
        "danaDemiBold": "dana DemiBold",
      },
    },
  },
  plugins: [
  ],
}

