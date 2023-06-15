import React from 'react';
import Navbar from '../../../components/navigation/nurseNavbar/Navbar';
import Card from './components/Card/Card';
import Header from '../../../components/Header/Header'
import TodaySchedule from './components/TodaySchedule/TodaySchedule';
import './nurseHomeStyles.css'
import Alert from './components/Alert/Alert';
  
const NurseHomeScreen1 = () => {
  const cardData = [1, 2, 3, 4, 5]
 
    return (
      <div className="container-nurse">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="nurse-dashboard-header">
          <Header name="DASHBOARD" />
        </div>
        <div className="content1">
          <div className="card-group flex justify-center space-x-6">
            {cardData.map((item) => (
              <Card key={item} />
            ))}
          </div>
          <div className="today-schedule flex justify-start space-x-0">
            <TodaySchedule />
          </div>
            <Alert message="Sensor threshold reached!"/>
        </div>
      </div>
    );
  }

export default NurseHomeScreen1;
