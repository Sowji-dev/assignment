import React from 'react';
import PropTypes from 'prop-types';  

function CustomerRecord({ customer }) {
  return (
    <tr>
      <td>{customer.customerId}</td>
      <td>{customer.name}</td>
      {Object.entries(customer.monthlyTransactions).map(([, transactions], index) => (
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
      <td><strong>{customer.totalPoints}</strong></td>
    </tr>
  );
}

CustomerRecord.propTypes = {
  customer: PropTypes.shape({
    customerId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    monthlyTransactions: PropTypes.object.isRequired, 
    totalPoints: PropTypes.number.isRequired,
  }).isRequired,
};

export default CustomerRecord;
