import React, { useEffect, useRef, useState } from 'react'
import data from './ImagesData.json'
import './Image.css'

function ImageSlider() {
    const[next,setNext]=useState(0)
    const ref= useRef();
    useEffect(()=>{
        ref.current = setInterval(handleNext,3000)
        return(()=>{
            clearInterval(ref.current)
        })
    },[])
    const handlePrev=()=>{
        if(next==0){
            setNext(next+1)
        }
        else{
            setNext(next-1)
        }
    }
    const handleNext=()=>{
        setNext((value)=>{
            if(value==data.length-1){
                return 0;
            }
            return value+1;
        })
    }
  return (
    <div>
        <div onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=>setInterval(handleNext,1000)}>
            <div>
            <button className='absolute top-[900px] left-10' onClick={handlePrev}>{"<"}</button>
            </div>
            <img src={data[next].image} className='size-[400px] p-6 w-full'/>
            <div>
            <button className='absolute top-[900px] right-10' onClick={handleNext}>{">"}</button>
            </div>
           
        </div>
    </div>
  )
}

export default ImageSlider
