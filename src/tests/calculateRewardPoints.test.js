import { calculateRewardPoints } from '../utils/rewardCalculator';

describe('calculateRewardPoints', () => {
  test('should calculate 0 points for amounts under 50', () => {
    expect(calculateRewardPoints(40)).toBe(0); 
  });

  test('should calculate 1 point for each dollar between 50 and 100', () => {
    expect(calculateRewardPoints(60)).toBe(10);
    expect(calculateRewardPoints(95)).toBe(45); 
  });

  test('should calculate 2 points for every dollar over 100', () => {
    expect(calculateRewardPoints(120)).toBe(90); 
  });

  test('should calculate the combined points correctly for amounts greater than 100', () => {
    expect(calculateRewardPoints(140)).toBe(130); 
  });
});
