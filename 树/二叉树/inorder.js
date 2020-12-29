const bt = require("./binaryTree")

function inorder (bt){
  if (!bt) return 
  inorder(bt.left)
  console.info('inorder-->', bt.val)
  inorder(bt.right)
}

inorder(bt)