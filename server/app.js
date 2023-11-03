const express = require("express")
const { connectDB } = require("./db/connect")
const app = express()

const register = require("./routes/register.routes")
const login = require("./routes/login.route")
const adminLogin = require("./routes/adminLogin.route")
const logout = require("./routes/logout.route")

const livre = require('./routes/livre.route')
const StockLivres = require('./routes/stockLivre.route')
const DeleteStockLivres = require('./routes/stockLivre.route')
const emprunt_physique = require('./routes/emprunt.route')
const achat_physique = require('./routes/achat.route')

const achat_onligne = require('./routes/AchatOnline.route')
const emprunt_online = require('./routes/empruntOnline.route')
// const bodyParser = require('body-parser');

const cors = require('cors')

// app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use("/api/v1/register", register)
app.use('/api/v1/login', login)
app.use('/api/v1/adminLogin', adminLogin)
app.use('/api/v1/logout', logout)

app.use('/api/v1/livres', livre)
app.use('/api/v1/StockLivres', StockLivres)
app.use('/api/v1/DeleteStockLivres', DeleteStockLivres)


app.use('/api/v1/achat_online', achat_onligne)
app.use('/api/v1/emprunt_online', emprunt_online)
app.use('/api/v1/emprunt_physique', emprunt_physique)
app.use('/api/v1/achat_physique', achat_physique)


// gerer le cas d'erreur pour pour le lancement du server 

const start = async () => {
    try{
        await connectDB()
        app.listen(8800, () => {
            console.log(`Connected`)
        })        
    }
    catch(e){
        console.error(e);
    }
}

start()




