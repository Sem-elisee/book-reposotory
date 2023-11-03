const {db} = require('../db/connect')

const getEmpruntOnline = (req,res) => {

    const query = 'SELECT * FROM  emprunt_online'

    db.query(query, (err,result) => {
        if(err) {
            console.log('une erreur ces produis sur le code ');
            res.status(500).json({message : 'erreur server'})
        }else{
            console.log('Code enregistre avec succes');
            res.json(result)
        }
    })
}


function generateUniqueCode()  {
    // Générer un code alphanumérique unique
const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let uniqueCode = 'FixbookEmprunt';
for (let i = 0; i < 5; i++) {
uniqueCode += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
}
 return uniqueCode;
}

const postEmpruntOnline = (req, res) => {

    const code_emprunt  = generateUniqueCode()  
    const query = 'INSERT INTO emprunt_online (code_emprunt) VALUE (?)'

    // console.log(code_achat);
    db.query(query, [code_emprunt], (err, result) => {
        if (err) {
            console.log('Une erreur s\'est produite sur le code');
            res.status(500).json({ message: 'Erreur serveur' });
        } else {
            console.log('Code enregistré avec succès');
            res.json(result)
        }
    });
}

module.exports = {
    getEmpruntOnline,
    postEmpruntOnline
}