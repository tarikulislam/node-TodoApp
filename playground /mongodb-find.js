const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if (err) return console.log("Unable to connect MongoDb server"); 
    console.log("Connected To MongoDb Server");
    
    // db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
    //     console.log('Todos'); 
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err); 
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Total Count ${count}`); 
        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err); 
    // });

    db.collection('Users').find({name: "Redwanul Karim"}).toArray().then( (docs) => {
        console.log('Users'); 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err); 
    });


   // db.close();
}); 


