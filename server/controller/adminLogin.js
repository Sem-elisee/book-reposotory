const {db} = require('../db/connect')
const jwt = require('jsonwebtoken')
const { v4 : uuidv4 } = require('uuid')
const sercretkey = uuidv4()
const bcrypt = require('bcrypt')

const getAdminLogin = (req,res) => {

    const query = 'SELECT * FROM  adminlogin'

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

const postAdminLogin = (req,res) => {

    const { email, mot_de_passe } = req.body;

    // const query = 'SELECT * FROM adminlogin WHERE email = ?';
    const query = 'SELECT * FROM adminlogin WHERE email = ? AND mot_de_passe = ?';

    db.query(query, [email, mot_de_passe], (err, result) => {
        if (err) {
            console.error('Erreur de base de données.');
            res.status(500).json({ error: 'Erreur de base de données' });
        } else{
            if (result.length === 1){
                // const user = rows[0];
                const token = jwt.sign({email},sercretkey,{expiresIn : '2h'})
                res.json({ token });
            }else {
                console.log('Échec de la connexion : email ou mot de passe incorrect.');
                res.status(401).json({ error: 'Échec de la connexion : email ou mot de passe incorrect' });
            }

        }})
    // db.query(query, [email], (err, rows) =>{
    //     if(err) {
    //         console.error('Erreur de base de données :', err);
    //         res.status(500).json({ error: 'Erreur de base de données' });
    //     }else if (rows.length === 1){
    //         const user = rows[0];
    //         bcrypt.compare(mot_de_passe, user.mot_de_passe, (compareErr, result) => {
    //             if(compareErr){
    //                 console.error('Erreur de comparaison de mot de passe :', compareErr);
    //                 res.status(500).json({ error: 'Erreur de comparaison de mot de passe' });
    //             }else if (result){
    //                 const token = jwt.sign({email},sercretkey,{expiresIn : '2h'})
    //                 res.json({ token });
    //             }else{
    //                 console.log('Échec de la connexion : email ou mot de passe incorrect.');
    //                 res.status(401).json({ error: 'Échec de la connexion : email ou mot de passe incorrect' });
    //             }
    //         })
    //     }else{
    //         console.log('Utilisateur non trouvé.');
    //         res.status(401).json({ error: 'Utilisateur non trouvé' });
    //     }
    // })
}

module.exports = {
    getAdminLogin,
    postAdminLogin
}