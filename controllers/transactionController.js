const transactions = require('../data/transactions.json');

exports.getTransactions = (req, res) => {
  const { startDate, endDate } = req.query;
  const filteredTransactions = transactions.filter(transaction => {
    const date = new Date(transaction.date).getTime();
    const isWithinDateRange = date >= new Date(startDate).getTime() && date <= new Date(endDate).getTime();
    const isValidStatus = ["COMPLETED", "IN PROGRESS", "REJECTED"].includes(transaction.status);
    return isWithinDateRange && isValidStatus;
  });
  res.json(filteredTransactions.sort((a, b) => b.date - a.date));
};

exports.loadData = (req, res) => {
  res.status(200).json({ message: 'Data loaded successfully' });
};
