module.exports = {
  helpers: {
    if_or: function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name"
    },
    description: {
      type: "string",
      required: false,
      message: "Project description",
    },
    author: {
      type: "string",
      message: "Author"
    },
    eslint: {
      type: "confirm",
      message: "Use ESLint to lint your code?"
    },
    stylelint: {
      type: "confirm",
      message: "Use styleLint to lint your code?"
    },
    prettier: {
      type: "confirm",
      message: "Use prettier to format your code?"
    },
  },
  filters: {
    ".eslintrc.js": "eslint",
    ".eslintignore": "eslint",
    ".stylelintrc.js": "stylelint",
    ".prettierrc.js": "prettier"
  },
  completeMessage: "To get started:\n\n  {{^inplace}}cd {{destDirName}}\n  {{/inplace}}npm install\n  npm start\n\n"
}