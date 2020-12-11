module.exports = {
  description: '生成页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '页面名称'
    }
  ],
  actions: data => {
    const name = '{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/index.js`,
        templateFile: 'plop-templates/page/index.js',
      },
      {
        type: 'add',
        path: `src/pages/${name}/index.json`,
        templateFile: 'plop-templates/page/index.json',
      },
      {
        type: 'add',
        path: `src/pages/${name}/index.wxml`,
        templateFile: 'plop-templates/page/index.wxml',
      },
      {
        type: 'add',
        path: `src/pages/${name}/index.scss`,
        templateFile: 'plop-templates/page/index.scss',
      }
    ]
    return actions
  }
}