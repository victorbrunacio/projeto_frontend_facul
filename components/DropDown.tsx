"use client"
import { openSans } from "@/app/fonts";
import { useState } from "react";
import { MotionDiv } from "@/utils/MotionDiv";
import { ArrowImg } from "@/public/exportSvg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const emoji = ["😊", "😂", "🤣", "😍", "😎"]

  return (
    <div className={`flex flex-col gap-5 ${openSans.className}`}>
      <div className={`flex p-5 items-center justify-between w-[280px] h-[60px] rounded-[10px] shadow bg-black-1`}>
        <span className="font-[700] text-[16px] text-white-1">
          Dropdown
        </span>
        <div
          className={`transform group transition-transform cursor-pointer  ${isOpen ? "rotate-90" : "-rotate-90"}`}
          onClick={toggleDropDown}
        >
          <ArrowImg />
        </div>
      </div>
      {isOpen && <MotionDiv
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerDirection: -1
            }
          }
        }}
        initial="hidden"
        animate="show"
        className={`flex  p-5 items-center justify-around  w-[280px] h-[60px] rounded-[10px] shadow  bg-black-1   `}>
        {emoji.map((emoji, index) => (
          <MotionDiv
            key={index} className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            {emoji}
          </MotionDiv>
        ))}

      </MotionDiv>
      }

    </div>
  );
};

export default DropDown;
