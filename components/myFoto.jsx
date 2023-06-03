'use client'
import Image from "next/image"
import { useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function MyFoto({margin,foto}) {
  const [loadingImg,setLoadingImg]=useState(false)
  const terminarCarga = () =>{
    setLoadingImg(true)
  }

  return (
    <>
      <div className="flex flex-col relative w-full h-full">
        {!loadingImg &&
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-3xl">
              <AiOutlineLoading3Quarters className={`loaderIcon`} />
            </div>
          } 
        <div className={' w-full h-full relative pt-[100%] '}>
          <Image 
            src={foto} 
            onLoadingComplete={(img) => img.classList.remove('opacity-0')} 
            fill 
            priority="true"
            onLoad={(e) => terminarCarga()} 
            className={margin+" object-cover transition-opacity duration-[2s] opacity-0"} alt="" />
        </div>
      </div>
    </>
  )
}

