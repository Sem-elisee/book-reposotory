const { db } = require('../db/connect')

const postLogout = (req,res) => {
    db.end((err) => {
        if(err) {
            console.error('erreur lors de la fermeture')
        }else{
            console.log('Déconnexion de la base de données MySQL réussie');
        }
        res.status(200).json({ message: 'Déconnexion réussie' })
    })
}

const getLogout = (req,res) => {
    db.end((err) => {
        if(err) {
            console.error('erreur lors de la fermeture')
        }else{
            console.log('Déconnexion de la base de données MySQL réussie');
        }
        res.status(200).json({ message: 'Déconnexion réussie' })
    })
}

module.exports = {
    postLogout,
    getLogout
}