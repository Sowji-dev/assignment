import { calculatePointsPerCustomer } from '../utils/calculatePointsPerCustomer' 
describe('Reward Points Calculation per customer', () => {
   test('calculates total points  for a customer with multiple transactions per month', () => {
    const testData = [
      { customerId: '123', name: 'Amit Sharma', month: 'January', amount: 150 },
      { customerId: '123', name: 'Amit Sharma', month: 'January', amount: 80 },
      { customerId: '123', name: 'Amit Sharma', month: 'February', amount: 75 },
      { customerId: '123', name: 'Amit Sharma', month: 'February', amount: 25 },
      { customerId: '123', name: 'Amit Sharma', month: 'March', amount: 50 },
      { customerId: '123', name: 'Amit Sharma', month: 'March', amount: 110 },
    ] 
    const result = calculatePointsPerCustomer(testData) 
    const customer = result['123'] 
    expect(customer.totalPoints).toBe(275)  //180 points from January, 25 points from February, 70 points from March 
  }) 
  test('calculates total points correctly for a customer with no qualifying transactions in a month', () => {
    const testData = [
      { customerId: '124', name: 'Priya Patel', month: 'January', amount: 40 },
      { customerId: '124', name: 'Priya Patel', month: 'January', amount: 30 },
      { customerId: '124', name: 'Priya Patel', month: 'February', amount: 45 },
      { customerId: '124', name: 'Priya Patel', month: 'February', amount: 60 },
      { customerId: '124', name: 'Priya Patel', month: 'March', amount: 50 },
      { customerId: '124', name: 'Priya Patel', month: 'March', amount: 55 },
    ] 
    const result = calculatePointsPerCustomer(testData) 
    const customer = result['124'] 
    expect(customer.totalPoints).toBe(15)  // 10 points for Feb and 5points for March
   }) 
}) 
