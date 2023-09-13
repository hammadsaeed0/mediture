const mongoose = require("mongoose");
// "mongodb://wajahatkhan:Shazar098@ac-mibsd1j-shard-00-00.whd3uqp.mongodb.net:27017,ac-mibsd1j-shard-00-01.whd3uqp.mongodb.net:27017,ac-mibsd1j-shard-00-02.whd3uqp.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ehrry-shard-0&authSource=admin&retryWrites=true&w=majority"
// process.env.MONGO_CONNECTION
function connect() {
    mongoose.connect("mongodb://wajahatkhan:Shazar098@ac-mibsd1j-shard-00-00.whd3uqp.mongodb.net:27017,ac-mibsd1j-shard-00-01.whd3uqp.mongodb.net:27017,ac-mibsd1j-shard-00-02.whd3uqp.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ehrry-shard-0&authSource=admin&retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }, () => {
        console.log("db connected");
    });
}

module.exports = connect;
