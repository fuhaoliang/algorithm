const json = {
  a: {b: {c: 1}},
  d: [1, 2],
  e: 'string'
}

const dfs = (n, patch) => {
  console.info(n, patch)
  Object.keys(n).forEach(key => {
    if (Object.prototype.toString.call(n[key]) === '[object Object]'){
      dfs(n[key], patch.concat(key))
    }
  })
}

dfs(json, [])