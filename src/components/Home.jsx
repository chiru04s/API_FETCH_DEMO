import { useState } from "react"

function Home()
{
    const [count, setcount]= useState(0)
    function incremnt()
    {
        setcount(count+1)
    }
    function decremnt()
    {
        setcount(count-1)
    }
    return(
        <div style={{display:"flex",justifyContent:"center",alignContent:"center", height:"100vh"}}>
            <button onClick={incremnt} style={{fontSize:'2rem',height:"90px", width:"50px"}}>+</button>
            <p style={{fontSize:'5rem'}}> {count} </p>
            <button onClick={decremnt} style={{fontSize:'2rem',height:"90px", width:"50px"}}>-</button>

        </div>
    )
}

export default Home