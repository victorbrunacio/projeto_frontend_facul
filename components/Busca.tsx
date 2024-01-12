import { openSans } from "@/app/fonts"
import { SearchIcon } from "@/public/exportSvg"
const Busca = () => {
    return (
        <div className={`flex items-center justify-between w-[360px] h-[60px] bg-black-1 rounded-[10px] p-4 shadow ${openSans.className}`}>
           <input type="text" placeholder="Busca"  className="text-white-1 text-base font-bold border-none outline-none bg-transparent" />
            <button className="bg-gradient-to-b cursor-pointer from-blue-1 to-blue-2 p-2 w-[40px] h-[40px] flex items-center justify-center rounded-lg
             hover:from-blue-400 hover:to-blue-600
             active:scale-90 transition-all active:to-blue-600/50 
            ">
                <SearchIcon />
            </button>
        </div>
    )
}

export default Busca