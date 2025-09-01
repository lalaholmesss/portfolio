import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='max-w-5xl border-r-2 border-l-2 border-white-10 mx-auto selection:bg-pink-400 selection:text-white'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Header />} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer />

      
    </div>
  )
}

export default App
