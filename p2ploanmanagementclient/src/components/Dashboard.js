import React from 'react'
import Controller from './Dashboard/Controller'
import Header from './Dashboard/Header'
import Loans from './Dashboard/Loans'

const Dashboard = () => {
  return (
    <div className='container'>
        <Header />
        <Controller />
        <Loans />
    </div>
  )
}

export default Dashboard