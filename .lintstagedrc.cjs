module.exports = {
  "**/*.+(scss|md|json|yml|yaml|js|html)": "prettier --write",
  "**/*.+(ts|tsx)": [
    "eslint --fix",
    // cf: https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
    // --skipLibCheck will skip type checking of declaration files and save time during pre-commit hook
    () => "tsc --noEmit --skipLibCheck",
  ],
  "**/*.+scss": "stylelint --fix",
};
