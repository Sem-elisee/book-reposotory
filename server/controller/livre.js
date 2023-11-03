// const { json } = require("express")
const {db} = require("../db/connect")

const getLivre = (req, res) => {
    const query = ' SELECT * FROM livres'
    db.query(query, (err,result) => {
        if(err) {
            console.log("erreur de connection");
            res.status(500).json({err:'erreur'})
        }else{
            res.json(result)
        }
    })
}

const postLivre = (req, res) => {
    console.log(req.body);
    const query = 'INSERT INTO livres (nomlivre, auteurlivre, descriptonlivre, datelivre, prixlivre, categorielivre, couvertureslivre,etatlivre) VALUE (?, ?, ?, ?, ?, ?, ?, ?)'

    const {nomlivre, auteurlivre, descriptonlivre,datelivre, prixlivre, categorielivre,couvertureslivre,etatlivre} = req.body

    db.query(query, [nomlivre, auteurlivre, descriptonlivre,datelivre, prixlivre, categorielivre,couvertureslivre,etatlivre], (err, result) => {
        if(err) {
            console.log("erreur de connection");
            res.status(500).json({err:'erreur'})
        }else{
            res.json(result)
        }
    })

}

module.exports = {
    postLivre,
    getLivre
}