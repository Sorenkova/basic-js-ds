const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = insertNode(this.rootNode, data);
  }

  find(data) {
    return findNode(this.rootNode, data);
  }

  has(data) {
    return findNode(this.rootNode, data) !== null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    return this.rootNode === null ? null : minNode(this.rootNode).data;
  }

  max() {
    return this.rootNode === null ? null : maxNode(this.rootNode).data;
  }
}

function insertNode(node, data) {
  if (node === null) {
    return new Node(data);
  }
  if (data < node.data) {
    node.left = insertNode(node.left, data);
  } else if (data > node.data) {
    node.right = insertNode(node.right, data);
  }

  return node;
}

function findNode(node, data) {
  while (node !== null && node.data !== data) {
    node = data < node.data ? node.left : node.right;
  }

  return node;
}

function removeNode(node, data) {
  if (node === null) {
    return null;
  }
  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }
  if (data > node.data) {
    node.right = removeNode(node.right, data);
    return node;
  }

  if (node.left === null) {
    return node.right;
  }
  if (node.right === null) {
    return node.left;
  }

  const smallest = minNode(node.right);
  node.data = smallest.data;
  node.right = removeNode(node.right, smallest.data);

  return node;
}

function minNode(node) {
  while (node.left !== null) {
    node = node.left;
  }

  return node;
}

function maxNode(node) {
  while (node.right !== null) {
    node = node.right;
  }

  return node;
}

module.exports = {
  BinarySearchTree,
};
