import './App.css'
import Menu from './layout/Menu'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Footer } from './layout/Footer/index';

function App() {
  return (
    <div>
      <Menu/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}

export default App
