const { db } = require("../db/connect")
const bcrypt = require('bcrypt')

const getUser = (req, res) => {
    const query = "SELECT * FROM users"
    db.query(query, (err,result) => {
        if(err) {
            console.log('erreur de connexion')
            res.status(500).json({err:'erreur'})
        }
        else{
            res.json(result)
        }
    })
}

const postUser = (req, res) => {
    
    const {
        email,
        username,
        userpassword
    } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            console.error("Erreur lors de la génération du sel.");
            res.status(500).json({ err: "Erreur" });
        }else{
            bcrypt.hash(userpassword, salt, (err, userpasswordhash) => {
                if (err) {
                    console.error("Erreur lors du hachage du mot de passe.");
                    res.status(500).json({ err: "Erreur" });
                }else{
                    const query = "INSERT INTO users (email, username, userpassword) VALUES (?, ?, ?)";

          db.query(query, [email, username, userpasswordhash], (err, result) => {
            if (err) {
                console.error("Erreur lors de l'insertion dans la base de données.");
                res.status(500).json({ err: "Erreur" });
            } else {
                res.json(result);
                }
            });
                } 
            })
        }
    })
    // const query = "INSERT INTO users (email, username, userpassword) VALUES (?, ?, ?)"

    // db.query(query, [email,username,userpassword], (err, result) => {
    //     if (err) {
    //         console.log("erreur de connexion");
    //         res.status(500).json({err:"erreur"})
    //     }   
    //     else{
    //         res.json(result)
    //     }
    // })


    // bcrypt.hash(userpassword, 10 , async(erreur,userpasswordhash) => {
    //     if(erreur) {
    //         res.status(500).json({message : 'une erreur'})
    //     }else{
    //         const query = "INSERT INTO users (email, username, userpassword) VALUES (?, ?, ?)"
    //         db.query(query, [email,username,userpasswordhash], (err, result) => {
    //             if (err) {
    //                 console.log("erreur de connexion");
    //                 res.status(500).json({err:"erreur"})
    //             }   
    //             else{
    //                 res.json(result)
    //             }
    //         })
    //     }
    // })
    
    
}

module.exports = { getUser, postUser }