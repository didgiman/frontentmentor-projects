/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "fem": {
          "cyan": "#45d3d3",
          "red": "#ea5353",
          "orange": "#fcaf4a",
          "blue": "#549ef2",
          "grayishBlue": "#a3a5ae",
          "veryDarkBlue": "#4c4e61"
        }
      }
    },
    plugins: [],
  }
}
