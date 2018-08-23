const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if (err) return console.log("Unable to connect MongoDb server"); 
    console.log("Connected To MongoDb Server");
    
    //deleteMany
    // db.collection('Todos').deleteMany({text : "Running in the morning"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text : "Drink Coffee"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    });


   // db.close();
}); 


