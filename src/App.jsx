import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contatos from './Contatos'
import Sobre from './Sobre'
import Header from './Header'
import Footer from './Footer'
import Receitas from './receitas'
import Development from './assets/development.svg'
import Detalhes from './Detalhes'
import Menu from './Menu'
import Produtos from './Produtos'
import Texto from './Texto'


function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
      <Menu />
       <div className='content'>    
         <Routes>
          <Route path="/" element={<Home />}/> 
          <Route index element={<Texto />} />
          <Route path="/contatos" element={<Contatos />}/>
           <Route path="/sobre" element={<Sobre />}/>
           <Route path="/receitas" element={<Receitas />}/>
           <Route path="/detalhes" element={<Detalhes />}/>
           <Route path="/produtos" element={<Produtos />}/>

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
