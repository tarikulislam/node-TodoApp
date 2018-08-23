const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if (err) return console.log("Unable to connect MongoDb server"); 
    console.log("Connected To MongoDb Server");
    


    db.close();
}); 


