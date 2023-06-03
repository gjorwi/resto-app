'use client'
import { motion } from "framer-motion";

export default function Addmenu() {
  return (
    <div className="h-full w-full flex justify-center ">
      <form className="h-full flex flex-col justify-center gap-y-2 w-3/4">
        <label htmlFor="nameFood" className="text-cyan-950 pl-2 -mb-2">Nombre del plato</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-2 rounded-full outline-none shadow-sm  " name="nameFood"/>
        <label htmlFor="timeFood" className="text-cyan-950 pl-2 -mb-2">Tiempo de preparación</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-2 rounded-full outline-none shadow-sm " name="nameFood"/>
        <label htmlFor="PriceFood" className="text-cyan-950 pl-2 -mb-2">Precio</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-2 rounded-full outline-none shadow-sm " name="nameFood"/>
        <label htmlFor="ingredFood" className="text-cyan-950 pl-2 -mb-2">Ingredientes</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-2 rounded-full outline-none shadow-sm " name="nameFood"/>
        <label htmlFor="descFood" className="text-cyan-950 pl-2 -mb-2">Descripción</label>
        <motion.textarea rows={'4'} whileTap={{scale:1.2}} type="text" className="p-2 rounded-xl outline-none shadow-sm " name="nameFood"></motion.textarea>
      </form>
    </div>
  );
}