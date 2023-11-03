import { useEffect, useState } from 'react'
import './livre.scss'
import { AdministrationData, tableDataAchat2 } from '../../constants/Data'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { AlertCircle } from 'react-feather'
import axios from 'axios'

import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {AiOutlineClose} from "react-icons/ai"
import {BiSolidBookBookmark} from 'react-icons/bi'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import img1 from "../../assets/Image/delete.png"


const Livre = () => {

  const [isOpen,setisOpen] = useState(true)

  
  const toggle = () =>{
    setisOpen(!isOpen)
    // console.log(isOpen);
  }

  const currentDate = dayjs();

  const [stok, setStok] = useState(false)

  const handleClic = () => {
    setStok(!stok)
    // console.log(show);
  }

  

  const [nom,setNom] = useState('')
  const [auteur,setAuteur] = useState('')
  const [etat,setEtat] = useState('')
  const [categories,setCategories] = useState('')
  const [date,setDate] = useState('')
  const [prix,setprix] = useState('')
  const [radio,setRadio] = useState('Oui')
  const [couverture,setCouverture] = useState('')

  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (event) => {
    const newValue = parseFloat(event.target.value);
    
    if (!isNaN(newValue)) {
      setNumberValue(newValue);
    } else {
      setNumberValue(0); 
    }
  };


  const [livreData,setLivreData] = useState([])
  const [isUpDate, setIsUpdate] = useState(false)


  // const [das,setDas] = useState([])

  const [Update,setUpdate] = useState(true)
  const [empreintData, setEmpreintData] = useState([])


//   useEffect(() => {
//     try {
//       axios.get('http://localhost:8800/api/v1/StockLivres')
//       .then(response => setEmpreintData(response.data))
//       .catch(error => console.error(error)); 
//     } 
//       catch (e) { 
//         console.log(e); 
//       } 
// }, [Update]);

const [datase, setDatase] = useState([])


  const handlLivreSubmit = (e) => {
    e.preventDefault()

    setDatase([...datase, {
      id: new Date(),
      nom : nom,
      auteur: auteur,
      etat: etat,
      categories: categories,
      prix : prix,
      date : date,
      numberValue : numberValue,
      radio : radio
  }])

  setAuteur('')
  setNom('')
  setEtat('')
  setCategories('')
  setDate('')
  setprix('')
  setRadio('')
  setNumberValue('')

    // td>{item.nom_du_livre}</td>
    //                             <td>{item.livre}</td>
    //                             <td>{item.etat}</td>
    //                             <td>{item.categorie}</td>
    //                             <td>{item.date}</td>
    //                             <td>{item.montant}</td>
    //                             <td>{item.couverture}</td>
    //                             <td>{item.quantite}</td>
    // let dataPost = {
    //   nom_du_livre : nom, 
    //       auteur : auteur, 
    //       // descriptonlivre : description,
    //       date : date, 
    //       montant : prix, 
    //       categorie : categories,
    //       couverture: couverture,
    //       etat: etat,
    //       quantite: numberValue,
    // }

    // try{
    //         axios.post('http://localhost:8800/api/v1/StockLivres', dataPost)
    //         .then(response => {
    //           if(response.status === 200 || response.status == 201){
    //             setNom('')
    //             setEtat('')
    //             setCategories('')
    //             setDate('')
    //             setprix('')
    //             setAuteur('')
    //             setUpdate(!Update);
    //             // setDescription('')
    //             setCouverture('')
    //             setIsUpdate(!isUpDate)
    //           }
    //         })
    //         .catch(error => console.error(error))
    //   }catch(e){
    //     console.log(e);
    //   }    
  }

  const handleDelete = (id) => {
    // Supprimez l'élément ayant l'ID correspondant
    const updatedData = datase.filter((item) => item.id !== id);
    setDatase(updatedData);
  };
  

  // const handleDelete = () => {

  //    axios.delete(`http://localhost:8800/api/v1/DeleteStockLivres`)
  //    .then((response) => {
  //     if (response.status === 200 || response.status === 201) {
  //         console.log('Élément supprimé avec succès');
  //     } else {
  //         // Gestion des erreurs en cas d'échec de la suppression
  //         console.error('Erreur lors de la suppression :', response.data.error);
  //     }
  //   })
  //   .catch((error) => {
  //       console.error('Erreur lors de la suppression :', error);
  //   });
  // }

  const [show,setShow] = useState(false)


    const handleSupprimer = () => {
      setShow(!show)
      // console.log('====================================');
      // console.log(show);
      // console.log('====================================');
    }

    // const getInfo = (item) => {
    //   setNom(item.nomlivre)
    //   setAuteur(item.auteurlivre)
    //   setCategories(item.categorielivre)
    //   setEtat(item.etatlivre)
    //   // setDescription(item.descriptonlivre)
    //   setprix(item.prixlivre)
    //   setDate(item.datelivre)
    // }

    // const [allLivre, setAllLivre] = useState([])
    // useEffect(() => {
    //   try{
    //     axios.get('http://localhost:8800/api/v1/livres')
    //     .then(response => setAllLivre(response.data))
    //   }catch(e){
    //     console.log(e);
    //   }
    // }, [isUpDate])

  return (
    <section className='livre' style={{gridTemplateColumns: isOpen?'14.2rem auto':'4rem auto'}}>
            <div className="livre_link">
              <div className="livre_title">
                  <h1 style={{display: isOpen? 'block':'none'}}>FixBook</h1>
                  <IoMenu className='livre_icons' onClick={toggle} style={{position: !isOpen && 'relative', left:'1rem'}}/>
            </div>
              <div>
                    {AdministrationData.map((item) =>(
                      <div className='livre_routes' key={item.path}>
                            <Link to={item.path}>
                                <div className='livre_routes_all' style={{position: !isOpen && 'relative', top:'3rem',}}>
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
        <div className='livre_section_one'>
            <p className='livre_hello'>Salut, bienvenu dans votre espace.</p>
            <h1>Livre</h1>

            <button className='stock' onClick={handleClic}>Stocke Livre</button>

            {stok && (
                            <div className="condiction_element_livre">
                                  <div className="inside_element_livre">
                                    <div className='bg'>
                                        <h1><BiSolidBookBookmark /></h1>
                                        <AiOutlineClose className='close' onClick={() => setStok(!stok)}/>
                                    </div>
                                        
                                        
                                        <form className='livre_form' onSubmit={handlLivreSubmit}>
                                          <div className='livre_allinput' >
                                              <div className='input-fist'>       
                                                      <TextField
                                                          id="outlined-basic"
                                                          label="Nom du livre"
                                                          variant="outlined"
                                                          value={nom}
                                                          onChange={(e) => setNom(e.target.value)}
                                                          className="form_input"
                                                      /> 
                                                      <TextField
                                                          id="outlined-basic"
                                                          label="Auteur"
                                                          variant="outlined"
                                                          value={auteur}
                                                          onChange={(e) => setAuteur(e.target.value)}
                                                          className="form_input"
                                                      /> 

      <                                       TextField
                                                    select
                                                    label="Etat livre"
                                                    variant="outlined"
                                                    value={etat}
                                                    onChange={(e) => setEtat(e.target.value)}
                                                    className="input_select-etat"
                                                  >
                                                    <MenuItem value="Bon">Bon</MenuItem>
                                                    <MenuItem value="Mauvais">Mauvais</MenuItem>
                                                    <MenuItem value="Normal">Normal</MenuItem>
                                              </TextField>  

                                              </div> 

                                              
                                                <div className='second-firt'>

                                                <TextField
                                                                select
                                                                label="Categorie livre "
                                                                variant="outlined"
                                                                value={categories}
                                                                onChange={(e) => setCategories(e.target.value)}
                                                                className="input_select"
                                                              >
                                                                <MenuItem value="Horreur">Horreur</MenuItem>
                                                                <MenuItem value="Action">Action</MenuItem>
                                                                <MenuItem value="Dramatique">Dramatique</MenuItem>
                                                                <MenuItem value="Comique">Comique</MenuItem>
                                                                <MenuItem value="Autres">Autres</MenuItem>
                                                      </TextField>

                                                      <TextField
                                                          id="date"
                                                          label="Date"
                                                          type="date"
                                                          value={date}
                                                          defaultValue={currentDate.format('YYYY-MM-DD')}
                                                          onChange={(e) => setDate(e.target.value)}
                                                          InputLabelProps={{
                                                            shrink: true,
                                                          }}
                                                          className='date1'
                                                      />

                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker label="Date" 
                                                    className='date' 
                                                    defaultValue={currentDate} 
                                                    value={date} 
                                                    onChange={(e) => setDate(e.target.value)}
                                                  />
                                            </LocalizationProvider> */}

                                        <TextField
                                              select
                                              label="Montant"
                                              variant="outlined"
                                              value={prix}
                                              onChange={(e) => setprix(e.target.value)}
                                              className="input_select-money"
                                            >
                                              <MenuItem value="3000">3000</MenuItem>
                                              <MenuItem value="5000">5000</MenuItem>
                                              <MenuItem value="10.000">10.000</MenuItem>
                                              <MenuItem value="15.000">15.000</MenuItem>
                                              <MenuItem value="20.000">20.000</MenuItem>
                                              <MenuItem value="25.000">25.000</MenuItem>
                                              <MenuItem value="30.000">30.000</MenuItem>
                                    </TextField>                                          
                                  </div> 

                                  <div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" className='box'>Couverture</FormLabel>
                                        <RadioGroup
                                          row
                                          aria-labelledby="demo-row-radio-buttons-group-label"
                                          name="row-radio-buttons-group"
                                          value={radio}
                                          onChange={(e) => setRadio(e.target.value)} 
                                          className='box'
                                        >
                                          <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                                          <FormControlLabel value="Non" control={<Radio />} label="Non" />
                                        </RadioGroup>
                                      </FormControl>

                                      <TextField
                                          label="Quantite"
                                          type="number"
                                          value={numberValue}
                                          className='input_int'
                                          onChange={handleNumberChange} 
                                          inputProps={{
                                            min: 0,
                                            step: 1, 
                                          }}
                                        />
                                    </div>
                                                                         
                                              <button className='enregiste'>enregister</button>
                                           </div>
                                                                                
                                    </form>                                  
                                 </div>    
                              <div>            
                                              
                               </div>  
                            </div>
                          )}

            <div className="table">
                  <table>
                        <thead>
                            <tr>
                                <th>Nom livre</th>
                                <th>Auteur</th>
                                <th>Etat livre</th>
                                <th>Categorie livre</th>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Couverture</th>
                                <th>Quantite</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datase.map((item,id) => (
                              <tr key={id} 
                              // onDoubleClick={() => {
                              //   getInfo(item)
                              // }}

                              // nomlivre : nom, 
                              // auteurlivre : auteur, 
                              // // descriptonlivre : description,
                              // datelivre : date, 
                              // prixlivre : prix, 
                              // categorielivre : categories,
                              // couvertureslivre : couverture,
                              // etatlivre: etat

                            
                              >
                                {/* [nom_du_livre, auteur, etat, categorie, date, montant, couverture, quantite] */}
                                <td>{item.nom}</td>
                                <td>{item.auteur}</td>
                                <td>{item.etat}</td>
                                <td>{item.categories}</td>
                                <td>{item.date}</td>
                                <td>{item.prix}Fcfa</td>
                                <td>{item.couverture}</td>
                                <td>{item.numberValue}</td>
                                <td>
                                    {!show && (
                                        <img src={img1} alt='dd' className='livre_icons' onClick={handleSupprimer}/>
                                    )}
                                    
                                    {show && (
                                      <div>
                                          <img src={img1} alt='dd' className='livre_icons' onClick={handleSupprimer}/>

                                            <div className='condiction_element_livre' >
                                                  <div className="inside_element_livre">
                                                         <AlertCircle size={50} color='orange'/>
                                                          <p>Cette action est irreversible</p>
                                                          <div className='livre_button'>
                                                              <div>
                                                                <button className='btn1' onClick={()=> {
                              
                                                                      setShow(!show);
                                                                      handleDelete(item.id)
                                                                }}> Oui, j'en suis sure</button>
                                                                
                                                            </div>
                                                            <div>
                                                                  <button className='btn2' onClick={()=> setShow(!show)}>Cancel</button>
                                                            </div>
                                                    </div>
                                                </div>
                                           </div>
                                      </div>
                                    )}
                                </td>
                             </tr>
                            ))}
                        </tbody>
                  </table>
            </div>
        </div>
    </section>
  )
}

export default Livre