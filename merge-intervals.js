// Leetcode Link: https://leetcode.com/problems/merge-intervals/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const startIndex = 0;
    const endIndex = 1;

    intervals.sort((a, b) => a[startIndex] - b[startIndex]);

    const mergedIntervals = [];
    let mergeStart = intervals[0][startIndex];
    let mergeEnd = intervals[0][endIndex];

    for(let i = 1; i < intervals.length; i++) {
        const subsequentInterval = intervals[i];

        if(subsequentInterval[startIndex] <= mergeEnd) {
            mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
        }else {
            mergedIntervals.push(mergeStart, mergeEnd);
            mergeStart = subsequentInterval[startIndex];
            mergeEnd = subsequentInterval[endIndex];
        };
    };
    mergedIntervals.push([mergeStart, mergeEnd]);
    return mergedIntervals;
};