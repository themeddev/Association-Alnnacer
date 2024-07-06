import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import components
import Home from './pages/home';
import Test from './test';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/about-us';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/test' element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
