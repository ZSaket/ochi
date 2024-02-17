import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" class="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
            {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
                return( <div className="masker">
                            <div className="w-fit flex overflow-hidden">
                              {index === 1 && (
                                <motion.div 
                                  intial={{width: "0vw" }}  
                                  animate={{width:"10vw"}} 
                                  transition={{ease : [0.34, 1.56, 0.64, 1], duration: 1}}
                                  className="w-[9vw] rounded-md h-[5.7vw] top-[0.8vw] relative bg-green-500"></motion.div>
                              )}
                              <h1 className="pt-[2vw] -mb-[1vw] font-bold uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk']">
                                {item}
                              </h1>
                            </div>
                        </div>
                );
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=><p className="test-md font-light tracking-tight leading-none">{item}</p>)}
            <div className="start flex items-center gap-2">
              <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
              <div className="w-10 h-10 border-[2px] flex items-center border-zinc-500 rounded-full">
                <span className="rotate-[45deg] px-2.5">
                  <FaArrowUpLong/>
                </span>
              </div>
            </div>
        </div>
    </div>    
  )
}

export default LandingPage