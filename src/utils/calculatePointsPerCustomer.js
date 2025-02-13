export function calculateRewardPoints(amount) {
  let points = 0;
  
  if (amount > 100) {
    points += (amount - 100) * 2; // 2 points for every transaction above 100
    amount = 100;
  }
  if (amount > 50) {
    points += (amount - 50); // 1 point for every transaction between 50 and 100
  }
  return points;
}

export const calculatePointsPerCustomer = (transactions) => {
  const customerData = {};

  transactions.forEach((transaction) => {
    const { customerId, name, month, amount } = transaction;
    const points = calculateRewardPoints(amount);

    if (!customerData[customerId]) {
      customerData[customerId] = {
        customerId,
        name,
        monthlyTransactions: {},
        totalPoints: 0,
        totalAmount: 0,
      };
    }

    if (!customerData[customerId].monthlyTransactions[month]) {
      customerData[customerId].monthlyTransactions[month] = [];
    }

    customerData[customerId].monthlyTransactions[month].push({ amount, points });

    customerData[customerId].totalPoints += points;
    customerData[customerId].totalAmount += amount;
  });

  return customerData;
};
