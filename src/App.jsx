import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contatos from './Contatos'
import Header from './Header'
import Footer from './Footer'

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
  
       <div className='content'>    
         <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/contatos" element={<Contatos />}/>
        </Routes>
      </div>
     
      <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
