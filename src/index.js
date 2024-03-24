const express=require('express');
const morgan=require('morgan');
const mongoose=require("mongoose");
const app=express();
mongoose.connect('mongodb://localhost/almacen-databse')
.then(db => console.log('DB is connected'))
.catch(err =>console.error(err));
app.set('port',process.env.PORT || 3007);
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use('/user', require('./routes/user'))

// static files
app.use(express.static(__dirname+'/public'));

app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'))
});



