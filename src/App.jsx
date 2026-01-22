import { useState,useEffect} from "react"
import axios from "axios"
function App() {
// Hooks
  const [data,setData]=useState([])


  //async await used to resolve promises
  async function getdata()
  {
  // Axios for get and put data
    const res=await axios.get("https://fakestoreapi.com/products")
    setData(res.data)
  }
//hook to handle sideeffect -call getdata
  useEffect(()=>{
    getdata()
  },[] //array dependency
  )
  console.log(data)


  return (
  <>
    {/* use map funtion to show data on frontend */}
        <section style={{display:'flex',justifyContent:'center', flexWrap:'wrap',gap:'10px'}}>
        {data.map((item)=> {
          return(
            <div style={{height:'22 rem' ,border:'2px solid black',width:'18rem'}}>
              <h4>{item.title}</h4>
              <img style={{height:'200px' ,width:'100%'}} src={item.image} alt="img" />
              <p>price: ${item.price}</p>

              <button>Buy Now</button>
            </div>
          )
        }
        )
        }
        </section>
  </>
  )
}

export default App
