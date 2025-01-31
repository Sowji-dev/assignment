
export const fetchTransactions = async () => {
   
      const response = await fetch('/transactions.json');  
      const data = await response.json();
      return data; 
   
  };
  