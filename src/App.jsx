// components
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return(
      <div className='bg-slate-500 h-full'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  )
}

export default App
