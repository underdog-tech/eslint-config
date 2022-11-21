module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "eslint-config-prettier",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-restricted-syntax": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.tsx"],
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error"],
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "no-promise-executor-return": "off",
  },
};
