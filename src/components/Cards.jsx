import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 items-center px-32 flex gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card flex items-center justify-center relative rounded-xl w-full h-full bg-[#1e2e2c]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 uppercase'>rating 5.0 on clutch</button>
            </div>
            <div className='card flex items-center justify-center relative rounded-xl w-full h-full bg-[#182221]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 uppercase'>business bootcamp alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards