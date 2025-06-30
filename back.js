const express= require('express');
const app=express();
const userModel= require('./models/user');
const dbConnection= require('./config/db');

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => {
    console.log('MongoDB connected successfully');
});

 app.set('view engine','ejs');
 app.use(express.static('public'));
 app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/index',(req,res)=>
    {
        console.log('POST /index called with body:', req.body);
        const user= new userModel({
            Name: req.body.Name,
            Email: req.body.Email,
            Subject: req.body.Subject,
            Describe_Project: req.body.Describe_Project,
            Password: req.body.Password
        });
        user.save().then(()=>{
            console.log('User saved successfully');
            res.render('index');
        }).catch((err)=>{
            console.error('Error saving user:', err);
            res.status(400).send("Error");
        });
    }
    
);

app.listen(3000)
