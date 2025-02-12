import React from 'react';

function ShowEachCustomer({ cust }) {
  return (
    <tr>
      <td>{cust.customerId}</td> 
      <td>{cust.name}</td> 
      {Object.entries(cust.monthlyTransactions).map(([month, transactions], index) => (
        <td key={index}>
          <div>
            {transactions.map((transaction, id) => (
              <div key={id}>
                <div>Amount: {transaction.amount}$</div>
                <div>Reward Points: {transaction.points}</div>
                <hr />
              </div>
            ))}
            <div>
              Monthly Points: <strong>{transactions.reduce((acc, trans) => acc + trans.points, 0)}</strong>
            </div>
          </div>
        </td>
      ))}
      <td><strong>{cust.totalPoints}</strong></td> 
    </tr>
  );
}

export default ShowEachCustomer;
