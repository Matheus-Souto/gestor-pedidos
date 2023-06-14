// components
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'

const App = () => {
  return(
      <div className='bg-slate-600 h-full'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/client/cart' element={<Cart />} />
        </Routes>
      </div>
  )
}

export default App
