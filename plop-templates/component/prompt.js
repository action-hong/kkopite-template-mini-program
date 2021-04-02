module.exports = {
  description: '生成组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '组件名称'
    }
  ],
  actions: data => {
    const name = '\{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/${name}.js`,
        templateFile: 'plop-templates/component/index.js',
      },
      {
        type: 'add',
        path: `src/components/${name}/${name}.json`,
        templateFile: 'plop-templates/component/index.json',
      },
      {
        type: 'add',
        path: `src/components/${name}/${name}.wxml`,
        templateFile: 'plop-templates/component/index.wxml',
      },
      {
        type: 'add',
        path: `src/components/${name}/${name}.scss`,
        templateFile: 'plop-templates/component/index.scss',
      }
    ]
    return actions
  }
}