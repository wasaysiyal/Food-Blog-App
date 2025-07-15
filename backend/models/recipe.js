const mongoose=require("mongoose")

const recipeScehma=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
       ingredients:{
        type:Array,
        required:true
    },
       instructions:{
        type:String,
        required:true
    },
       time:{
        type:String,
    },
       Coverimage:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports=mongoose.model("Recipes",recipeScehma)