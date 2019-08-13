module.exports = {
  root: true,
  //extends: '@react-native-community',
  extends: [
    "@react-native-community",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],

  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
