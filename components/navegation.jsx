import dats from '@/utilities/staticDats' 
import Link from 'next/link';
import { motion } from "framer-motion"
import myFonts from '@/utilities/fuentes';

export default function Navegation({toggleMenu}) {
  return (
    <motion.div initial={{opacity:0,x:'-40%'}} animate={{opacity:1,x:0}} transition={{ duration: 0.75 }} className='flex justify-center'>
      <ul className='w-3/5 flex flex-col gap-y-2'>
        {dats.menuItems.map(item => (
          <Link href={item.enlace} onClick={()=>toggleMenu()} className='' key={item.enlace}>
            <li className={`${myFonts('normal').className} p-2 bg-white text-cyan-950 rounded-full flex justify-center`}>{item.text}</li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
}