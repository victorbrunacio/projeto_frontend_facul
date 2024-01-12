"use client"
import React, { useState } from 'react';
import { openSans } from '@/app/fonts';
import { ArrowImg } from '@/public/exportSvg';

const Localization = () => {
    const dataCountry: string[] = ['Brasil', 'Colômbia', 'Estados Unidos', 'Japão'];

    const [selectedCountry, setSelectedCountry] = useState<string>('Brasil');

    const handleCountryClick = (country: string) => {
        setSelectedCountry(country);
    };

    return (
        <div className={`flex p-10 flex-col justify-between  bg-black-1 w-[440px] h-[360px] shadow rounded-[10px] ${openSans.className}`}>
            <div className="flex items-center justify-between">
                <div className="flex p-5 items-center w-[280px] h-10 bg-black-2 rounded-[10px] shadow">
                    <span className={`text-neutral-700 text-xs font-bold ${openSans.className}`}>
                        localização
                    </span>
                </div>
                <button className="flex border border-white rounded-[15px] h-[40px] w-[40px] p-2 items-center justify-center
                hover:border-2
                ">
                    <ArrowImg />
                </button>
            </div>

            <div>
                {dataCountry.map((item, index) => {
                    return (
                        <div
                            className={`flex gap-2 items-center h-10 w-full rounded-[10px] shadow cursor-pointer`}
                            key={index}
                            onClick={() => handleCountryClick(item)}
                        >
                            <div className={`flex  w-5 h-5  rounded-[5px] shadow border-2 border-neutral-950 ${selectedCountry === item ? 'bg-gradient-to-b from-blue-600 to-blue-700' : ''
                                }`}></div>

                            <span className={`text-white text-xs font-bold h-5`}>{item}</span>
                        </div>
                    );
                })}
            </div>

            <button className="w-[360px] h-10 p-2.5 bg-gradient-to-b from-blue-600 to-blue-800 rounded-[15px] justify-center items-center gap-2.5 inline-flex uppercase text-white text-xs font-bold 
         hover:to-blue-600 transition hover:duration-150
            active:scale-[99%] active:to-blue-600/50 
            ">
                VAMOS LÁ
            </button>
        </div>
    );
};

export default Localization;
