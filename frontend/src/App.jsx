import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import components
import Home from './pages/home';
import Test from './test';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
