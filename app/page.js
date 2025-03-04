'use client'
import { useState } from "react"

export default function Home() {
  
  function handleChange(e){
    if(Number(e.target.value) > 118){
      setValue(118)
    }else if(Number(e.target.value) < 1){
      setValue(1)
    }else if(e.target.value.includes("e")){
      setValue(118)
    }else{
     setValue(e.target.value)
    }
      
  }
  const [value, setValue] = useState(1)
  return (
    <div>
<div className="flex items-center justify-between mt-10 shodow-xl rounded-lg flex-col">
<div className="p-5 text-center shadow-xl rounded-lg mt-10">
<div className="text-2xl">How many elements ?</div>
<input type="number" className="p-3 text-xl outline-0 rounded-lg shadow-xl" value={value} onChange={handleChange} min={1} max={118}/>
</div>
<div className="p-5 text-center shadow-xl rounded-lg mt-10">
<div className="text-2xl">Test your knowledge:</div>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href={`/numbers?num=${value}`}>Atomic Number</a>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href={`/masses?num=${value}`}>Atomic Mass</a>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href={`/elements?num=${value}`}>Element Names</a>
</div>
</div>
    </div>
  );
}
