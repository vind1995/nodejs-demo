require( "../model/users" );
const mongoose = require( "mongoose" );

const Users = mongoose.model( "Users" );
/*
>> Create	 save()
>> Read  	 find(), findOne(), findById()
>> Update	 update(), findOneAndUpdate(), findByIdAndUpdate()
>> Delete	 remove(), findOneAndRemove(), findByIdAndRemove()
*/

// create user documents
/*for (let i=1; i<20; i++) {
  const user = new Users({
    userId:`Alex ${i}`,
    chips:10000,
    date: new Date(),
    isVerified: false
  });
  user.save((err, result) => {
    if(err){
      console.log('document save error', err)
    }else {
      console.log(result, "Document Save Done")
    }
  });
}*/

// Find User document
Users.findById('5e75c2f3e5046e2c6cca4857', 'userId chips').exec((err, result) => { console.log("findById:-", result) });
Users.findOne({ _id: "5e75c2f3e5046e2c6cca4857" }).select("chips userId").then(result => {
  console.log("findOne Result:- ", result)
}).catch(err => console.log("findOne error :- ", err));

// Find Multiple Users document
Users.find({ chips: 10000 }).then(result => {
  console.log("find Multiple Docs:- ", result.length)
}).catch(err => console.log("Find error :- ", err));


// Find One Document and Remove
Users.findByIdAndDelete('5e75c2f3e5046e2c6cca4858').exec((err, result) => { console.log("findByIdAndDelete:-", result) });
Users.findOneAndDelete({_id: '5e75c2f3e5046e2c6cca4858'}).then(result => {
  console.log("findOneAndRemove Result:- ", result)
}).catch(err => console.log("findOneAndRemove error :- ", err));


// Update documents
Users.replaceOne({ _id: '5e75c2f3e5046e2c6cca4857' }, { chips: 1000 }).exec((err, result) => { console.log("replaceOne:-", result) }); // replace object to new one
Users.findByIdAndUpdate('5e75c2f3e5046e2c6cca4857', { $set: { chips: 5000 }}).exec((err, result) => { console.log("findByIdAndUpdate:-", result) });
Users.updateOne({ chips: 5000 }, { chips: 1666 }).exec((err, result) => { console.log("updateOne:-", result) });
Users.updateMany({ chips: 5000 }, { chips: 1666 }).exec((err, result) => { console.log("updateMany:-", result) });
/*Users.update({ chips: { $lt:20000 } }, {chips:35000} , { multi:true }).then(result => {
  console.log("update Number of Records Effected", result);
}).catch(err => console.log("update error :- ", err));*/


// Remove user documents
Users.deleteOne({ chips: 35000 }).then(result => {
// Users.deleteMany({ chips: 35000 }).then(result => {
  console.log("Remove User Document:-", result);
}).catch(err => console.log("Remove error :- ", err));



// Using query builder
Users.
find({ chips: 20000 }).
where('userId').equals('Alex 1').
where('chips').gt(20000).lt(36000).
// where('subjects').in(['java', 'node js']).
limit(10).
sort('-userId').
select('userId chips').
exec((err, result) => {
  if(err){
    console.log('err from query builder',err)
  }else {
    console.log('result from query builder', result)
  }
});

// aggregate
const aggreGateQueryRun = async () => {
  try {
    const aggRes = await Users.aggregate([{ $match: { chips: 35000 } }])
    console.log("aggreGateQueryRun:- ", aggRes)
  }catch (e) {
    console.log(e)
  }
}

aggreGateQueryRun();
