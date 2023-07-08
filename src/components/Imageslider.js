"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Imageslider({Imgarr}) {
  const array = Imgarr
  const len = array.length
  const [i,seti] = useState(0)
  const [pic,setpic] = useState(array[0])
  
 
  const dots = Array.from(array,(_,index)=>{
    if(index===i){
      return(<div className="h-2 w-2 border-2 rounded mx-1 bg-white"></div>)
    }
    else{
      return(<div className="h-2 w-2 border-2 rounded mx-1 "></div>)
    }
  });

  const next = () => {
    if(i === len-1){
      seti(0)
    }
    else{
      seti(i+1)
    }
  };

  const back = () => {
    if(i === 0){
      seti(len-1)
    }
    else{
      seti(i-1)
    }
  };

  useEffect(()=>{
    setpic(array[i])
  },[i,array]);

  return (
    <>
    <div className='h-screen w-200 bg-red-200 grid grid-rows-[25%_60%_10%]'>
      <div className='flex justify-center'><h1>This Component uses tailwind css and concepts like <br />1 useEffect and useState react hooks, <br />2 variable divs which is used for dots using array.from method <br />3 and props it takes an array of adresses of images and displays them 
        <br />
        Further plan:- to integrate database and convert this into a slide of profiles with picture name and experience or a slider for animation,text and audio </h1>
      </div>
      <div className='flex justify-center items-center'>
      <div className="h-60 w-2/5 bg-blue-500 border rounded-lg grid grid-cols-[20%_minmax(0px,_1fr)_20%] sm: w-4/5">
        <div className="flex justify-center items-center"><button onClick={back} className='bg-red-200 border rounded-lg items-center'>Back</button></div>
        <div className="grid grid-cols-1 grid-rows-[90%_10%]"><div className='flex justify-center items-center'><Image alt='dog pic' className='border rounded-md my-2 sm: my-10 sm: h-48 w-96' width={300} height={300} src={pic} /></div> <div className='flex justify-center items-center'>{dots}</div></div>
        <div className="flex justify-center items-center"><button onClick={next} className='bg-red-200 border rounded-lg'>Next</button></div>
      </div>
      </div>
      <div></div>
    </div>      
    </>
  )
}

export default Imageslider
