import './App.css'; 
import React from 'react';
import TransactionsList from './components/transactionList';

function App() {
  return (
    <div className="App">
      <h2>Customer Transaction Points</h2>
      <TransactionsList /> 
    </div>
  )
}

export default App;
