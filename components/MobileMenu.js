import React from 'react'
import { useGlobalContext } from '@/app/Context/store';
import { Menus} from "@/constants";

const MobileMenu = () => {
    const {menuToggle, setMenuToggle, active, setActive, blur, setBlur } = useGlobalContext();

  return (
    <div
            className={`${
              !menuToggle ? "hidden" : "flex"
            } h-auto bottom-0 right-0 left-0 p-8 fixed  bg-lightIndigo mx-4 my-2 min-w-[140px] w-[92vw] z-10 rounded-xl delay-300 `}
          >
            <div className="fixed h-[8px] w-[20vw] ml-[30vw] pt-[-5px] items-stretch bg-darkIndigo"/>
            <ul className="list-none flex flex-col justify-start gap-1 px-5 rounded-2xl">
              {Menus.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "bg-lightGreen text-white" : "text-white"
                  } active:bg-lightGreen font-poppins font-medium cursor-pointer text-[16px] py-2 pl-2 pr-12 rounded-lg`}
                  onClick={() => {
                    setMenuToggle(!menuToggle);
                    setBlur(!blur);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default MobileMenu;