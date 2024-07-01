import { Link } from "react-router-dom"
import style from "./styles/nav.module.css"
export default function(){
    return <div className={style.navigation_container}>  
        <ul className={style.navigation}> 
            <h1>Baker Store</h1>

            <li className={style.nav_iteam}>
            <Link className={style.Link} to={`/`}>home</Link>
            <Link  className={style.Link} to={`cart`}>cart</Link>
            </li>
           
        </ul>
    </div>
}