import React, { useState, useEffect } from 'react';
import { calculatePointsPerCust } from '../utils/calculatePointsPerCust';
import axios from 'axios';
import ShowEachCustomer from './ShowEachCustomer';

const TransactionsList = () => {
  const [custData,setCustData]=useState([])
  const [sortOrder, setSortOrder] = useState(null);
  const getTransactions = async () => {
    try {
      const response = await axios.get('/transactions.json'); 
      let responseData=calculatePointsPerCust(response.data)
      setCustData(Object.values(responseData))
      
      
    } catch (err) {
      console.error( err);
    }
  };
  useEffect(() => {
     getTransactions(); 
  }, []);
  const sortedData = sortOrder ? 
    [...custData].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.totalPoints - b.totalPoints;
      } else if (sortOrder === "descending") {
        return b.totalPoints - a.totalPoints;
      }
    })
    : custData; 

  return (
    <>
      <div className='select-div'>
      <select value={sortOrder || ""} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort Reward points</option> 
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
     
      <table className="table-border">
        <thead>
            <th>Customer ID</th>
            <th>Name</th>
            <th>January</th>
            <th>February </th>
            <th>March </th>
            <th>Reward points</th>
        </thead>
        <tbody>
            {
                sortedData.map((cust,i)=>{
                    return <ShowEachCustomer cust={cust}></ShowEachCustomer>
                })
            }
            </tbody>
      </table>
    </>
  );
};

export default TransactionsList;
