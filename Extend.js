let ExtendArithmetic = require('./Arithmetic.js');
let AdvanceArithmetic = require('./AdvanceArithmetic.js');

module.exports = {
  ...ExtendArithmetic,
  ...AdvanceArithmetic
};


/*exports.AdvanceArithmetic = function() {
  console.log("---------------------------------------------")
  console.log("Extend Arithmetic Node Tutorial Calling...")
  const addition = ExtendArithmetic.AddNumber(10, 50);
  console.log("Extend Addition:- ", addition)

   this.Addition = () => {
    const addition = ExtendArithmetic.AddNumber(10, 50);
    console.log("Extend Addition:- ", addition)
  }

  this.Subtraction = () => {
    const Subtract = ExtendArithmetic.SubtractNumber(500, 100);
    console.log("Extend Subtraction:- ", Subtract)
  }
};*/
