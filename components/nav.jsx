'use client'
import { motion,AnimatePresence } from "framer-motion"
import {BiMenuAltLeft} from 'react-icons/bi'
import {CgSearch} from 'react-icons/cg'
import { useState } from 'react';
import NavMovil from './navMovil';

export default function Nav ({isTransform}) {
  const [menuShow,setMenuShow]=useState(false)

  const toggleMenu = () => { 
    console.log("algo")
    setMenuShow(!menuShow)
  }

  return (
    <AnimatePresence>
      <nav className={`w-full flex justify-between p-4`}>
        {menuShow &&
            <NavMovil toggleMenu={toggleMenu}/>
        }
        <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.1}} onClick={()=>{toggleMenu()}} className='w-10 h-10 rounded-full flex justify-center items-center bg-white text-xl'>
          <BiMenuAltLeft/>
        </motion.div>
        <div className={`${!isTransform&&'hidden'} md:hidden`}>
          <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.1}} className='flex bg-white justify-between rounded-full px-2 items-center'>
            <input type="text" className='outline-none pl-1'/>
            <CgSearch className='m-2 text-xl'/>
          </motion.div>
        </div>
        <div className={`${isTransform&&'hidden'}`}>
          <button onClick={()=>{}} className="py-2 rounded-full px-4 bg-rose-600 text-white">Guardar Menu</button>
        </div>
      </nav>
    </AnimatePresence>
  );
}