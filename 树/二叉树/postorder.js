const bt = require('./binaryTree')

function postorder(bt){
  if(!bt) return
  postorder(bt.left)
  postorder(bt.right)
  console.info('postorder-->', bt.val)
}

postorder(bt)