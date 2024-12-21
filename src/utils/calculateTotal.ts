const calculateTotal = (arr: any) => {
  let total = 0;
  arr.forEach((record: any) => (total += record.amount));
  return total;
};

export default calculateTotal;
