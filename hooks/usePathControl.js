import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function usePathControl() {
  const currentPath=usePathname()
  const [isTransform,setIsTransform]=useState(true)
  const [isSave,setIsSave]=useState(false)
  const [isDetalle,setIsDetalle]=useState(false)
  const root='/'
  const pathControl={crear:'/addmenu',detalle:'/detalle'}

  useEffect(()=>{
    const valCtrlTransform=currentPath==root
    const valCtrlSave=currentPath==pathControl.crear
    const valCtrlDetalle='/'+currentPath.split('/').splice(1,1)==pathControl.detalle
    setIsSave(valCtrlSave)
    setIsDetalle(valCtrlDetalle)
    setIsTransform(valCtrlTransform)
  },[currentPath])

  return {
    isSave,
    isDetalle,
    isTransform
  }
}