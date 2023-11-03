import { useEffect } from 'react'
import './achat.scss'
import { useState } from 'react'
import { AdministrationData } from '../../constants/Data'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {tableDataAchat} from '../../constants/Data'
import {AiOutlineClose} from "react-icons/ai"
import {MdCurrencyExchange} from "react-icons/md"
import {LiaFileInvoiceDollarSolid} from "react-icons/lia"
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import dayjs from 'dayjs'
import axios from 'axios'

import { PDFDownloadLink } from '@react-pdf/renderer'
import RecuPDF from '../../Components/RecuPDF'
// import { format } from 'date-fns';

// import img1 from '../../assets/images.png'



const Achat = () => {

    const [isOpen,setisOpen] = useState(true)
    const [show, setShow] = useState(true)

    const toggle = () =>{
      setisOpen(!isOpen)
      // console.log(isOpen);
    }

    const handleClic = () => {
      setShow(!show)
      console.log(show);
    }

    const [code,setCode] = useState('')
    const [matriculeAbonnees,setMatriculeAbonnees] = useState('')
    const [nomDuLivre,setNomDuLivre] = useState('')
    const [montant,setMontant] = useState('')
    // const [date,setDate] = useState()
    const [prenom,setPrenom] = useState('')
    const [selectedDate, setSelectedDate] = useState(dayjs());


    const currentDate = dayjs();
    const [achatData, setAchatData] = useState([])

     const handleDateChange = (event) => {
    setSelectedDate(event.target.value);}

    const [Update, setUpdate] = useState(true)
    const [Data, setData] = useState([])


    // try {
    //   axios.get('http://localhost:8800/api/v1/achat_physique')
    //   .then(response => setData(response.data))
    //   .catch(err => console.error(err))
    //   catch (e){
    //     console.log(e);
    //   }
    // }
    useEffect(() =>{
      try{
        axios.get('http://localhost:8800/api/v1/achat_physique')
        .then(response => setData(response.data))
        .catch(err => console.error(err))
      }
      catch(e){
        console.log(e);
      }
    },[Update])

    const achatSubmit = (e) => {
      e.preventDefault();


      let postData = {
        code_achat : code,
        nom_livre : nomDuLivre,
        montant : montant,
        matricule : matriculeAbonnees,
        date_achat : selectedDate,
        Votre_nom : prenom
      }

      try{
        axios.post('http://localhost:8800/api/v1/achat_physique', postData)
        .then(response => {
           if(response.status === 200 || response.status === 201) {
              setCode('')
              setNomDuLivre('')
              setMontant('')
              setMatriculeAbonnees('')
              setSelectedDate('')
              setPrenom('')
              setUpdate(!Update)
           }
        })
        .catch(err => console.error(err));
      } catch(e){
        console.log(e);
      }
      
    //   setAchatData([...achatData,{
    //     id: new Date(),
    //     code : code,
    //     nomDuLivre : nomDuLivre,
    //     selectedDate : selectedDate,
    //     // date : date,
    //     // dates : dates,
    //     prenom : prenom,
    //     montant : montant,
    //     matriculeAbonnees : matriculeAbonnees
    //   }])
    //   setCode('')
    //   setMatriculeAbonnees('')
    //   setMontant('')
    //   setSelectedDate('')
    //   setNomDuLivre('')
    //   setPrenom('')
    //   // setDates('')
    // }
  
  };


  const handleImprimer = (item) => {

  }


    // const [date, setDate] = useState(new Date()); // Utilisez la date comme état

  //   const handleDateChange = (e) => {
  //     const inputDate = e.target.value; // Récupérez la date saisie au format "JJ/MM/AA"
  //     const [day, month, year] = inputDate.split('/'); // Séparez la date en jour, mois et année

  //     // Créez une nouvelle date au format ISO (AAAA-MM-JJ) à partir de la date saisie
  //     const formattedDate = `${year}-${month}-${day}`;

  //     setDate(new Date(formattedDate)); // Mettez à jour l'état avec la nouvelle date au format Date
  //   };

  // const formattedDate = format(date, 'dd/MM/yy');




  return (
    <section className='achat' style={{gridTemplateColumns: isOpen?'14.2rem auto':'4rem auto'}}>
      
            <div className="achat_link">
              <div className="achat_title">
                  <h1 style={{display: isOpen? 'block':'none'}}>FixBook</h1>
                  <IoMenu className='achat_icons' onClick={toggle} style={{position: !isOpen && 'relative', left:'1rem'}}/>
            </div>
              <div>
                    {AdministrationData.map((item) =>(
                      <div className='achat_routes' key={item.path}>
                            <Link to={item.path}>
                                <div className='achat_routes_all' style={{position: !isOpen && 'relative', top:'3rem',}}>
                                  <div style={{marginLeft: !isOpen && '-8px'}}>
                                    {item.icons}
                                  </div>
                                    <div style={{display: isOpen? 'block':'none',}}>
                                        {item.text} 
                                    </div>
                                </div>
                            </Link>
                      </div>
                    ))}
            </div> 
        </div>
        <div className='achat_section_one'>
        <p className='achat_hello'>Salut, bienvenu dans votre espace.</p>
              <div className='input_infos_achat'>
                            <h1>Achat</h1>
                          
                          <div className="achat_action">
                                <button className='butt1'onClick={handleClic}>
                                  <MdCurrencyExchange className='change'/>
                                  Acheter
                                </button>

                                {/* <button className='butt2'>
                                    <FaPrint className='print'/>
                                    Imprimer
                                </button> */}
                          </div>

                          {!show && (
                            <div className="condiction_element_achat">
                                  <div className="inside_element_achat">
                                    <div className='bg'>
                                        <h1>Achats</h1>
                                        <AiOutlineClose className='close' onClick={() => setShow(!show)}/>
                                    </div>
                                        
                                        
                                        <form className='achat_form' >
                                          <div className='achat_allinput'>
                                              <div className='input-fist'>       
                                                      <TextField
                                                          id="outlined-basic"
                                                          label="Code achat"
                                                          variant="outlined"
                                                          value={code}
                                                          onChange={(e) => setCode(e.target.value)}
                                                          className="form_input"
                                                      /> 
                                                      <TextField
                                                          id="outlined-basic"
                                                          label="Nom livre"
                                                          variant="outlined" 
                                                          value={nomDuLivre}
                                                          onChange={(e) => setNomDuLivre(e.target.value)}
                                                          className="form_input"
                                                      /> 
                                                      <TextField
                                                                select
                                                                label="Montant"
                                                                variant="outlined"
                                                                value={montant}
                                                                onChange={(e) => setMontant(e.target.value)}
                                                                className="achat_input_select"
                                                              >
                                                                <MenuItem value="3500">3500</MenuItem>
                                                                <MenuItem value="4000">4000</MenuItem>
                                                                <MenuItem value="4500">4500</MenuItem>
                                                                <MenuItem value="5000">5000</MenuItem>
                                                                <MenuItem value="6500">6500</MenuItem>
                                                                <MenuItem value="8000">8000</MenuItem>
                                                                <MenuItem value="15000">15000</MenuItem>
                                                      </TextField>

                                                </div>
                                                <div className='second-firt'>
                                      
                                      <TextField
                                          id="outlined-basic"
                                          label="Matricule "
                                          variant="outlined"
                                          value={matriculeAbonnees}
                                          onChange={(e) => setMatriculeAbonnees(e.target.value)}
                                          className="form_input"
                                      /> 

                                        <TextField
                                                id="date"
                                                label="Date"
                                                type="date"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                defaultValue={currentDate}
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                                className='date'
                                              />
                                              
                                      <TextField
                                          id="outlined-basic"
                                          label="Votre nom"
                                          variant="outlined" 
                                          value={prenom}
                                          onChange={(e) => setPrenom(e.target.value)}
                                          className="form_input2"
                                      />  
                                </div> 
                                                   
                                    <button onClick={achatSubmit}>enregister</button>
                                                    
                                           </div>
                                        </form>                                  
                                  </div>    
                              <div>                           
                               </div>      
                            </div>
                          )}
                            
                            
                            <div className='achat_table'>
                                <table>
                                    <thead>
                                        <tr>
                                          <th>Code</th>
                                          <th>Nom livre</th>
                                          <th>Montant</th>
                                          <th>Matricle Abonnees</th>
                                          <th>Date</th>
                                          <th>Prenom</th>
                                          <th>Imprimer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {Data.map((item,id) => (
                                          <tr key={id}>
                                            <td>{item.code_achat}</td>
                                            <td>{item.nom_livre}</td>
                                            <td>{item.montant} Fcfa</td>
                                            <td>{item.matricule}</td>
                                            <td>{item.date_achat}</td>
                                            <td>{item.Votre_nom}</td>
                                            <td>
                                            
                                              <PDFDownloadLink document={<RecuPDF item={item} />}>
                                                {(loading) => (loading ? <LiaFileInvoiceDollarSolid className='imprimer'/>: 'imprimer')}
                                              </PDFDownloadLink>
  
                                            </td>
                                          </tr> 
                                      ))}     
                                    </tbody>
                                </table>
                            </div>
                    </div>
        </div>
    </section>
  )
}

export default Achat