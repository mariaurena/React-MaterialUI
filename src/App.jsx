import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/catalog" element = {<CatalogPage />} />
        <Route path = "/*" element = {<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
