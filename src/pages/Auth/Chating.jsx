import React from 'react'
import Sidebar from '../../components/Sidebar'
import Chat from '../../components/chating/Chat'

const Chating = () => {
  return (
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
  )
}

export default Chating