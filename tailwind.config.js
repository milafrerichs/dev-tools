module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
      width: ['hover'],
      height: ['hover'],
      padding: ['hover'],
    },
  },
  plugins: [],
}
