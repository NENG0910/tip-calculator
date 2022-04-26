module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          darkest: `#3D6666`,
          darker: `#00474B`,
          text: `#00474B`,
          light: `#26C2AE`,
          lightest: `#C5E4E7`,
          "text-light": "#547878",
          focus: `#26C2AE`,
          icon: `#9EBBBD`,
          label: `#5E7A7D`,
          "text-field": `#F3F9FA`,
        },
      },
    },
  },
  plugins: [],
};
