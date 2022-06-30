const mongoose= require('mongoose');
const mongoURI ="mongodb+srv://sahil:1234@cluster0.czxavu4.mongodb.net/iNoteBook"


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo Succesfully")
    })
}


module.exports= connectToMongo;
