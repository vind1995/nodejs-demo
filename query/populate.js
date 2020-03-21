require( "../model/users" );
require( "../model/subjects" );
const mongoose = require( "mongoose" );

const Users = mongoose.model( "Users" );
const Subjects = mongoose.model( "Subjects" );

const createSubjectAndUsers = async () => {
 try{
    const subjects = ['nodejs', 'reactjs', 'vuejs', 'nextjs', 'gatsby'];
    const subjectArr = [];
    for (let subjectName of subjects) {
      subjectArr.push({
        name: subjectName,
        description: `${subjectName} is javascript framework`
      })
    }

    // create subject documents
   const newSubjects = await Subjects.insertMany(subjectArr);
   const subjectIds = newSubjects.map(sub => sub._id);
   console.log('subjectIds:-', newSubjects.map(sub => sub._id))

   // create user documents
   for (let i=1; i<20; i++) {
     const user = new Users({
       userId:`Alex ${i}`,
       chips:10000,
       date: new Date(),
       isVerified: false,
       subjectId: subjectIds[Math.floor(Math.random() * subjectIds.length)]
     });
     await user.save((err, result) => {
       if(err){
         console.log('document save error', err)
       }else {
         console.log(result, "Document Save Done")
       }
     });
   }
 }catch (e) {
   console.log('createSubjectAndUsers:- ', e)
 }
};

// createSubjectAndUsers();

Users
  .findOne({ userId: 'Alex 1' })
  .populate('subjectId')
  .exec((err, user) => {
    if (err) return console.log(err);
    console.log('The user is ', user);
  });