var express = require('express'); 
var bodyParser = require('body-parser');

// db variables
var { mongoose }    =   require('./db/mongoose'); 
var { Todo }        =   require('./models/todo'); 
var { User }        =   require('./models/user'); 
const { ObjectID } = require('mongodb');


//express app variable
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc); 
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })

});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {

    var id = req.params.id;  
    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findById(id).then((todo) => {
        if(!todo) return res.status(404).send();
        res.send({todo});
    }, (e) => {
        return res.status(400).send({});
    });

});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running At Port ${PORT}`);
});

module.exports = {
    app
}