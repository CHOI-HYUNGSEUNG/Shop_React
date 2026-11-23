import './App.css'
import data from './data.js'
import {useState} from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';

function App() {

  const [shoes] = useState(data);
  const navigate = useNavigate();

  return (
    <>
      <div className='App'>
        <nav className='bg-gray-900 text-white px-4 py-3 shadow-md'>
          <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <a onClick={()=>navigate('/')} className='text-xl font-bold tracking-wide hover:text-gray-300 transition-colors'>Shoes Shop</a>
            <div className='flex space-x-6 ml-6 mr-auto'>
              <a onClick={()=>navigate('/')} className='text-gray-300 hover:text-white trainsition-colors font-medium'>Home</a>
              <a onClick={()=>navigate('/detail/0')} className='text-gray-300 hover:text-white transition-colors font-medium'>Detail</a>
              <a onClick={()=>navigate('/cart')} className='text-gray-300 hover:text-white transition-colors font-medium'>Cart</a>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home shoes={shoes}/>}/>
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="member" element={<div>멤버입니다</div>}/>
            <Route path="location" element={<div>위치입니다</div>}/>
          </Route>
          <Route path="/Cart" element={<div>Cart</div>}/>  
        </Routes>
      </div>
    </>
  )
}

export default App;

function About(){
  return (
    
    <>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </>
  )
}
