import { calculateRewardPoints } from '../utils/calculatePointsPerCustomer'
describe('Reward points calculation',()=>{
  test('calculates points for amount below 50',()=>{
    const amount = 30  
    const points = calculateRewardPoints(amount)    
    expect(points).toBe(0)  
  })  
  test('calculates points for amount exactly 50', ()=>{
    const amount = 50  
    const points = calculateRewardPoints(amount)    
    expect(points).toBe(0)   // No points for amount <= 50
  })  

  test('calculates points for amount exactly 100',()=>{
    const amount = 100  
    const points = calculateRewardPoints(amount)    
    expect(points).toBe(50)   // 1 point for every dollar between 50 and 100
  })  
  test('calculates points for amount between 50 to 100',()=>{
    const amount = 86  
    const points = calculateRewardPoints(amount)    
    expect(points).toBe(36)   // 1 point for the first 50 dollars, 2 points for 1 dollar anbove 100
  })  

  test('calculates points for amount above 100',()=>{
    const amount = 150  
    const points = calculateRewardPoints(amount)    
    expect(points).toBe(150)   // 1 point for the first 50 dollars,2 points for the next 100 dollars
  })  
})  
