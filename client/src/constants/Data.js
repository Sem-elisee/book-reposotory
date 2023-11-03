import {ImBook} from 'react-icons/im'
import {IoLibrarySharp} from 'react-icons/io5'
import {BsPeopleFill} from 'react-icons/bs'
import{IoSettings} from 'react-icons/io5'
import {FaMoneyCheck} from 'react-icons/fa'
import {FaExchangeAlt} from 'react-icons/fa'
import {ImStatsDots} from 'react-icons/im'


import {AiFillHome} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FaChalkboardTeacher} from 'react-icons/fa'


export const CategoryRouteBook = [
    {
        id: 1,
        text: "Drama",
        path: "/" 
    },
    
    {
        id: 3,
        text: "Comedy",
        path: "/comedy"
    },
    {
        id: 4,
        text: "Action",
        path: "/action"
    },
    {
        id: 5,
        text: "Others",
        path: "/others"
    }
]



export const AdministrationData = [
    {
        id:1,
        text:"Home",
        path: "/dashboard",
        icons : <ImStatsDots className='Data__icons'/>
    },
    // {
    //     id:2,
    //     text:"Empreint Online",
    //     path: "/empreintOnline",
    //     icons : <BsPeopleFill className='Data__icons'/>
    // },
    // {
    //     id:3,
    //     text:"Achat online",
    //     path: "/achatOnline",
    //     icons : <IoLibrarySharp className='Data__icons'/>
    // },
    
    {
        id:2,
        text:"Livres",
        path: "/livre",
        icons : <ImBook  className='Data__icons'/>
    },
    {
        id:3,
        text:"Emprunts",
        path: "/empreint",
        icons : <FaExchangeAlt  className='Data__icons'/>
    },
    {
        id:4,
        text:"Achats",
        path: "/achat",
        icons : <FaMoneyCheck  className='Data__icons'/>
    },
    {
        id:6,
        text:"Parametre",
        path: "/parametre",
        icons : <IoSettings  className='Data__icons'/>
    }

]




export const tableDataAchat = [
    {
        code: 200,
        nomlivre :"L'argent",
        montant: 1500,
        matriculeAbonnes : '5363427K877',
        nom : 'Guibe',
        prenom : 'Sem elisee'
    },
    {
        code: 201,
        nomlivre :"La Plaie",
        montant: 9500,
        matriculeAbonnes : 'F8876GN877',
        nom : 'Guibe',
        prenom : 'Paul Joseph'
    },
    {
        code: 202,
        nomlivre :"La fleur",
        montant: 17500,
        matriculeAbonnes : '5393TK57',
        nom : 'Bando',
        prenom : 'Bitchress'
    },
]


export const tableDataAchat1 = [
    {
        code: '200HR',
        nomlivre :"L'argent",
        periode: '1sem',
        matriculeAbonnes : '5363KT',
        nom : 'Guibe',
        prenom : 'Sem elisee'
    },
    {
        code: '201LW',
        nomlivre :"La Plaie",
        periode: '1sem',
        matriculeAbonnes : '5363JY',
        nom : 'Guibe',
        prenom : 'Paul Joseph'
    },
    {
        code: '202AV',
        nomlivre :"La fleur",
        periode: '1sem',
        matriculeAbonnes : '5363AQ',
        nom : 'Bando',
        prenom : 'Bitchress'
    },
    // {
    //     code: '203PD',
    //     nomlivre :"L'enfant solder",
    //     periode: '1sem',
    //     matriculeAbonnes : '5363YN',
    //     nom : 'Kouakou',
    //     prenom : 'Odette'
    // },

]




export const tableDataAchat2 = [
    {
        nom: 'Bando',
        etat : 'Bon',
        categories : 'horreur',
        date : '11/02/2000'
    },
    {
        nom: 'Bando',
        etat : 'Mauvais',
        categories : 'horreur',
        date : '10/02/2000'
    },
    {
        nom: 'Bando',
        etat : 'Bon',
        categories : 'horreur',
        date : '12/02/2000'
    },
    {
        nom: 'Bando',
        etat : 'Normal',
        categories : 'horreur',
        date : '19/02/2000'
    },
    {
        nom: 'Bando',
        etat : 'Mauvais',
        categories : 'horreur',
        date : '20/02/2000'
    },
]


export const infosData = [
    // {
    //     dataNum : 356,
    //     Text: 'Abonnees',
    //     icons : <AiFillHome className='data_icons1'/>,  
    // },
    {
        dataNum : "01",
        Text: 'en ligne',
        icons :<FaChalkboardTeacher className='data_icons2'/>,  
        tiret: <div className='tiret1'/>
    },
    {
        dataNum : 80,
        Text: 'livre en solde',
        icons : <FaRegCalendarAlt className='data_icons3'/>,  
        tiret: <div className='tiret2'/>
    },
    {
        dataNum : '7500Fcfa',
        Text: 'Livre vendu',
        icons : <RiMoneyDollarCircleLine className='data_icons4'/>,  
        tiret: <div className='tiret3'/>
    },
    // {
    //     dataNum : '18/11/23',
    //     Text: 'next stoke',
    //     icons : <RiMoneyDollarCircleLine className='data_icons4'/>,  
    // },
]