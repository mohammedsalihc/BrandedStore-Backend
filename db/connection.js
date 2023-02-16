const mongoose = require('mongoose')
const DB = "mongodb+srv://MohammedSalih:lZNAaxuQd8WvrZb2@cluster0.jyodk1u.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected')).catch((error) => console.log("error",error.message))