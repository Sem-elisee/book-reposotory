const mySql = require("mysql")

const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "fixbook_database"
})

const connectDB = () => {
    db.connect(err => {
        if(err){
            console.log('erreur de la connexiond de db')
        }else{
            console.log("connection reuissir");
        }
    })
}

module.exports = {
    connectDB, db
}