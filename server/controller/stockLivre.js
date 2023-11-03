const { db } = require("../db/connect")

const getStockLivre = (req, res) => {
    const query = "SELECT * FROM stock_livres"
    db.query(query, (err,result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données :', err);
            res.status(500).json({ error: 'Erreur lors de l\'insertion dans la base de données' });
          } else {
            res.status(200).json(result);
        }
    })
}

const postStockLivre = (req, res) => {
    const {nom_du_livre,auteur,etat,categorie,date,montant,couverture,quantite} = req.body

    const query = 'INSERT INTO stock_livres (nom_du_livre, auteur, etat, categorie, date, montant, couverture, quantite) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query( query,[nom_du_livre, auteur, etat, categorie, date, montant, couverture, quantite],
        (err, result) => {

          if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données :', err);
            res.status(500).json({ error: 'Erreur lors de l\'insertion dans la base de données' });
          } else {
            res.status(200).json({ message: 'Données insérées avec succès' });
          }
        }
      );
}

// Fonction pour supprimer un élément du stock de livres par son ID
const deleteStockLivre = (req, res) => {
  const { id } = req.params; // Récupérer l'ID de l'élément à supprimer depuis les paramètres de la requête

  const query = 'DELETE FROM stock_livres WHERE id_stock = ?';

  db.query(query, [id], (err, result) => {
      if (err) {
          console.error('Erreur lors de la suppression dans la base de données :', err);
          res.status(500).json({ error: 'Erreur lors de la suppression dans la base de données' });
      } else {
          if (result.affectedRows > 0) {
              res.status(200).json({ message: 'Élément supprimé avec succès' });
          } else {
              res.status(404).json({ error: 'L\'élément n\'existe pas' });
          }
      }
  });
};


module.exports = {
    postStockLivre,
    getStockLivre,
    deleteStockLivre
}