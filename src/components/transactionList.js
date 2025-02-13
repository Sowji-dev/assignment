import React, { useState, useEffect, useMemo } from 'react';  // Add useMemo import
import axios from 'axios';
import CustomerRecord from './customerRecord';  // Correct capitalization
import { calculatePointsPerCustomer } from '../utils/calculatePointsPerCustomer';

function TransactionList () {
  const [customersData, setCustomersData] = useState([]);
  const [selectedCustomerID, setSelectedCustomerID] = useState('');
  const [selectedCustomerData, setSelectedCustomerData] = useState({});

  useEffect(() => {
    axios
      .get('/mockData/transactions.json')
      .then(response => {
        let responseData = calculatePointsPerCustomer(response.data);
        setCustomersData(Object.values(responseData));
      })
  }, []);  

  const memoizedCustomersData = useMemo(() => customersData, [customersData]);

  const handleChange = e => {
    setSelectedCustomerID(e.target.value);
    const result = memoizedCustomersData.find(
      customer => customer.customerId === e.target.value
    );
    setSelectedCustomerData(result);
  };

  return (
    <>
      <select className='customer-select'
        value={selectedCustomerID}
        onChange={handleChange}
      >
        <option value="">Select a Customer</option>
        {memoizedCustomersData.map((customer, i) => (
          <option value={customer.customerId} key={i}>
            {customer.name}
          </option>
        ))}
      </select>

      {selectedCustomerData.customerId && (
        <table className='rewards-table'>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            <CustomerRecord customer={selectedCustomerData} />
          </tbody>
        </table>
      )}
    </>
  );
}

export default TransactionList;
