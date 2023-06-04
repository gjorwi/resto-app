'use client'
import { motion } from "framer-motion";

export default function Addmenu() {
  return (
    <div className="h-full w-full flex justify-center items-start ">
      <form className="flex flex-col justify-center gap-y-2 w-4/5 rounded-2xl bg-white shadow-sm shadow-slate-200 mt-16 p-4">
        <label htmlFor="nameFood" className="text-slate-500 pl-2 -mb-2">Nombre del plato</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-3 rounded-full outline-none shadow-sm shadow-slate-300  bg-slate-100 " name="nameFood"/>
        <label htmlFor="timeFood" className="text-slate-500 pl-2 -mb-2">Tiempo de preparación</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-3 rounded-full outline-none shadow-sm shadow-slate-300  bg-slate-100" name="nameFood"/>
        <label htmlFor="PriceFood" className="text-slate-500 pl-2 -mb-2">Precio</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-3 rounded-full outline-none shadow-sm shadow-slate-300  bg-slate-100" name="nameFood"/>
        <label htmlFor="ingredFood" className="text-slate-500 pl-2 -mb-2">Ingredientes</label>
        <motion.input whileTap={{scale:1.2}} type="text" className="p-3 rounded-full outline-none shadow-sm shadow-slate-300  bg-slate-100" name="nameFood"/>
        <label htmlFor="descFood" className="text-slate-500 pl-2 -mb-2">Descripción</label>
        <motion.textarea rows={'4'} whileTap={{scale:1.2}} type="text" className="p-2 rounded-xl outline-none shadow-sm shadow-slate-300  bg-slate-100" name="nameFood"></motion.textarea>
      </form>
    </div>
  );
}