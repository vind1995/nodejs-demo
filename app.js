let express = require('express');
// require('./EventEmitter');
let app = express();

require( "./mongoose" )( app );

app.set('view engine','jade');

app.get('/',function(req,res) {
  console.log("Express running...")
  res.render('StudentList', { studentList: [ { StudentName: "Test 1" }, { StudentName: "Test 2" } ] });
});

app.get('/username',function(req,res) {
  console.log("Express running username...")
  res.status(200).json("Vinit Devani")
});

app.get('/user/username',function(req,res) {
  console.log("Express running username...")
  res.status(200).json("Vinit Devani 123")
});


const PORT = 3000;

app.listen(PORT,function()  {
  try {
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.log("Server init error", err);
  }
});



let ExtendArithmetic = require('./Extend.js');

console.log("Addition:-", ExtendArithmetic.AddNumber(1,2));
console.log("Subtraction:-", ExtendArithmetic.SubtractNumber(10,5));
console.log("Multiply:-", ExtendArithmetic.MultiplyNumber(10,5));
console.log("Multiply:-", ExtendArithmetic.CheckValueOddOrEven(10));

/* Extend Arithmetic */
console.log("Extend Addition:-", ExtendArithmetic.AddNumber(10, 50));
ExtendArithmetic.CheckValueOddOrEven(55)
ExtendArithmetic.CheckValueOddOrEven(60)

// ExtendArithmetic.AdvanceArithmetic.Addition()
// Extend.AdvanceArithmetic.Subtraction()



/*
npm install express –global
npm list --global
npm install underscore@1.7.0
npm update underscore
npm search express
npm uninstall express
*/
