const bt = require('./binaryTree')

function preorder(bt) {
  if (!bt) return
  console.info('preorder-->', bt.val)
  preorder(bt.left)
  preorder(bt.right)
}

preorder(bt)