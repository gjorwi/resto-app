import myFonts from "@/utilities/fuentes";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div initial={{scale:0,opacity:0}}
      animate={{
        opacity:[0.5,1,1],
        scale: [0.5,1.2, 1],
        rotate: [0, 360, 0]
      }} 
      transition={{delay:0,duration:0.75}}
      className="w-40 h-40 lg:w-64 lg:h-64 rounded-full bg-white border-2 border-green-100 left-[30%] overflow-hidden flex flex-col justify-center shadow-lg items-center">
      <h1 className={`text-3xl lg:text-[3rem] ${myFonts('bold').className} text-cyan-950`}>ITALIAN</h1>
      <p className={`text-rose-600 text-[2.5rem] lg:text-[3.5rem] -mt-6 -mr-14 lg:-mr-24 ${myFonts('normalSaint').className}`}>Food</p>
      <div className="grid grid-cols-3 w-14 lg:w-20 shadow-md -mt-10 lg:-mt-14 -ml-12 md:-ml-20">
        <div className="bg-green-700 p-[2px]"></div>
        <div className="bg-white-700 lg:p-[4px]"></div>
        <div className="bg-red-700 "></div>
      </div>
    </motion.div>
  );
}