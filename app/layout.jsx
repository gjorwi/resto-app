'use client'
import Logo from '@/components/logo'
import Nav from '@/components/nav'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Login from './login/page'
import usePathControl from '@/hooks/usePathControl'

const poppins = Poppins({ subsets: ['latin'],weight:'400' })

export default function RootLayout({ children }) {
  const currentPath=usePathname()
  const {isDetalle,isSave,isTransform}=usePathControl()
  const loginControl='/login'

  return (
    <html lang="es">
      <AnimatePresence>
        <body className={`${poppins.className} select-none`}>
          {currentPath==loginControl?
            <Login/>
            :<>
              <div className='flex flex-col md:flex-row w-full h-screen bg-[#22c04f] bg_image'>
                <motion.div layout className={`${isTransform ?'h-[25vh]':'h-[15vh]'}  md:h-full  ${isTransform ?'md:w-[20vw]':'md:w-[20vw]'} flex relative`}>
                  {isTransform&&
                    <div className={`absolute z-20 bottom-0 w-full -mb-14 md:mb-0  md:h-full flex justify-center items-center md:w-auto md:right-0 md:justify-end md:-mr-12 lg:-mr-28 `}>
                      <Logo />
                    </div>
                  }
                  <Nav isTransform={isTransform} isSave={isSave} isDetalle={isDetalle}/>
                </motion.div>
                <motion.div layout className={`${isTransform ?'h-[75vh]':'h-[85vh]'} bg-transparent  md:h-full  ${isTransform ?'md:w-[80vw]':'md:w-[90vw]'} rounded-t-[5vh]  md:rounded-l-[5vh] overflow-y-auto md:rounded-tr-[0vh]`}>
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
