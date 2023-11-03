const { db } = require('../db/connect')

const getEmprunt = (req, res) => {
    const query = 'SELECT * FROM emprunt_physique'

    db.query(query, (err, result) => {
        if(err) {
            console.log('connexion non effectuer');
            res.status(500).json({err:'erreur'})
        }else{
            res.json(result)
        }
    })
}

const postEmprunt = (req, res) => {
    const query = 'INSERT INTO emprunt_physique (code_emprunt, nom_livre, periode, matricule_abonnes, date_emprunt, montant, Votre_nom) VALUE (?, ?, ?, ?, ?, ?, ?)'
    const {code_emprunt, nom_livre, periode, matricule_abonnes, date_emprunt, montant,Votre_nom} = req.body

    db.query(query, [code_emprunt, nom_livre, periode, matricule_abonnes, date_emprunt, montant, Votre_nom], (err, result) => {
        if(err) {
            console.log("erreur de connexion");
            res.status(500).json({err:'erreur'})
        }else{
            console.log('connexion effectuer');
            res.json(result)
        }
    })
}

module.exports = {
    postEmprunt,
    getEmprunt
}