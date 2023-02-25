/*
Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Input: root = [2,1,3]
Output: [2,3,1]

Input: root = []
Output: []

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    //base case
    if (!root) return root;
    //function to reverse
    const reverseNode = (node) => {
        if (!node) return;
        //making each L/R into a variable
        let left = node.left;
        let right = node.right;
        //reversing the nodes
        node.left = right;
        node.right = left;
        //calling the function nodes
        reverseNode(node.left);
        reverseNode(node.right);
    }
    reverseNode(root)
    return root;
};