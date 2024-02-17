import { motion,useAnimation } from 'framer-motion'
import Power4 from "gsap/all";
import {Components, useState} from 'react'
import React from 'react'

function Featured(){
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y:'0'})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:'100%'})
    }

    return(
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal_Regular"] tracking-tight font-light'>Featured projects</h1>
            </div>
            <div className='px-20'>
            <div className='cards w-full flex gap-10'>
                <motion.div 
                    onHoverStart={()=>handleHover(0)}
                    onHoverEnd={()=> handleHoverEnd(0)}
                    className='relative cardcontainer w-1/2 h-[75vh]'>
                    <h1 className='absolute flex left-full overflow-hidden leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-[#CDEA68] z-[9] font-["Founders_Grotesk"] text-8xl'>
                        {"FYDE".split('').map((item, index)=> (
                            <motion.span 
                                initial={{y: "100%"}} 
                                animate={cards[0]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                            className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <h2 className='mt-10'>FYDE</h2>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
                    </div>
                </motion.div>
                <motion.div 
                    onHoverStart={()=>handleHover(1)}
                    onHoverEnd={()=> handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h2 className='mt-10'>VISE</h2>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden right-full leading-none translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-[#CDEA68] z-[7] font-["Founders_Grotesk"] text-8xl'>
                        {"VISE".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[1]}
                            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
                    </div>
                </motion.div>
            </div>
            <div className='cards w-full flex gap-10 mt-[120px]'>
                <motion.div 
                onHoverStart={()=>handleHover(2)}
                onHoverEnd={()=> handleHoverEnd(2)}
                className='relative cardcontainer w-1/2 h-[69vh]'>
                    <h1 className='absolute flex overflow-hidden left-full leading-none -translate-x-1/2 top-[37.5vh] -translate-y-1/2 tracking-tighter text-[#CDEA68] z-[9] font-["Founders_Grotesk"] text-8xl'>
                        {"TRAWA".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[2]}
                            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <h2 className='mt-10'>TARWA</h2>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg'></img>
                    </div>
                </motion.div>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <motion.div 
                    onHoverStart={()=>handleHover(3)}
                    onHoverEnd={()=> handleHoverEnd(3)}
                    className='card w-full h-full rounded-xl overflow-hidden'>
                    <h2 className='mt-10'>PREMIUM BLEND</h2>
                    <h1 className='absolute flex overflow-hidden truncate right-full leading-none translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-[#CDEA68] z-[9] font-["Founders_Grotesk"] text-8xl'>
                        {"PREMIUM BLEND".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[3]}
                            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'></img>
                    </motion.div>
                </div>
            </div>
            </div>
        </div>
    )
    
}

export default Featured