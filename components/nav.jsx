'use client'
import { motion,AnimatePresence } from "framer-motion"
import {BiMenuAltLeft} from 'react-icons/bi'
import {FaRegSave} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import {CgSearch} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react';
import NavMovil from './navMovil';
import { useRouter } from "next/navigation"

export default function Nav ({isTransform,isSave,isDetalle}) {
  const [menuShow,setMenuShow]=useState(false)
  const router=useRouter()
  const toggleMenu = () => { 
    setMenuShow(!menuShow)
  }
  const comeBack = () => { 
    router.replace('/')
  }

  return (
    <AnimatePresence>
      <div className="w-full ">
        <nav className={`w-full flex justify-between p-4`}>
          {menuShow &&
              <NavMovil toggleMenu={toggleMenu}/>
          }
          {isTransform?
            <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.1}} onClick={()=>{toggleMenu()}} className='shadow-sm shadow-rose-800 w-14 h-14 rounded-full flex justify-center items-center bg-white text-2xl'>
              <BiMenuAltLeft className="text-slate-900"/>
            </motion.div>
            :<motion.div whileHover={{scale:1.2}} whileTap={{scale:1.1}} onClick={()=>{comeBack()}} className='shadow-sm shadow-rose-800 w-14 h-14 rounded-full flex justify-center items-center bg-white text-2xl'>
              <IoIosArrowBack className="text-slate-900"/>
            </motion.div>
          }
          <div className={`${!isTransform&&'hidden'} md:hidden`}>
            <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.1}} className='flex bg-white justify-between rounded-full px-2 py-[6px] items-center'>
              <input type="text" className='outline-none pl-1'/>
              <CgSearch className='m-2 text-2xl text-rose-600'/>
            </motion.div>
          </div>
          {isSave&&
            <div >
              <button onClick={()=>{}} className="p-4 rounded-full bg-rose-600 text-white">
                <FaRegSave className="text-2xl "/>
              </button>
            </div>
          }
          {isDetalle&&
            <div>
              <button onClick={()=>{}} className="p-4 rounded-full bg-white text-slate-900">
                <AiOutlineHeart className="text-2xl "/>
              </button>
            </div>
          }
        </nav>
      </div>
    </AnimatePresence>
  );
}