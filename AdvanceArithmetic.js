const CheckValueOddOrEven = (value) => {
  const result = value % 2 === 0 ? "even" : "odd"
  console.log(value, result)
  return value % 2 === 0 ? "even" : "odd";
};

module.exports = {
  CheckValueOddOrEven
};
