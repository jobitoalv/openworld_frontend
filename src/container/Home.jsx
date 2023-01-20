import React,{ useState, useRef, useEffect } from 'react'
// import { HiMenu } from 'react-icons/hi';
// import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';
import { client } from '../cilent';
import logo from '../assets/logo.png';
 

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const userIfo = localStorage.getItem('user') !== 'underfined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(()=> {
    
  },[])
  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transcation-height duration-75 ease-out '>
      <div className='hidden md:flex h-screen flex-initial'>
       <Sidebar/>
    </div>
    <div className='flex md:hidden flex-row'>
      <button className='cursor pointer' onClick={() => setToggleSidebar(false)}>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-28'/>
      </Link>
      <Link to={`user-profile/${user?.id}`}>
        <img src={logo} alt='logo' className='w-28'/>
      </Link>
      </button>
    </div>
    </div>
  )
}

export default Home