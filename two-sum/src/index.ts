/**
 * Given an array of integers, return indices of the two numbers 
 * such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution,
 *
 *   Input:  nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1]
 *   Because nums[0] + nums[1] = 2 + 7 = 9
 */
//Time Complexity: O(n²)
//Space Complexity: O(1)
function n2TwoSum(nums: number[], target: number): number[] {
    const sum: number = 0;
    let output: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) { 
                output = [i, j]; 
            }
        }
    }
    return output; 
    
};
//Time Complexity: O(n)
//Space Complexity: O(n)
function nTwoSum(nums: number[], target: number): number[] {
    let output: number[] = [];
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 
        if(map.has(complement)) { 
            output = [map.get(complement)!, i]; 
        }
        map.set(nums[i], i); 
    }
    return output;

};

