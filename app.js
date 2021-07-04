require('dotenv').config()
require('./db/conn')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(require('./routes/birthday'))

app.get('/', (req,res) => {
    res.send("Hello from server")
})

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`)
})
