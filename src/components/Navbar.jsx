import { Link } from "react-router-dom"
function Navbar()
{
    return(
        <ul style={{display:'flex',justifyContent:'space-around',alignContent:'center', height:'3rem', backgroundColor:'yellow'}}>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/About'}><li>About</li></Link>


        </ul>
    )
}

export default Navbar
