import React from 'react'

function ShowEachCustomer({cust}) {
    console.log(cust)
  return (
    <tr>
         <td>{cust.customerId}</td>
        <td>{cust.name}</td> 
        {
            Object.entries(cust.monthlyPoints).map((pointsAr) => (
            <td >
            {pointsAr[1]} 
            </td>
            
            ))
        }
        <td>{cust.totalPoints}</td>
     </tr>
  )
}

export default ShowEachCustomer
