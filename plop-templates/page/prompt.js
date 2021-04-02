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
    const name = '\{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/${name}.js`,
        templateFile: 'plop-templates/page/index.js',
      },
      {
        type: 'add',
        path: `src/pages/${name}/${name}.json`,
        templateFile: 'plop-templates/page/index.json',
      },
      {
        type: 'add',
        path: `src/pages/${name}/${name}.wxml`,
        templateFile: 'plop-templates/page/index.wxml',
      },
      {
        type: 'add',
        path: `src/pages/${name}/${name}.scss`,
        templateFile: 'plop-templates/page/index.scss',
      }
    ]
    return actions
  }
}