
export function calculateRewardPoints(amount) {
    let points=0
    
    if (amount>100) {
      points+=(amount-100)*2; // 2 points for every transaction above 100
      amount=100 
    }
    if (amount>50) {
      points+=(amount - 50)// 1 point for every transaction between 50 and 100
    }
    return points
  }
  
  export const calculatePointsPerCust = (data) => {
    let customersOb = {}
    data.forEach((transaction) => {
      const {customerId,name,month,amount}=transaction
      const points=calculateRewardPoints(amount)
  
      if (!customersOb[customerId]) {
        customersOb[customerId] = {
          customerId,
          name,
          monthlyTransactions: {},
          totalPoints: 0,
          totalAmount: 0,
        }
      }
  
      if (!customersOb[customerId].monthlyTransactions[month]) {
        customersOb[customerId].monthlyTransactions[month] = []
      }
  
      customersOb[customerId].monthlyTransactions[month].push({amount,points})
      customersOb[customerId].totalPoints+= points
        customersOb[customerId].totalAmount+= amount
    })
    return customersOb
  };
  