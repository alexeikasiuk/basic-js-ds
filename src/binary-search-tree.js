const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    return !this.rootNode ? null : this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);

    function sort(newNode, node) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          node = node.left;
          sort(newNode, node);
        }
      } else if (newNode.data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          node = node.right;
          sort(newNode, node);
        }
      }
    }

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      sort(newNode, this.rootNode);
      console.log(1);
    }
  }

  has(data) {
    function isEqual(node, data) {
      if (node.data === data) return true;
      else {
        if (data < node.data) {
          if (!node.left) {
            return false;
          } else {
            node = node.left;
            return isEqual(node, data);
          }
        } else {
          if (!node.right) {
            return false;
          } else {
            node = node.right;
            return isEqual(node, data);
          }
        }
      }
    }
    return !this.rootNode ? false : isEqual(this.rootNode, data);
  }

  find(data) {
    function findNode(node, data) {
      if (node.data == data) return node;
      else {
        if (node.data > data) {
          if (!node.left) return null;
          else {
            node = node.left;
            return findNode(node, data);
          }
        } else {
          if (!node.right) return null;
          else {
            node = node.right;
            return findNode(node, data);
          }
        }
      }
    }
    return !this.rootNode ? null : findNode(this.rootNode, data);
  }

  remove(data) {
    function deleteNode(node, data) {
      if (!node) {
        return null;
      } else {
        if (node.data > data) {
          node.left = deleteNode(node.left, data);
          return node;
        } else if (node.data < data) {
          node.right = deleteNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) return null;
          else if (!node.left) return node.right;
          else if (!node.right) return node.left;
        }
        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        node.right = deleteNode(node.right, minNode.data);
        return node;
      }
    }
    this.rootNode = deleteNode(this.rootNode, data);
  }

  min() {
    function getMinNode(node) {
      return !node.left ? node.data : getMinNode(node.left);
    }
    return !this.rootNode ? null : getMinNode(this.rootNode);
  }

  max() {
    function getMaxNode(node) {
      return !node.right ? node.data : getMaxNode(node.right);
    }
    return !this.rootNode ? null : getMaxNode(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree,
};
