import { FiMenu } from 'react-icons/fi'
import { HiMiniUserCircle } from 'react-icons/hi2'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { PopularAction , OeuvreSimular} from '../../constants/RomanData'

import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function ActionDetails() {

    const { name } = useParams();
    const item = PopularAction.find((item) => item.name === name);

    const { image , annees , desc , icons , prix } = item
    
                // LE CODE ACHAT EN LIGNE

                const codeAchats =  () => {
                    let unique = generateUniqueCode() 
                    try{    
                        axios.post(`http://localhost:8800/api/v1/achat_online`, unique)
                        .then((response) => {
                            if (response.status === 200 || response.status === 201) {
                            console.log('Code enregistré avec succès');
                            } else {
                            console.error('Erreur est survenue');
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
            
                    }
                    catch(e) {
                         console.log(e);
                    }
                    toast.success(`Votre achat est effectué. Code : ${unique},`, { position: toast.POSITION.TOP_LEFT });
                }
            
                function generateUniqueCode()  {
                    // Générer un code alphanumérique unique
                const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let uniqueCode = 'Fixbook_Achat';
                for (let i = 0; i < 5; i++) {
                uniqueCode += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
                }
                 return uniqueCode;
                }

              // LE CODE EMPRUNT EN LIGNE


        const codeEmprunts = () => {
            let unique1 = generateUniqueCode1() 

            try{    
                axios.post(`http://localhost:8800/api/v1/emprunt_online`, unique1)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                    console.log('Code enregistré avec succès');
                    } else {
                    console.error('Erreur est survenue');
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
    
            }
            catch(e) {
                 console.log(e);
            }
            toast.success(`Votre Emprunt est effectué. Code : ${unique1},`, { position: toast.POSITION.TOP_LEFT });
        }

        function generateUniqueCode1()  {
            // Générer un code alphanumérique unique
        const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let uniqueCode = 'Fixbook_Achat';
        for (let i = 0; i < 5; i++) {
        uniqueCode += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
        }
         return uniqueCode;
        }

  return (
    <div className='infos'>
    <div className="infos-book">
        <h1><Link to={"/"} className='Title'>FixBook</Link></h1>
        <div className="infosUser">
                <div className='infosUser-users'>
                    <div className='infosUser-icons'>
                        <FiMenu className='icons-menu'/>
                        <HiMiniUserCircle  className='icons-user'/>
                    </div>
                <p>Sem Elisee</p>
            </div>
      </div>  
    </div>
    <section className='infos-roman'>
        <div className='roman1'>
            <div className="infos-infos">
                <h2>{name}</h2>
               <div className='infos-date'>
              
                    <p>{icons}</p>
                    <h3>{annees}</h3>
                </div>
                    <p>{desc}</p>
                    <h3 className='prix'> Prix : {prix} Fcfa</h3>

                <div className='roman-button'>
                    <button className='butt1' onClick={codeAchats} >Acheter</button>
                    <button className='butt2'  onClick={codeEmprunts}>Emprienter</button>
                    <ToastContainer></ToastContainer>
                </div>
            
        </div>
        </div>

        <div className="roman2">
            <img src={image} alt="" className='rome2-img'/> 
        </div>        
    </section>

    <section className='section-part'>
        <h1>Oeuvre similaire</h1>
        <div className='infos__populars'>
                {OeuvreSimular.map((item) => (
                    <div className='simular__map_Popular'>
                        <Link to={`/oeuvreSimulaire/${item.name}`}>
                            <img src={item.image} alt="" className='simular__map'/>
                        </Link>
                    </div>
                ))}
        </div>
    </section>
    <Footer />
</div>
  )
}
