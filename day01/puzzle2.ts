import { left, right } from "./input";

/**
 * Determines the total "similarity score" between two arrays of numbers.
 *
 * A "similarity score" represents the occurence of a number from `numsOne` in `numsTwo`,
 * multiplied by itself. The total similarity score represents the sum of all similarity
 * scores from `numsOne`.
 *
 * @param numsOne - The first array of numbers.
 * @param numsTwo - The second array of numbers.
 *
 * @returns - The total similarty score of all nums from `numsOne`.
 */
function calculateTotalSimilarityScore(
  numsOne: number[],
  numsTwo: number[],
): number {
  const numsTwoFrequencies = getFrequencyMap(numsTwo);

  let totalSimilarityScore = 0;

  for (const num of numsOne) {
    const frequencyInNumsTwo = numsTwoFrequencies.get(num) || 0;
    const similarityScore = num * frequencyInNumsTwo;

    totalSimilarityScore += similarityScore;
  }

  return totalSimilarityScore;
}

/**
 * Returns a hash map representing the frequency of each number from an array.
 *
 * @param nums - An array of numbers.
 *
 * @returns A hashmap containing each unique number from the original array (as the key)
 * and the frequency of that number (as the value).
 */
function getFrequencyMap(nums: number[]) {
  const frequencyMap = new Map<number, number>(); // {number: frequencyOfThatNumber}

  for (const num of nums) {
    const currentFrequency = frequencyMap.get(num) || 0;
    frequencyMap.set(num, currentFrequency + 1);
  }

  return frequencyMap;
}

console.log(calculateTotalSimilarityScore(left, right));
