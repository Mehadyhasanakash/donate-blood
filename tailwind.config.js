module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F22E2E",

          secondary: "#F2E4DC",

          accent: "#588C87",

          neutral: "#F3F4F6",

          "base-100": "#FFFFFF",

          info: "#98A8DD",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
