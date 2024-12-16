module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this covers your project files
  ],
  theme: {
    extend: {
      animation: {
        "move-border": "move-border 3s linear infinite", // Apply the animation for moving border
      },
      keyframes: {
        "move-border": {
          "0%": {
            borderImage:
              "linear-gradient(45deg, rgb(16, 185, 129), rgb(52, 211, 153), rgb(16, 185, 129), rgb(52, 211, 153)) 1 stretch",
          },
          "25%": {
            borderImage:
              "linear-gradient(135deg, rgb(16, 185, 129), rgb(34, 197, 94), rgb(16, 185, 129), rgb(34, 197, 94)) 1 stretch",
          },
          "50%": {
            borderImage:
              "linear-gradient(225deg, rgb(16, 185, 129), rgb(4, 120, 87), rgb(16, 185, 129), rgb(4, 120, 87)) 1 stretch",
          },
          "75%": {
            borderImage:
              "linear-gradient(315deg, rgb(16, 185, 129), rgb(61, 179, 74), rgb(16, 185, 129), rgb(61, 179, 74)) 1 stretch",
          },
          "100%": {
            borderImage:
              "linear-gradient(45deg, rgb(16, 185, 129), rgb(52, 211, 153), rgb(16, 185, 129), rgb(52, 211, 153)) 1 stretch",
          },
        },
      },
    },
  },
  plugins: [],
};
