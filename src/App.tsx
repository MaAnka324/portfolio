import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import DistWork from "./distWork/DistWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        {/*<DistWork/>*/}
        {/* <Contacts/> */}
        <Footer/>
    </div>
  );
}

export default App;
