import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food item

const addFood = async (req,res) => {

    let image_filename = await req.file.image;

    const food = new foodModel({
        name : req.body.name,
        description : req.file.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })
    try{
        await food.save();
        res.json({success : true, message : "Food added"})
    }
    catch (error) {
        console.log(error)
        res.json({success : false, message : "Error"})
    }

}

export {addFood};