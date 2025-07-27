import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contatos from './Contatos'
import Sobre from './sobre'
import Header from './Header'
import Footer from './Footer'
import Receitas from './receitas'
import Development from './assets/development.svg'

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />

       <div className='content'>    
         <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/contatos" element={<Contatos />}/>
           <Route path="/sobre" element={<Sobre />}/>
           <Route path="/receitas" element={<Receitas />}/>
        </Routes>
           
           <figure className={'figure'}>
           <img src={Development} alt="imagem1" className={'imagem1'} />
           <img src={Development} alt="imagem2" className={'imagem2'} />
           </figure>

      </div>
     
      <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
