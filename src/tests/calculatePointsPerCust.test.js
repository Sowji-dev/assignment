import { calculatePointsPerCust } from '../utils/calculatePointsPerCust';

const testTransactions = [
  { "customerId": "123", "name": "Amit Sharma", "month": "January", "amount": 120 },
  { "customerId": "123", "name": "Amit Sharma", "month": "February", "amount": 60 },
  { "customerId": "456", "name": "Priya Patel", "month": "January", "amount": 150 },
  { "customerId": "456", "name": "Priya Patel", "month": "February", "amount": 78 },
];

describe('calculatePointsPerCust', () => {
  test('should calculate total points and monthly points for customers', () => {
    const result = calculatePointsPerCust(testTransactions);

    expect(result["123"].totalPoints).toBe(100); 
    expect(result["123"].monthlyPoints["January"]).toBe(90);
    expect(result["123"].monthlyPoints["February"]).toBe(10);

    expect(result["456"].totalPoints).toBe(178); 
    expect(result["456"].monthlyPoints["January"]).toBe(150);
    expect(result["456"].monthlyPoints["February"]).toBe(28);
  });

  test('should return empty object for no transactions', () => {
    const result = calculatePointsPerCust([]);
    expect(result).toEqual({});
  });
});
