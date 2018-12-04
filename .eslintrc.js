module.exports = {
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": [
    "standard",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "rules": {
    "arrow-parens": 0,
    "semi": [
      0,
      "never"
    ],
    "max-len": [
      2,
      200,
      4
    ],
    "generator-star-spacing": 0,
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "func-call-spacing": 0,
    "standard/no-callback-literal": 0,
    "no-var": 2,
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "h|[iI]gnored|Module|Directive",
        "caughtErrors": "none",
        "argsIgnorePattern": "^_|h",
        "ignoreRestSiblings": true
      }
    ],
    "indent": [
      0,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "no-tabs": 0,
    "quotes": 0,
    "no-trailing-spaces": 0,
    "no-extend-native": 0
  }
}