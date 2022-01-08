const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// const bodyParser = require('body-parser');   //part1 point2

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');        //part#! point3
const booksRouter = require('./src/routes/booksroute');      
const authorsRouter = require('./src/routes/authorsroute'); 

const app = express();                      //part#1 point1 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(cors());                            // part#2 point7
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



// port name changed to 5000

app.listen(5000,()=>{
    console.log("Server Ready on 5000");            //part#1 point5
});