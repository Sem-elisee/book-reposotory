const { db } = require('../db/connect')
const jwt = require('jsonwebtoken')
const { v4 : uuidv4 } = require('uuid')
const sercretkey = uuidv4()
const bcrypt = require('bcrypt')



const getLogin = (req, res) => {
    const query = 'SELECT * FROM users'
    db.query(query, (err, result) => {
        if(err) {
            console.log('erreur de requete')
            res.status(500).json(err)
        }else{
            res.json(result)
            console.log("Connexion réussie !")
        }
    })
}

const postLogin = (req, res) => {

    const {email, userpassword} = req.body
    const query = 'SELECT * FROM users WHERE email =?'

    db.query(query, [email], (err, result) => {
        if(err){
            return res.status(500).json({message : 'erreur lors de la recherche'})
        }
        if(result.length === 0){
            return res.status(401).json({message : "l'utilisateur n'existe pas"})
        }

        const user = result[0]

        bcrypt.compare(userpassword, user.userpassword, (err, ismatch) => {
            if(err){
                return res.status(500).json({message : 'erreur lors de la verification'})
            }
            if(!ismatch){
                res.status(401).json({message : 'mot de passe incorrect'})
            }

            const token = jwt.sign({email}, sercretkey, {expiresIn: '1h'});
            return res.status(200).json({message : 'connexion reuisir', token})

            // , username : user.username
        })
    })

    // db.query(query, [email], (err, rows) => {
    //     if (err) {
    //         console.error('Erreur de base de données.');
    //         res.status(500).json({ error: 'Erreur de base de données' });
    //     }else{
    //         if (rows.length === 0) {
    //         res.status(401).json({ error: 'Utilisateur non trouvé' });
    //         }else{
    //             const user = rows[0];
    //             bcrypt.compare(userpassword, user.userpassword, (compareErr, result) => {
    //                 if (compareErr){
    //                     console.error('Erreur de comparaison de mot de passe.');
    //                     res.status(500).json({ error: 'Erreur de comparaison de mot de passe' });

    //                 }else if (result){
    //                     // const token = jwt.sign({email},sercretkey,{expiresIn : '2h'})
    //                     // res.json({ token , username : result[0].username});
    //                     console.log(result);
    //                 }else{
    //                     res.status(401).json({ error: 'Mot de passe incorrect' });
    //                     console.log('mot de passe Incorrect');
    //                 }
    //             })
    //         }
    //     }
















        
        
        // if(err) {
        //     console.log('erreur de requete')
        //     res.status(500).json(err)
        // }else{
            // if(result.length > 0) {
            //     // console.log('Connexion réussie !');
            //     // res.json({ message: 'Connexion réussie' })
            //     const token = jwt.sign({email},sercretkey,{expiresIn : '2h'})
            //     return res.status(200).json({token})      
            //     // {token}
            // }else{
            //     console.log('Échec de la connexion : email ou mot de passe incorrect.')
            //     res.status(401).json({ message: 'Échec de la connexion : email ou mot de passe incorrect.' })
            // }
            // res.json(result)
            // console.log("Connexion réussie !")
    //     }
    // })
//     })
}

module.exports = {
    getLogin,
    postLogin
}