'use client'
import myFonts from '@/utilities/fuentes'
import homeStyle from '@/styles/home.module.css'
import CardFood from '@/components/cardFood'
import { getAllMenu } from '@/servicios/getAllMenu'
import { useEffect, useState } from 'react'
import Loading from './loading'
import { motion } from 'framer-motion'

export default function Home() {
  const [data,setData]=useState([])
  const [isClicked,setIsClicked]=useState(false)
  const [loading,setLoading]=useState(false)

  useEffect( () => {
    
    const loadFunct = async () =>{
      try {
        const [menuList] = await Promise.all([getAllMenu()])
        setData(menuList)
        setLoading(true)
      } catch (error) {
        console.log(error)
      }
    }
    loadFunct()
  },[])

  const handleList = (val) =>{
    setIsClicked(val)
  }

  if(!loading) return ( <Loading/> )

  return (
    <main className='bg_figuras rounded-t-[5vh] overflow-y-auto'>
      <div className='w-full flex justify-center items-center gap-2 pt-16'>
        <motion.div onClick={()=>{handleList(false)}} whileHover={{scale:1.1}} whileTap={{scale:1.05}} className={`${myFonts('midBold').className} rounded-full py-2 px-4  ${homeStyle.shadow_per} ${!isClicked?'text-slate-700 bg-yellow-400':' text-cyan-950 bg-white'}  text-sm`}>
          Recomendado
        </motion.div>
        <motion.div onClick={()=>{handleList(true)}} whileHover={{scale:1.1}} whileTap={{scale:1.05}} className={`${myFonts('midBold').className} rounded-full py-2 px-4 ${isClicked?'text-slate-700 bg-yellow-400':' text-cyan-950 bg-white'} ${homeStyle.shadow_per} text-sm`}>
          Popular
        </motion.div>
      </div>
      <div className='flex justify-center'>
        {data!=null?
          <div className='grid grid-cols-2 min-[550px]:grid-cols-3 max-[549px]:w-4/5 max-[450px]:w-11/12 max-[350px]:w-full lg:w-3/5 gap-4 justify-center items-center p-4'>
            {data?.map(menu=>(
              <motion.div key={menu.id} whileHover={{scale:1.1}} whileTap={{scale:1.05}}><CardFood data={menu} /></motion.div>
            ))}
          </div>
          :<div className='flex justify-center w-11/12 pt-8 bg-white rounded-xl'><p>No hay menu registrado</p></div>
        }
      </div>
    </main>
  )
}
