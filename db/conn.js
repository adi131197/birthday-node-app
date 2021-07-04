const mongoose = require('mongoose')
const DB = process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        
        await mongoose.connect(DB, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        
        console.log('DB Connected Successfully..!!')
    } catch (err) {
        console.log('An Error occurred connecting to DB => ', err)
    }
}

connectDB()

