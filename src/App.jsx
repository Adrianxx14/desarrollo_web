import React from 'react';
import Header from './Componentes/Header';
import Content from './Componentes/Content';
import Footer from './Componentes/Footer';
import Aside from './Componentes/Aside';
import { Fragment } from 'react';


const App = () => {
  return (
    <>
      <Header/>
      <Content/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default App