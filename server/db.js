const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connect successfully')
})
.catch((err)=>{
    console.log("Connection failed")
})

module.exports = mongoose