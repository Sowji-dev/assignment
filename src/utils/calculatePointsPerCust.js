import { calculateRewardPoints } from './rewardCalculator'; 

export const calculatePointsPerCust = (data) => {
    let customersOb = {};

    data.map((transaction) => {
        const { customerId, name, month, amount } = transaction;
          const points = calculateRewardPoints(amount);
            if (!customersOb[customerId]) {
            customersOb[customerId] = {
                customerId,
                name,
                monthlyPoints: {},
                totalPoints: 0,
                totalAmount: 0
            };
        }
        if (!customersOb[customerId].monthlyPoints[month]) {
            customersOb[customerId].monthlyPoints[month] = 0;
        }
      customersOb[customerId].monthlyPoints[month] += points;
        customersOb[customerId].totalPoints += points;
        customersOb[customerId].totalAmount += amount;
    });

    return customersOb;
};
