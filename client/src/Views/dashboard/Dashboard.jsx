import React from 'react'
import './darshboard.scss'
import { useState } from 'react'
import { AdministrationData, infosData } from '../../constants/Data'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'


import { Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,

  ArcElement, 
  // Tooltip, 
  // Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,

  ArcElement,
  // Tooltip,
  // Legend
);

const labels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre', 'Decembre'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'La categies des livres les plus Vendu', // Premier ensemble de données
      data: labels.map(() => Math.floor(Math.random() * (0 - 0 + 1)) + 0),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Le livre le plus Vendu', // Deuxième ensemble de données
      data: labels.map(() => Math.floor(Math.random() * (0 - 0 + 1)) + 0),
      borderColor: 'rgb(75, 192, 192)', // Couleur verte
      backgroundColor: 'rgba(75, 192, 192, 0.5)', // Couleur verte avec transparence
    },
  ],
};


const data1 = {
  labels: ['Dramatique', 'Comique',  'Action', 'Autres'],
  datasets: [
    {
      label: '# of Votes',
      data: [1, 1, 1, 1,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',//
        'rgba(75, 192, 192, 0.2)',//
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',//
        'rgba(75, 192, 192, 1)',//
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {

  const [isOpen,setisOpen] = useState(true)

  const toggle = () =>{
    setisOpen(!isOpen)
    // console.log(isOpen);
  }

  // const donutChartData = {
  //   series: [44, 55, 41, 64, 22, 55, 80, 28,25,30,48,20],
  //   options: {
  //     chart: {
  //         type: 'donut',
  //     },
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //     // colors: ['#008FFB', '#00E396', '#FEB019','#FF4560','#775DD0'],
  //   },
  // }



  

  return (
    <section className='darshboard' style={{gridTemplateColumns: isOpen?'14.2rem auto':'4rem auto'}}>
            <div className="darshboard_link">
              <div className="darshboard_title">
                  <h1 style={{display: isOpen? 'block':'none'}}>FixBook</h1>
                  <IoMenu className='darshboard_icons' onClick={toggle} style={{position: !isOpen && 'relative', left:'1rem'}}/>
            </div>
              <div>
                    {AdministrationData.map((item) =>(
                      <div className='darshboard_routes' key={item.path}>
                            <Link to={item.path}>
                                <div className='darshboard_routes_all' style={{position: !isOpen && 'relative', top:'3rem',}}>
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
        <div className='section_one'>
              <div className="datainf">
                 {infosData.map((item ,key) => (
                    <div key={key} className='data_dashboard'>
                        <div className='inf_data'>
                          <div className="tiret"></div>
                              <div className="datanum">{item.dataNum}</div>
                              <div className="dataName">{item.Text}</div>
                        </div>
                        <div>
                            <div className="data_icons">{item.icons}</div>
                            <div>{item.tiret}</div>

                        </div>
                    </div>
                 ))}
              </div>
              <div>
          </div>

          <div className="data_courbe">
                <div className="courbe_chart">
                    <div className="chart">
                          <Line options={options} data={data} /> 
                     </div>
                </div>
           
                <div className="courbe_donut">
                    <div className="donut">
                      <Pie data={data1} width={400} height={0}/>
                    </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Dashboard