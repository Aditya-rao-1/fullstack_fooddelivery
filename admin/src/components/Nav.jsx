import React from 'react'
import {logogo, profile_icon} from "../../../frontend/public/assets/index.js"

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-3 bg-[#0c0c24]'>
        <img src={logogo} width={150} height={30} alt="" />
        <img src={profile_icon} className='mr-10' alt="" />
    </div>
  )
}

export default Nav