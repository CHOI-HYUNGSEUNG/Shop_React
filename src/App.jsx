
import { createContext, useState } from 'react'
import './App.css'
import data from './db/data'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useSelector } from "react-redux";

// Context 생성
export const Context1 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [remain, setRemain] = useState([10, 11, 12]);

  const navigate = useNavigate();

  // Redux Store 데이터 가져오기
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <a
            onClick={() => navigate('/')}
            className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors cursor-pointer"
          >
            ShoesShop
          </a>

          <div className="flex space-x-6 ml-6 mr-auto">
            <a onClick={() => navigate('/')} className="text-gray-300 hover:text-white cursor-pointer font-medium">
              Home
            </a>

            <a onClick={() => navigate('/detail/0')} className="text-gray-300 hover:text-white cursor-pointer font-medium">
              Detail
            </a>

            <a onClick={() => navigate('/cart')} className="text-gray-300 hover:text-white cursor-pointer font-medium">
              Cart
            </a>

            <a onClick={() => navigate('/about')} className="text-gray-300 hover:text-white cursor-pointer font-medium">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Router */}
      <Routes>
        <Route
          path='/'
          element={<Home shoes={shoes} setShoes={setShoes} />}
        />

        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ remain, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>Member 입니다.</div>} />
          <Route path='location' element={<div>Location 입니다.</div>} />
        </Route>

        <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
