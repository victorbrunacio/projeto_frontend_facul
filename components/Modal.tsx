import Image from "next/image"
import girlImage from "@/public/test-pic-1.jpg"
import { openSans } from "@/app/fonts"
const Modal = () => {
  return (
    <div className=' flex items-center justify-center w-[500px] h-[200px] bg-black-1 rounded-[10px] text-white-1 shadow'>
      <div className="h-[120px] w-[120px] relative">
        <div className="absolute -bottom-[2px] -right-[2px] h-[10px] w-[10px] shadow rounded-full bg-gradient-to-b from-green-1 to-[#358A28]"></div>
        <Image className="w-full h-full object-cover rounded-[10px]" src={girlImage} alt="girl" />
      </div>

      <div className="flex flex-col ml-[30px]">

        <div className="leading-[40px] mb-5">
          <h3 className="font-bold text-base">Alicia Santana da Silva</h3>
          <p>Você quer participar da nossa experiência?</p>
        </div>

        <div className={` ${openSans.className} text-xs flex gap-5`}>

          <button className="bg-gradient-to-b from-red-1 to-red-2 w-[120px] h-10 px-[30px] py-2.5 rounded-[15px] shadow justify-center items-center gap-2.5 font-bold uppercase 
         hover:to-red-1
         active:to-red-2/70 active:scale-90 transition-all
          "
          >
            Abrir
          </button>

          <button className="border border-white border-opacity-40 bg-black-1 w-[120px] h-10 px-[30px] py-2.5 rounded-[15px] shadow justify-center items-center gap-2.5 font-bold uppercase
           hover:bg-[#2a2a2a]/90
          active:scale-90 transition-all
          "
          >
            Fechar
          </button>

        </div>

      </div>
    </div>
  )
}

export default Modal