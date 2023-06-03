'use client'
import Logo from '@/components/logo'
import Nav from '@/components/nav'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import Login from './login/page'

const poppins = Poppins({ subsets: ['latin'],weight:'400' })

export const metadata = {
  title: {
    default:'Italian Food',
      template: '%s | Italian Food',
    },
  description: 'Restaurante Gourmet',
}

export default function RootLayout({ children }) {
  const currentPath=usePathname()
  const [isTransform,setIsTransform]=useState(false)
  const pathControl='/addmenu'
  const loginControl='/login'

  useEffect(()=>{
    const valCtrl=currentPath!=pathControl
    setIsTransform(valCtrl)
  },[currentPath])

  return (
    <html lang="en">
      <AnimatePresence>
        <body className={`${poppins.className} bg-red-300 select-none`}>
          {currentPath==loginControl?
            <Login/>
            :<>
              <div className='flex flex-col md:flex-row w-full h-screen bg-white bg_image'>
                <motion.div layout className={`${isTransform ?'h-[25vh]':'h-[15vh]'}  md:h-full  ${isTransform ?'md:w-[20vw]':'md:w-[20vw]'} flex relative`}>
                  {isTransform&&
                    <div className={`absolute z-20 bottom-0 w-full -mb-14 md:mb-0  md:h-full flex justify-center items-center md:w-auto md:right-0 md:justify-end md:-mr-12 lg:-mr-28 `}>
                      <Logo />
                    </div>
                  }
                  <Nav isTransform={isTransform}/>
                </motion.div>
                <motion.div layout className={`${isTransform ?'h-[75vh]':'h-[85vh]'} bg-slate-100  md:h-full  ${isTransform ?'md:w-[80vw]':'md:w-[90vw]'} rounded-t-[5vh] md:rounded-t-[0vh] md:rounded-l-[5vh] overflow-y-auto`}>
                  {children}
                </motion.div>
              </div>
            </>
          }
        </body>
      </AnimatePresence>
    </html>
  )
}
