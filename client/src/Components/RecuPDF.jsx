import { Document, Page, Text, View,Image, StyleSheet } from '@react-pdf/renderer'

export default function RecuPDF({item}) {

  const styles = StyleSheet.create({
    page: {
      paddingTop: 50,
      flexDirection: 'column',
      height: '100%',
    },
    tiret: {
      paddingTop: 40,
    },
    part1: {
      paddingTop: 9,
      width: 270,
      height: 40,
      backgroundColor:  "yellow",
    },
    titre: {
      textAlign: 'center',
      position: 'relative',
      left: 69,
      top: -30,
      fontSize: 20,
      color : '#06133d'
    },
    part2: {
      position: 'relative',
      left: 460,
      top: -60,
      width: 270,
      height: 40,
      backgroundColor: "yellow",
    },
    title: {
      position : 'relative',
      left: 130,
      fontSize : 22,
      color :'#06133d'
    },
    data: {
      padding: 40,
    },
    text: {
      marginBottom: 10,
      fontSize: 23,
      margin: 12,
      color : '#06133d'
    },
    container: {
      padding: 40,
      flexDirection: 'row', // Utilise la flexbox pour organiser les sections horizontalement
      justifyContent: 'space-between', // Espace égal entre les sections
    },
    infoSection: {
      flex: 1, // Chaque section prend une part égale de l'espace disponible
      padding: 10,
    },
    title1: {
      fontWeight: 'bold',
      fontSize : 25,
      position : 'relative',
      top : -7,
      color : '#091c5aa5'
    },
    title2 : {
      margin : 2,
      position : 'relative',
      // left : -4
    },
    tirret2 :{
      alignItems : 'center',
      position : 'relative',
      left : 20,
      backgroundColor : "#000",
      width : 550,
      height : 5,
      backgroundColor: '#06133d',
    },
    img : {
      width : 50,
      height : 50,
      position : 'relative',
      left : -60,
      top : 35
    }
  });

  return (
    <Document>
        <Page size='A4'>

  //       <View style={styles.title}>
  //       <Image style={styles.img} src={require('../assets/Logo.png')}/>
  //       <Text>FIXBOOK</Text>
  //     </View>
  //     <View style={styles.tiret}>
  //       <View style={styles.part1} />
  //       <Text style={styles.titre}>RECU D'ACHAT</Text>
  //       <View style={styles.part2} />
  //     </View>
  {/* <td>{item.code_achat}</td>
                                            <td>{item.nom_livre}</td>
                                            <td>{item.montant} Fcfa</td>
                                            <td>{item.matricule}</td>
                                            <td>{item.date_achat}</td> */}
                                            {/* <td>{item.Votre_nom}</td> */}
  //     <View style={styles.data}>
  //       <Text style={styles.text}>Code achat: {item.code_achat}</Text>
  //       <Text style={styles.text}>Nom livre: {item.nom_livre}</Text>
  //       <Text style={styles.text}>Montant : {item.montant}Fcfa</Text>
  //       <Text style={styles.text}>Matricule : {item.matricule}</Text>
  //       <Text style={styles.text}>Date : {item.date_achat}</Text>
  //       <Text style={styles.text}>Votre Nom : {item.Votre_nom}</Text>
  //     </View>

  //     <View style={styles.tirret2}></View>

  //     <View style={styles.container}>
  //       <View style={styles.infoSection}>
  //         <Text style={styles.title1}>Siège Social</Text>
  //         <Text style={styles.title2}>Avenue 10</Text>
  //         <Text style={styles.title2}>13000 Abidjan</Text>
  //         <Text style={styles.title2}>Côte d'Ivoire</Text>
  //       </View>

  //       <View style={styles.infoSection}>
  //         <Text style={styles.title1}>Coordonnées</Text>
  //         <Text style={styles.title2}>Sem Elisee</Text>
  //         <Text style={styles.title2}>Phone: +225 0503532967</Text>
  //         <Text style={styles.title2}>Email:Guibesem@gmail.com</Text>
  //       </View>
  //     </View>
            {/* <View>
                <Text>
                    {item.date_achat}
                </Text>
                <Text>{item.nom_livre}</Text>
                <Text>{item.matricule}</Text>
                <Text>{item.nom_livre}</Text>
                    
            </View> */}
        </Page>
    </Document>
  )
}
