import React, { useState, useEffect } from 'react';
import { calculatePointsPerCust } from '../utils/calculatePointsPerCust';
import axios from 'axios';
import ShowEachCustomer from './ShowEachCustomer';

const TransactionsList = () => {
  const [custData, setCustData] = useState([])
  const [selectedCustID, setSelectedCustID] = useState("")
  const [selectedCustData, setSelectedCustData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/mockData/transactions.json')
      .then(response => {
        let responseData = calculatePointsPerCust(response.data)
        setCustData(Object.values(responseData))
      })
      .catch(err => {
        setError('Failed to load data. Please try again later.')
      })
  }, [])

  const handleChange = (e) => {
    const selectedId = e.target.value
    setSelectedCustID(selectedId)
    if (selectedId === "") {
      setSelectedCustData({})
      return;
    }
    const customer = custData.find(cust => cust.customerId === selectedId)
    setSelectedCustData(customer || {})
  }

  return (
    <>
      {
        error ? <div>{error}</div> : 
        <>
          <select className='cust-select' value={selectedCustID} onChange={handleChange}>
            <option value="">Select a Customer</option>
            {
              custData.map((cust, i) => {
                return <option key={i} value={cust.customerId}>{cust.name}</option>;
              })
            }
          </select>
          {
            selectedCustData.customerId && 
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
                <ShowEachCustomer cust={selectedCustData} />
              </tbody>
            </table>
          }
        </>
      }
    </>
  );
};

export default TransactionsList;
