module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "extends": ["plugin:jest/all"],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": ["jest"],
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
};