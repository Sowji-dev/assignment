export const getMonthsFromTransactions = (transactions) => {
    const months = new Set();
    transactions.forEach(transaction => {
      months.add(transaction.month);
    });
    return months
  };
  