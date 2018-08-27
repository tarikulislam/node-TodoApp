const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const{ObjectID} = require('mongodb');

var userId = '5b80b6350ee9615116e0c3e7';

User.findById(userId).then((user) => {
    if(!user) return console.log('User not found');
   // console.log('User: ', user);    
   //var user = JSON.stringify(user, undefined, 2);
    console.log(user["email"]);
});

// var id = '5b833f243a46f57b13b00efd+';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id     
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) return console.log('id not found.');
//     console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));