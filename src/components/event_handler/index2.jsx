import React,{useState} from 'react'

const New = () => {
    const [count,setCount] = useState(0)
    const handdleCount = () =>{
        setCount(count +1)
    }
    
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handdleCount}>click</button>
    </div>
  )
}

export default New