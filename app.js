const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');   //part1 point2
const PORT = 5000;

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

const app = new express;                      //part#1 point1 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(cors());                            // part#2 point7
app.use(bodyParser.urlencoded({extended:true}));
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




app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);            //part#1 point5
});