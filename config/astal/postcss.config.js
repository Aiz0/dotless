const postcssColorFunctionalNotation = require("postcss-color-functional-notation");
const cssvariables = require("postcss-css-variables");

module.exports = {
  plugins: [
    postcssColorFunctionalNotation(/* pluginOptions */),
    cssvariables(),
  ],
};
