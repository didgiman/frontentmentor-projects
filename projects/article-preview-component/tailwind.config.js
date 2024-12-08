/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    extend: {
      colors: {
        "fem": {
          "veryDarkGrayishBlue": "hsl(217, 19%, 35%)",
          "desaturatedDarkBlue": "hsl(214, 17%, 51%)",
          "grayishBlue": "hsl(212, 23%, 69%)",
          "lightGrayishBlue": "hsl(210, 46%, 95%)",
        }
      },
    },
    plugins: [],
  }
}
