const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if (err) return console.log("Unable to connect MongoDb server"); 
    console.log("Connected To MongoDb Server");
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5b7e1e0280a0051e3b8a42c5')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // }); 
   
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5b7e1f1dfae1e11e6e7a5a21')
    }, {
        $set: {
            name: 'Andrew'
        }, 
        $inc: {
            age: -5
        }
    }, {
        returnOriginal: false 
    }).then((result) => {
        console.log(result);
    }); 


   // db.close();
}); 


