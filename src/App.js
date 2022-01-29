import logo from './logo.svg';
import './App.css';
import './styles.scss'
import Header from './components/Header'
import Play from './components/Play'
import Game from './components/Game'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router';
import { useState } from 'react'

function App() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} />



      <Routes>
        <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
        <Route path="game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
