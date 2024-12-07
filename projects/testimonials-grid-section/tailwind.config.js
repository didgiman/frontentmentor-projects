/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    extend: {
      colors: {
        "fem": {
          "moderateViolet": "hsl(263, 55%, 52%)",
          "veryDarkGrayishBlue": "hsl(217, 19%, 35%)",
          "veryDarkBlackishBlue": "hsl(219, 29%, 14%)",
          "lightGray": "hsl(0, 0%, 81%)",
          "lightGrayishBlue": "hsl(210, 46%, 95%)",
        }
      },
      lineHeight: {
        '2': '0.5rem',
      }
    },
    plugins: [],
  }
}
