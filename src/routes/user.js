const express=require('express');
const router=express.Router(); //crea un objeto para poder definir rutas, encargado de obtener todas las rutas
const User=require('../models/User');
router.get('/',async (req,res)=>{
    const user=await User.find();
    console.log(user);
    res.json(user);
});

router.get('/:id', async (req,res) => {
const user=await User.findById(req.params.id);
res.json(user);
});

router.post('/',async(req, res)=>{
    const user=new User(req.body); //todos los datos del navegador que me está dando, los almaceno en un nuevo obj
    await user.save();
    console.log(user);
    res.json({
        status:'Usuario guardado'
    }
    );
});

router.put('/:id',async(req, res)=>{
    const user=await User.findById(req.params.id);
    await user.save();
    console.log(user);
    await User.findByIdAndUpdate(req.params.id,req.body);

    res.json({
        status:'Tarea de usuario guardado'
    }
    );
});

router.delete('/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
        status:'Usuario eliminado'
    });
});

module.exports=router;
