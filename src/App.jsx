// components
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return(
    <>
      <div>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
