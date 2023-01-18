class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = this.buildTree(this.arr);
  }
  buildTree(arr) {
    let array = [...new Set(arr.sort((a, b) => a - b))];
    return this.buildTreeHelper(array, 0, array.length - 1);
  }
  buildTreeHelper(array, start, end) {
    if (start > end) return null;
    let mid = Math.round((start + end) / 2);
    let root = new Node(array[mid]);
    root.left = this.buildTreeHelper(array, start, mid - 1);
    root.right = this.buildTreeHelper(array, mid + 1, end);
    return root;
  }
  //O(h)
  //may have to add this
  insert(value) {
    this.root = this.insertRec(this.root, value);
  }
  insertRec(root, value) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    /* Otherwise, recur down the tree */
    if (value < root.data) root.left = this.insertRec(root.left, value);
    else if (value > root.data) root.right = this.insertRec(root.right, value);
    /* return the (unchanged) node pointer */
    return root;
  }
  delete(value) {
    this.root = this.deleteRec(this.root, value);
  }
  deleteRec(root, value) {
    /* Base Case: If the tree is empty */
    if (root == null) return root;
    //find root
    //somehow makes parent point to next next child.
    if (value < root.data) root.left = deleteRec(root.left, value);
    else if (value > root.data) root.right = deleteRec(root.right, value);
    //root found
    else {
      // node with only one child or no child
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      // node with two children: Get the inorder
      // successor (smallest in the right subtree)
      root.data = minValue(root.right);
      // Delete the inorder successor
      root.right = deleteRec(root.right, root.data);
    }
    return root;
  }
  minValue(root) {
    let minv = root.data;
    while (root.left != null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
  }
  find(value) {
    return findHealper(value, this.root);
  }
  findHelper(value, root) {
    if (root == null) return;
    if (value == root.data) return root;
    if (root.data > value) {
      return this.findHelper(value, root.left);
    }
    return this.findHelper(value, root.right);
  }
  levelOrder(fn = null) {
    if (this.root == null) return;
    let result = [];
    let q = [];
    q.push(this.root);
    while (q.length != 0) {
      let current = q.shift();
      result.push(current.data);
      if (current.left != null) q.push(current.left);
      if (current.right != null) q.push(current.right);
    }
    if (fn == null) return result;
    else {
      return result.map((x) => fn(x));
    }
  }
  inorder(fn = null) {
    let arr = this.inorderHelper(this.root, []);
    if (fn == null) return arr;
    else {
      return arr.map((x) => fn(x));
    }
  }
  inorderHelper(node, result) {
    if (node == null) return;
    this.inorderHelper(node.left, result);
    result.push(node.data);
    this.inorderHelper(node.right, result);
    return result;
  }
  preorder(fn= null) {
    let arr = this.preorderHelper(this.root, []);
    if (fn == null) return arr;
    else {
      return arr.map((x) => fn(x));
    }
  }
  preorderHelper(node, result) {
    if (node == null) return;
    result.push(node.data);
    this.preorderHelper(node.left, result);
    this.preorderHelper(node.right, result);
    return result;
  }
  postorder(fn = null) {
    let arr = this.postorderHelper(this.root, []);
    if (fn == null) return arr;
    else {
      return arr.map((x) => fn(x));
    }
  }
  postorderHelper(node, result) {
    if (node == null) return;
    this.postorderHelper(node.left, result);
    this.postorderHelper(node.right, result);
    result.push(node.data);
    return result;
  }
  height(node) {
    if (node == null) return 0;
    if (node.left == null && node.right == null) return 1;
    //adding one cause we need to count the root node
    return Math.max(this.height(node.left) + 1, this.height(node.right) + 1);
  }
  depth(node) {
    return depthHelper(node, this.root);
  }
  depthHelper(node, root) {
    if (node == null) return "null node";
    if (node.value < root.value) {
      return this.depthHelper(node, root.left) + 1;
    } else if (node.value > root.value) {
      return this.depthHelper(node, root.right) + 1;
    }
    //eqaul
    else {
      return 1;
    }
  }
  isBalance() {
    let lheight = this.height(this.root.left);
    let rheight = this.height(this.root.right);
    if (Math.abs(lheight - rheight) > 1) {
      return false;
    }
    return true;
  }
  rebalance() {
    this.arr = this.inorder();
    let tree = new Tree(this.arr);
    this.root = tree.root;
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
let tree = new Tree([1, 2, 4, 5, 3, 6, 8, 9, 50, 23]);
console.log(tree.prettyPrint(tree.root));
console.log(tree.isBalance());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
tree.insert(101);
tree.insert(156);
tree.insert(160);
console.log(tree.isBalance());
tree.rebalance();
console.log(tree.prettyPrint(tree.root));
console.log(tree.isBalance());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
