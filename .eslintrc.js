module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": [2, {
      "arrays": "never",
      "functions": "never",
      "objects": "always",
    }],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": 0,
    "no-confusing-arrow": 0,
    "no-param-reassign": 0,
    "no-plusplus": ["error", {"allowForLoopAfterthoughts": true }],
    "no-nested-ternary": 0,
    "no-undef": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
  }
}