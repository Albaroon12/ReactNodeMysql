var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var app = express();
var PORT = process.env.PORT || 8081

//urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname,'./frontend/dist')))


//give the database connecting information
var connection = mysql.createConnection({

    host: "localhost",
    user: "ali_23",
    password: "alicd200",
    database:"student"
})

//give all requests an react page 
app.get('*',(req,res)=>{
    res.sendFile(__dirname,'./frontend/dist/index.html')
})
//get the requsets from url 
app.get('/students/:id', function(req, res){
    var userID = req.params.id
    const sql = 'SELECT * FROM information_student WHERE id=?';
    connection.query(sql, [userID], (err , data )=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//get all users
app.get('/students', function(req, res){
    connection.query('SELECT * FROM information_student', (err , data )=>{
        if(err) return res.json(err)
        return res.json(data)
        
    })
});

//listen the server on the

var server = app.listen(PORT , function(){
    console.log('server listening on port :  '+PORT)
})