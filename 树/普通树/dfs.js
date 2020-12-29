const tree = require('./tree')

function dfs (tree){
  const { val, children = [] } = tree
  console.info('dfs-->', val)
  children.forEach(dfs)
}

dfs(tree)