import React from 'react'
import {useNavigate} from 'react-router-dom';
import Logo from '../../assets/GitHub_Logo_White.png'
import { Children } from '../../types/components'
export const NavBar = ({children}:Children) => {
    const navigate  = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <nav className="bg-gray-900 h-[10vh]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://github.com/josedpacheco95/github-repository-task" className="flex items-center">
      <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
  </a>
  <div className="flex md:order-2">
      <button onClick={() => handleLogout()} type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">logout</button>
      
    
  </div>
  </div>
</nav>
{children}
        </>
    )
}