const componentGenerator = require('./plop-templates/component/prompt')
const pageGenerator = require('./plop-templates/page/prompt')
module.exports = function (plop) {
  plop.setGenerator('page', pageGenerator)
  plop.setGenerator('component', componentGenerator)
}
