import React from 'react'
import Navbar from '../../../../components/navigation/nurseNavbar/Navbar'
import Header from '../../../../components/Header/Header'

import './graph.css'

const Graph = () => {
  return (
    <div className="container-graph">
        <div className="graph-navbar">
          <Navbar />
        </div>
        <div className="graph-header">
          <Header name="DATA GRAPH" />
        </div>
        <div className='content-graph'>
          graph
        </div>
    </div>
  )
}

export default Graph;