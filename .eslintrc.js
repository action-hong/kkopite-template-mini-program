module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // app, i18n这个两个变量不报错
    'no-unused-vars': ['error', {
      varsIgnorePattern: 'app|i18n',
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
      vars: 'all'
    }]
  },
  globals: {
    getApp: true,
    Page: true,
    App: true,
    Component: true,
    getCurrentPages: true,
    wx: true,
    Behavior: true
  }
}
