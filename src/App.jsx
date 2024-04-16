//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Page2 from './pages/Pagina2'
import Page3 from './pages/Pagina3'
import Form from './pages/Form'

import CarDetails from './components/CarDetails'
function App() {
  /* const users = [
    { id: 1001, nome: "Tom", idade: 19, profissao: "só dorme" },
    { id: 1002, nome: "Lisa", idade: 20, profissao: "Aprendiz" },
    { id: 1003, nome: "Jão", idade: 17, profissao: "só dorme" },
    { id: 1004, nome: "Ciclano", idade: 16, profissao: "Desenvolvedor" },
    { id: 1005, nome: "Fulano", idade: 23, profissao: "Desenvolvedor Senior" }
  ]
  const cars = [
    { id: 1001, marca: "Fiat", km: 650, cor: "Cinza", ano: "2000" },
    { id: 1002, marca: "Ford", km: 19, cor: "Preto", ano: "2015" },
    { id: 1003, marca: "Toyota", km: 0, cor: "Branco", ano: "2021" },
    { id: 1004, marca: "XingXong", km: 10, cor: "Prata", ano: "2020" },
    { id: 1005, marca: "Fiat", km: 20, cor: "Azul Escuro", ano: "2018" }
  ] */

  return (
    <>
      {/* <div>
        <ShowUserName name='Ciclano' />
        {users.map((users) => (
          <UserDetails
            key={users.id}
            nome={users.nome}
            idade={users.idade}
            profissao={users.profissao} />
        ))}
      </div> */}
     {/*  <div>
       
        {cars.map((cars) => (
          <CarDetails
            key={cars.id}
            marca={cars.marca}
            km={cars.km}
            cor={cars.cor} 
            ano={cars.ano}/>
        ))}
      </div>
 */}
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pagina2' element={<Page2 />} />
          <Route path='/pagina3' element={<Page3 />} />
          <Route path='/Form' element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
