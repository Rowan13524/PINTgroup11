import React, {useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,    
  } from 'chart.js';
  import {Line} from 'react-chartjs-2';
  import 'chartjs-adapter-date-fns';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    );

const hour = [
  {x: Date.parse('2022-11-01'), y:81},
  {x: Date.parse('2022-11-02'),y:105},
  {x: Date.parse('2022-11-03'),y:111},
  {x: Date.parse('2022-11-04'), y:124},
]
const hour1 = [
  {x: Date.parse('2022-11-01'), y:75},
  {x: Date.parse('2022-11-02'),y:80},
  {x: Date.parse('2022-11-03'),y:66},
  {x: Date.parse('2022-11-04'), y:55},
]
const hour2 = [
  {x: Date.parse('2022-11-01'), y:66},
  {x: Date.parse('2022-11-02'),y:55},
  {x: Date.parse('2022-11-03'),y:44},
  {x: Date.parse('2022-11-04'), y:77},
]


const day = [
  {x: Date.parse('2022-11-01'), y:181},
  {x: Date.parse('2022-11-02'),y:115},
  {x: Date.parse('2022-11-03'),y:131},
  {x: Date.parse('2022-11-04'), y:154},
  {x: Date.parse('2022-11-05'),y:116},
  {x: Date.parse('2022-11-06'),y:188},
  {x: Date.parse('2022-11-07'),y:181},
];

export const dataH = {
  datasets: [
    {
        label: 'Heart Beat',
        data: hour,
        borderColor: 'rgb(245,134,24)',
        backgroundColor: 'rgba(245,134,24, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
    },
    {
        label: 'Temperature',
        data: hour1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
    },
    {
        label: 'SPO2',
        data: hour2,
        borderColor: 'rgb(255,27,46)',
        backgroundColor: 'rgba(255,27,46, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
  },],};

export const dataD = {
  datasets: [
    {
        label: 'Heart Beat',
        data: day,
        borderColor: 'rgb(245,134,24)',
        backgroundColor: 'rgba(245,134,24, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
    },
    {
        label: 'Temperature',
        data: day,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
    },
    {
        label: 'SPO2',
        data: day,
        borderColor: 'rgb(255,27,46)',
        backgroundColor: 'rgba(255,27,46, 0.5)',
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 3
  },],};

export const optionsH = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend:{
      labels:{
        padding: 20,
        font:{
          size: 18,
        },
        color:'black'
      },
    },
    title: {
      display: true,
      text: 'Temperature Graph',
      color: 'Black',
      font: {
        size: 30,
        weight: 'bold'
      }
    },
  },
  scales: {
    x:{
        type: 'time',
        time: {
          unit: 'hour',
        },
        grid:{
          display: false,
        },
        ticks: {
            color: 'Black',
            font:{
              size: 14
            }
        }
    },
    y: {
      type: 'linear',
      position: 'left',
      grid:{
        display: false,
      },
      ticks:{
        callback:function(value, index,ticks){
          return value + '°C';
        },
        color: 'black',
        font:{
          size: 14
        }
      }
    }
  },
};

export const optionsD = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend:{
      labels:{
        padding: 20,
        font:{
          size: 18,
        },
        color:'black'
      },
    },
    title: {
      display: true,
      text: 'Temperature Graph',
      color: 'Black',
      font: {
        size: 30,
        weight: 'bold'
      }
    },
  },
  scales: {
    x:{
        type: 'time',
        time: {
          unit: 'day',
        },
        grid:{
          display: false,
        },
        ticks: {
            color: 'Black',
            font:{
              size: 14
            }
        }
    },
    y: {
      type: 'linear',
      position: 'left',
      grid:{
        display: false,
      },
      ticks:{
        callback:function(value, index,ticks){
          return value + '°C';
        },
        color: 'black',
        font:{
          size: 14
        }
      }
    }
  },
};

const SensorGraph = () => {
  const [time, setTime] = useState(dataH )
  const [options, setOption] = useState(optionsH)
  
  function setHour(){
    setTime(dataH)
    setOption(optionsH)
  }

  function setDay(){
    setTime(dataD)
    setOption(optionsD)
  }
  
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div style={
            {
                width:'1000px',
                height:'500px',
                padding: '8px',
                background: 'rgb(251,250,251)'
            }
        }>
            <Line
                data = {time}
                options = {options}
            />
        </div>
      </div>

      <div>       
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 to-blue-700 group-hover:from-purple-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"     
            onClick={()=>setHour()
          }>
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 Hour
             </span>
         </button>
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 to-blue-700 group-hover:from-purple-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"     
            onClick={()=>setDay() 
          }>
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 Day
             </span>
         </button>
      </div>

  </div>
  )
}
export default SensorGraph;