import { left, right } from "./input";

const leftPositionsSorted = left.sort((a, b) => a - b);
const rightPositionsSorted = right.sort((a, b) => a - b);

/**
 * Finds the total distance (absolute value) between two arrays of positions, each index at a time.
 *
 * Note: It is assumed that both arrays are the same length.
 *
 * @param leftPositions - An array of positions.
 * @param rightPositions - An array of positions.
 *
 * @returns A number representing the total absolute distance between each index from two arrays.
 */
function findTotalAbsoluteDistance(
  leftPositions: number[],
  rightPositions: number[],
): number {
  let sum = 0;

  for (let i = 0; i < leftPositions.length; i++) {
    sum += Math.abs(leftPositions[i] - rightPositions[i]);
  }
  return sum;
}

console.log(
  findTotalAbsoluteDistance(leftPositionsSorted, rightPositionsSorted),
);
