'use client'
import React, { Suspense } from 'react';
import { useRef, useState } from "react"
import { useSearchParams } from 'next/navigation'
import Table from "../Table"


export default function Home() {
  const searchParams = useSearchParams();
  const number = searchParams.get('num')
  function changeHandle(e){
    setVal(e.target.value)
  }
  function know(){
   setShow(true)
  }
  function Check(){
    if(Number(val) == ""){
      setAns("Type something to know it is right or wrong")
    }else{
      if(val.toLowerCase().trim() == ENum.toLowerCase().trim()){
        setAns("correct")
    }else{
      setAns("wrong")
    }
    
  }
}
  const [arr, setArr] = useState(["Hydrogen"]);
  function element(){
    setAns("")
    setShow(false)
    let num = Math.round(Math.random()*(number-1))+1
    let E = PTable[num].name
    setNum(E)
    if(!(arr.includes(E))){
    setName(num)
    setArr([...arr, E]);
    }else if(arr.length == number){
      setFinish(true)
    }else{
      element()
    }
  }
  const inputRef = useRef()
  const PTable = Table
  const [val, setVal] = useState(" ")
  const [Ans, setAns] = useState("")
  const [EName, setName] = useState(PTable[1].number)
  const [show,setShow] = useState(false)
  const [ENum, setNum] = useState("hydrogen")
  const [finish, setFinish] = useState(false)
    return (
      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="m-5 p-5 shadow-xl rounded-lg flex justify-center items-center flex-col">
    <div className="text-xl text-center">what is the Name of element with atomic number {EName} ?</div>
    <input ref={inputRef} value ={val} onChange={changeHandle} placeholder="Enter your answer" className="outline-0 shadow-xl m-5 rounded-lg h-12 text-md p-3" type="text"/> 
    <div className="flex justify-between">
    <div className="flex justify-center items-center p-3 bg-orange-400 rounded-lg text-white cursor-pointer mr-4" onClick={element}>Next</div>
    <div className="flex justify-center items-center p-3 bg-orange-400 rounded-lg text-white cursor-pointer mr-4" onClick={know}>Don't Know</div>
    <div className="flex justify-center items-center p-3 bg-orange-400 rounded-lg text-white cursor-pointer" onClick={Check}>Check</div>  
    </div>
    <div className=" my-3 text-lg">
       your Answer is: {Ans}
    </div>
    <div className=" my-3 text-lg">
       Answer is: {show? ENum : "Click on 'Don't Know' option to see answer "}
    </div>
    <div className=" my-3 text-lg">
       {finish? "Finished" : ""}
    </div>
    </div>
      </div>
      </Suspense>
    );
  }