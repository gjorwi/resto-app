'use client'
import MyFoto from "@/components/myFoto";
import myFonts from "@/utilities/fuentes";
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineAttachMoney} from 'react-icons/md'
import { motion } from "framer-motion";
import usePathControl from "@/hooks/usePathControl";

export default function Detalles({params}) {
  const {isTransform}=usePathControl()

  if(isTransform) return(<div className="flex justify-center bg_figuras items-center w-full h-full ">Loading...</div>)

  return (
    <div className=" w-full h-full flex flex-col items-center ">
      <motion.div layout className=" w-full flex flex-col items-center py-10">
        <motion.div animate={{opacity:[0,0,0.2,1],scale:[0,0,1.2,1]}} transition={{duration:1}} className={`fixed opacity-0 top-16 z-20 w-[220px] h-[220px] rounded-full bg-white overflow-hidden  shadow-perDetalle`}>
          <MyFoto foto={'/img/platoComida.jpg'}/>
        </motion.div>
      </motion.div>
      <div className="flex-grow-0 bg_figuras rounded-t-[5vh] w-full h-full flex flex-col items-center p-6 px-10 pt-24">
        <div>
          <h1 className={`${myFonts('midBold').className} text-2xl text-slate-900`}> Plato especial</h1>
        </div>
        <div className="w-full flex justify-evenly p-4">
          <p className="text-slate-700 flex items-center"><span className="text-blue-400 text-2xl"><BiTimeFive/></span> 15min</p>
          <p className="text-slate-700 flex items-center"><span className="text-yellow-400 text-2xl"><AiOutlineStar/></span> 4.5</p>
        </div>
        <div>
          <p className={`text-4xl flex items-center ${myFonts('midBold').className} text-slate-900`}><span className="text-base -mt-5 -mr-1"><MdOutlineAttachMoney/></span> 8</p>
        </div>
        <div className="flex flex-col items-start">
          <p className={`${myFonts('bold').className}  text-slate-900 py-2 mt-6`}>Ingredientes</p>
          <ul className={`${myFonts('midBold').className} flex flex-wrap gap-4 text-slate-600`}>
            <li>Tomate</li>
            <li>Zanaoria</li>
            <li>Salchicha</li>
            <li>Pimenton</li>
            <li>Carne</li>
            <li>Papas</li>
          </ul>
          <p className={`${myFonts('bold').className}  text-slate-900 py-2 mt-6`}>Descripción</p>
          <p className="text-slate-400">Solomo de carne asada y chorizo, acompañado de ensalada de vegetales y pure de papas</p>
        </div>
      </div>
    </div>
  );
}