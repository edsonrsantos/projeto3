import {Link, useLocation} from 'react-router-dom'
import './App.css'



const menu = () => {
   
    return (
    
    <div className='menu'>
    <nav>
          <Link to="/" >Home</Link> 
          <Link to="/contatos" >contatos</Link> 
          <Link to="/sobre" >sobre</Link>
          <Link to="/receitas" >receitas</Link>

       </nav> 

      
    </div>
  )

}


export default menu