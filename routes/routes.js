const express = require('express');

const Model = require('../model/model');

const router = express.Router();

router.post('/post', async (req, res) => {
    const data = new Model ({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const saveData = await data.save();
        res.status(200).json(saveData);
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})




router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});











router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await  Model.findByIdAndDelete(id);
        res.send (`Delete ${data.name}`);
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;