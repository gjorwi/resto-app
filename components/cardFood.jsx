import homeStyle from '@/styles/home.module.css'
import {AiOutlineHeart,AiFillStar} from 'react-icons/ai'
import {MdOutlineAttachMoney} from 'react-icons/md'
import MyFoto from './myFoto';
import myFonts from '@/utilities/fuentes';
import { motion } from "framer-motion"

export default function CardFood({data}) {
    return (
        <motion.div initial={{opacity:0,y:'100%'}} animate={{opacity:1,y:0}} transition={{duration:0.75}} className={`rounded-lg bg-white ${homeStyle.shadow_per} h-52 max-w-4xl`}>
            <header className='w-full pt-4 flex relative justify-center'>
                <AiOutlineHeart className='absolute top-0 right-0 m-3 text-xl text-rose-600 z-10'/>
                <div className="w-[90px] h-[90px] bg-slate-200 rounded-full overflow-hidden">
                    <MyFoto foto={'/img/platoComida.jpg'}/>
                </div>
            </header>
            <main className='pt-3 px-3 flex flex-col gap-y-1 justify-center items-center'>
                <p className={`${myFonts('midBold').className} text-cyan-950 text-sm`}>Plato Especial</p>
                <div className='flex gap-2 pt-1'>
                    <p className='text-slate-400 text-xs'>15min -</p>
                    <p className='text-slate-400 text-xs flex justify-center items-center'>4.5 <span className='text-amber-400 text-base'><AiFillStar/></span> </p>
                </div>
                <div className='relative flex'>
                    <MdOutlineAttachMoney className={`text-xs text-cyan-950 -mr-1 mt-[2px]`}/> <p className={`${myFonts('midBold').className} text-cyan-950`}>8.00</p>
                </div>
            </main>
        </motion.div>
    );
}