const { db } = require('../db/connect')

const getAchat = (req,res) => {

    const query = 'SELECT * FROM achat_physique'

    db.query(query, (err,result) => {
        if(err) {
            console.log('connexion a echouer');
            res.status(500).json({err:'erreur'})
        }else{
            console.log('connexion effectuer');
            res.json(result)
        }
    })

}

const postAchat = (req,res) => {

    const query = 'INSERT INTO achat_physique (code_achat,nom_livre, montant, matricule, date_achat, Votre_nom)  VALUE (?,?,?,?,?,?)'
    const {code_achat,nom_livre, montant, matricule, date_achat, Votre_nom} = req.body

    db.query(query, [code_achat,nom_livre, montant, matricule, date_achat, Votre_nom], (err, result) => {
        if(err) {
            console.log('connexion a echouer');
            res.status(500).json({err:'erreur'})
        }else{
            console.log('connexion effectuer');
            res.json(result)
        }
    }) 
}


module.exports = {
    getAchat,
    postAchat
}
