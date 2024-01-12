import { openSans } from "@/app/fonts"
import { SearchIcon } from "@/public/exportSvg"
const Busca = () => {
    return (
        <div className={`flex items-center justify-between w-[360px] h-[60px] bg-black-1 rounded-[10px] p-4 shadow ${openSans.className}`}>
            <span className="text-neutral-700 text-base font-bold">
                Busca
            </span>
            <button className="bg-gradient-to-b cursor-pointer from-blue-1 to-blue-2 p-2 w-[40px] h-[40px] flex items-center justify-center rounded-lg
             hover:from-blue-400 hover:to-blue-600
            ">
                <SearchIcon />
            </button>
        </div>
    )
}

export default Busca