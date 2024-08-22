// 84. Largest Rectangle in Histogram



// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.









/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []; // Stack to hold indices
    let max = 0; // Variable to track the maximum area

    for (let i = 0; i <= heights.length; i++) {
        // Use 0 height as a sentinel to ensure we pop all elements in the stack
        let currentHeight = (i === heights.length) ? 0 : heights[i];
        
        // If the stack is not empty and current height is less than the height of the top of the stack
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }
        
        // Push current index to stack
        stack.push(i);
    }

    return max;
};
