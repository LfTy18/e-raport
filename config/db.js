const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Connect DB
const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://LfTy18:0NNDF96DCi43WaBB@cluster0.7stihcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {

        });
        console.log(`Database Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Database no Connected!`, error);
    }
};

module.exports = connectDB;