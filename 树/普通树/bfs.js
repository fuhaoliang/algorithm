const tree = require('./tree')

function bfs(tree){
  const q = [tree]
  while(q.length) {
    let n = q.shift()
    let { val, children = [] } = n
    console.info('bfs-->', val)
    children.forEach(i => q.push(i))
  }
}

bfs(tree)