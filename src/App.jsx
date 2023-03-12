import './App.css'
import { GlobalStyled } from './GlobalStyled'
import Home from './pages/Home/Home'


function App() {
  return (
    <>
    <GlobalStyled/> 
    {/* Qualquer tag que eu colocar abaixo do GlobalStyled irá assumir o estilo do nosso globalstyled.jsx */}
    <Home /> 
    </>
  )
  
}

export default App
