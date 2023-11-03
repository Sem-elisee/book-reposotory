import { useEffect } from 'react'
import './empreint.scss'
import { useState } from 'react'
import { AdministrationData } from '../../constants/Data'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {tableDataAchat1} from '../../constants/Data'
import {HiPlus} from "react-icons/hi"
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import {AiOutlineClose} from "react-icons/ai"
import dayjs from 'dayjs'
import axios from 'axios'


const Empreint = () => {

  const currentDate = dayjs();

  // const [selectedDate, setSelectedDate] = useState('');
  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

    const [isOpen,setisOpen] = useState(true)
    const [show, setShow] = useState(true)

    const handleClic = () => {
      setShow(!show)
      // console.log(show);
    }

    const [code,setCode] = useState('')
    const [nomDuLivre,setNomDuLivre] = useState('')
    const [periode,setPeriode] = useState('')
    const [matriculeAbonnees,setMatriculeAbonnees] = useState('')
    const [montant,setMontant] = useState('')
    const [nom,setNom] = useState('')
    const [date, setDate] = useState('')

    // console.log(prenom)

    const [empreintData, setEmpreintData] = useState([])

    const toggle = () =>{
      setisOpen(!isOpen)
      // console.log(isOpen);
    }

    const [Update,setUpdate] = useState(true)

    useEffect(() => {
      try {
        axios.get('http://localhost:8800/api/v1/emprunt_physique')
        .then(response => setEmpreintData(response.data))
        .catch(error => console.error(error)); 
      } 
        catch (e) { 
          console.log(e); 
        } 
  }, [Update]);


    const empreintSubmit = (e) => {
      e.preventDefault()

      // setEmpreintData([...empreintData, {
      //   id : new Date(),
      //   code : code,
      //   nomDuLivre : nomDuLivre,
      //   periode : periode,
      //   matriculeAbonnees : matriculeAbonnees,
      //   selectedDate : selectedDate,
      //   prenom : prenom , 
      //   montant : montant,
      // }])

      
        let dataPost = {
          code_emprunt: code, 
          nom_livre: nomDuLivre, 
          periode: periode, 
          matricule_abonnes: matriculeAbonnees,
          date_emprunt: date, 
          montant: montant, 
          Votre_nom : nom,
        };
      
        try {
          axios.post('http://localhost:8800/api/v1/emprunt_physique', dataPost)
            .then(response => {
              if (response.status === 200 || response.status === 201) {
                setCode('');
                setMatriculeAbonnees('');
                setNomDuLivre('');
                setDate('');
                setPeriode('');
                setMontant('');
                setNom('');
                setUpdate(!Update);
              }
            })
            .catch(error => console.error(error));
        } catch (e) {
          console.log(e);
        }
     
    }


  return (
    <section className='empreint' style={{gridTemplateColumns: isOpen?'14.2rem auto':'4rem auto'}}>
            <div className="empreint_link">
              <div className="empreint_title">
                  <h1 style={{display: isOpen? 'block':'none'}}>FixBook</h1>
                  <IoMenu className='empreint_icons' onClick={toggle} style={{position: !isOpen && 'relative', left:'1rem'}}/>
            </div>
              <div>
                    {AdministrationData.map((item) =>(
                      <div className='empreint_routes' key={item.path}>
                            <Link to={item.path}>
                                <div className='empreint_routes_all' style={{position: !isOpen && 'relative', top:'3rem',}}>
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
        <div className="empreint_section_one">
          <div className='empreint_infos'>
                   
          <p className='empreint_hello'>Salut, bienvenu dans votre espace.</p>

                      <div className='input_infos_empreint'>
                            <h1>Emprunt</h1>
                            <button onClick={handleClic} className='butt'> Ajoutez un emprunt <HiPlus className='plus'/></button>


                          {!show && (
                                    <div className="condiction_element_emprunt">
                                      <div className="inside_element_emprunt">
                                        <div className='bg'>
                                            <h1>Emprunt</h1>
                                            <AiOutlineClose className='close' onClick={() => setShow(!show)}/>
                                        </div>
                                            
                                            
                                            <form className='emprunt_form' onSubmit={empreintSubmit}>
                                              <div className='emprunt_allinput'>
                                                  <div className='input-fist'>       
                                                          <TextField
                                                              id="outlined-basic"
                                                              label="Code emprunt"
                                                              variant="outlined" 
                                                              value={code}
                                                              onChange={(e) => setCode(e.target.value)}
                                                              className="emprunt_input"
                                                          /> 

                                                          <TextField
                                                              id="outlined-basic"
                                                              label="Nom livre"
                                                              variant="outlined" 
                                                              value={nomDuLivre}
                                                              onChange={(e) => setNomDuLivre(e.target.value)}
                                                              className="emprunt_input"
                                                          /> 
                                                          <TextField
                                                                select
                                                                label="Periode"
                                                                variant="outlined"
                                                                value={periode}
                                                                onChange={(e) => setPeriode(e.target.value)}
                                                                className="emprunt_input_select"
                                                              >
                                                                <MenuItem value="1 semaine">1 semaine</MenuItem>
                                                                <MenuItem value="2 semaine">2 semaine</MenuItem>
                                                                <MenuItem value="3 semaine">3 semaine</MenuItem>
                                                                <MenuItem value="1 mois">1 mois</MenuItem>
                                                          </TextField>
                                                    </div>
                                                    <div className='second-firt'>
                                          
                                          <TextField
                                              id="outlined-basic"
                                              label="Matricule"
                                              variant="outlined" 
                                              value={matriculeAbonnees}
                                              onChange={(e) => setMatriculeAbonnees(e.target.value)}
                                              className="emprunt_input"
                                          /> 

  

                                            <TextField
                                                id="date"
                                                label="Date"
                                                type="date"
                                                value={date}
                                                // defaultValue={currentDate.format('YYYY-MM-DD')}
                                                onChange={(e) =>  setDate(e.target.value) }
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                                className='form_input2'
                                            />

                                          <TextField
                                              id="outlined-basic"
                                              label="Votre nom"
                                              variant="outlined" 
                                              value={nom}
                                              onChange={(e) => setNom(e.target.value)}
                                              className="date"
                                          />
                                    </div> 

                                    <div>
                                          <TextField
                                              select
                                              label="Montant"
                                              variant="outlined"
                                              value={montant}
                                              onChange={(e) => setMontant(e.target.value)}
                                              className="emprunt_input_select1"
                                            >
                                              <MenuItem value="1500">1500</MenuItem>
                                              <MenuItem value="2500">2500</MenuItem>
                                              <MenuItem value="5000">5000</MenuItem>
                                              <MenuItem value="7500">7500</MenuItem>                                        
                                              <MenuItem value="10000">10000</MenuItem>                                        
                                              <MenuItem value="12500">12500</MenuItem>                                        
                                              <MenuItem value="15500">15500</MenuItem>                                        
                                          </TextField>
                                    </div>
                                            
                                                        
                                  <button >enregister</button>
                                               </div>
                                            </form>                                  
                                      </div>    
                                  <div>
                              </div>            
                          </div>
                        )}
            
                            <div className='empreint_table'>
                                <table>
                                    <thead>
                                        <tr>
                                          <th>Code emprunt</th>
                                          <th>Nom livre</th>
                                          <th>Periode</th>
                                          <th>Matricle Abonnees</th>
                                          <th>Date</th>
                                          <th>Montant</th>
                                          <th>Nom</th>
                                          {/* <th>Prenom</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {empreintData.map((item,id) => (
                                          <tr key={id}>
                                            <td>{item.code_emprunt}</td>
                                            <td>{item.nom_livre}</td>
                                            <td>{item.periode}</td>
                                            <td>{item.matricule_abonnes}</td>
                                            <td>{item.date_emprunt}</td>
                                            <td>{item.montant} Fcfa</td>
                                            <td>{item.Votre_nom}</td>
                                          </tr> 
                                      ))}     
                                    </tbody>
                                </table>
                            </div>
                    </div>
                 
              </div>
        </div>
    </section>
  )
}

export default Empreint