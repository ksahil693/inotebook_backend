const mongoose= require('mongoose');
const mongoURI ="mongodb+srv://sahil:1234@cluster0.l0sevxv.mongodb.net/test"


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo Succesfully")
    })
}


module.exports= connectToMongo;
