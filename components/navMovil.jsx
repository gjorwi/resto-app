import myFonts from "@/utilities/fuentes";
import Navegation from "./navegation";
import {IoIosArrowBack} from 'react-icons/io'
import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion"


export default function NavMovil({toggleMenu}) {
    return (
      <AnimatePresence>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} exit={{ opacity: 0 }} className='fixed top-0 left-0 bg_rgbaBlack w-full h-full flex justify-start z-50'>
          <motion.nav initial={{x:'-100%'}} animate={{x:0}} transition={{duration:0.5}} exit={{ opacity: 0,x:'-100%' }} className='w-4/5 md:w-[350px] h-full bg_image relative rounded-r-3xl overflow-hidden'>
            <button onClick={toggleMenu} className='absolute right-0 top-0 bg-slate-200 rounded-full py-2 m-2 text-xl px-3'>
              <IoIosArrowBack className="text-cyan-950"/>
            </button>
            <header className='flex justify-center bg-white rounded-b-[4vh] items-center h-[20vh]'>
              <h1 className={`${myFonts('bold').className} text-cyan-950`}>Menu</h1>
            </header>
            <main className='h-[80vh] w-full py-4 '>
              <Navegation toggleMenu={toggleMenu}/>
            </main>
            <footer className="fixed bottom-0 left-0 w-full flex justify-center p-4">
              <Link href='/login'>
                <button onClick={()=>toggleMenu()} className="py-2 px-6 bg-rose-600 rounded-full text-white">Iniciar sesion</button>
              </Link>
            </footer>
          </motion.nav>
        </motion.div>
      </AnimatePresence>
    );
}