
import React from 'react';
import TransactionsList from './components/TransactionsList';
import './App.css'; 
const App = () => {
  return (
    <div className="App">
      <h2>Customer Transaction Points</h2>
      <TransactionsList />
    </div>
  );
};

export default App;
