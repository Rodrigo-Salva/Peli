import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LoginPage from "./page/LoginPage"
import HomePage from "./page/HomePage"
import CategoryPage from './page/CategoryPage'
import SeriePage from './page/SeriePage'
import SerieFormPage from "./page/SerieFormPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/categories" element={<CategoryPage/>}/>
        <Route path="/series" element={<SeriePage/>}/>        
        <Route path="/series/edit/:inserie" element={<SerieFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
