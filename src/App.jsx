import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contatos from './Contatos'
import Sobre from './sobre'
import Header from './Header'
import Footer from './Footer'
import Receitas from './receitas'
import Development from './assets/development.svg'
import Detalhes from './Detalhes'

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
           <Route path="/detalhes" element={<Detalhes />}/>
        </Routes>
           
           <figure className={'figureAppjsx'}>
           <img src={Development} alt="imagem1Appjsx" className={'imagem1Appjsx'} />
           <img src={Development} alt="imagem2Appjsx" className={'imagem2Appjsx'} />
           </figure>

      </div>
     
      <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
