import React from 'react'
import { useGlobalContext } from '@/app/Context/store';

const Blur = () => {
    const {menuToggle} = useGlobalContext();
  return (
    <div className={`${menuToggle ? "fixed" : "hidden"} top-0 bottom-0 left-0 right-0 blur-lg opacity-70 bg-black h-screen w-[100vw]`}></div>
  )
}

export default Blur;