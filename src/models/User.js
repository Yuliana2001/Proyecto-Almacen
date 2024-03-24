//esquemas de la bd
const mongoose=require('mongoose');
const {Schema}= mongoose;


const User=new Schema({
  email: String,
  contrasena:String,
  rol:String,
  task: [{  
    articulo: String,
    provedor: String,
    fecha: Date}]
});

module.exports=mongoose.model('User',User);