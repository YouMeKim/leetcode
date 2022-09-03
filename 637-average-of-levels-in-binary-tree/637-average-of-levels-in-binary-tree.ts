/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
    var answerArray: Array<number> = [root.val];
    
    return appendChildrenAverages([root], answerArray);
};

function appendChildrenAverages(nodes: Array<TreeNode>, answerArray: Array<number>) {
    var childrenNodes: Array<TreeNode> = [];
    var childrenVals: Array<number> = [];
    
    nodes.forEach(function (node) {
        if(node.left !== null) childrenNodes.push(node.left);
        if(node.right !== null) childrenNodes.push(node.right);
    });
    
    if(childrenNodes.length >= 1) {
        childrenNodes.forEach(function (node) {
            // console.log("appendChildrenAverages | forEach | node = ", node);
            // console.log("appendChildrenAverages | forEach | node.val = ", node.val);
            childrenVals.push(node.val)
        });

        answerArray.push(getAverageOfNumbers(childrenVals));
        if(childrenNodes.length >= 1) answerArray = appendChildrenAverages(childrenNodes, answerArray);
    }
    
    return answerArray;
}

function getAverageOfNumbers(numbers: Array<number>) {
    var sum = 0;
    
    numbers.forEach(function (number) {
        sum += number;
    }); 
    
    return sum / numbers.length;
}