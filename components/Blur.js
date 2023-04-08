import React from 'react'
import { useGlobalContext } from '@/app/Context/store';

const Blur = () => {
    const {menuToggle} = useGlobalContext();
  return (
    <div className={`${menuToggle ? "fixed" : "hidden"} top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-white/30 opacity-50 h-screen w-[100vw]`}></div>
  )
}

export default Blur;