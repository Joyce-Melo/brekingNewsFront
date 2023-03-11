import React from 'react' //Executando o react
import ReactDOM from 'react-dom/client' //manipulando a DOM
import App from './App' //importando um componenete
import './index.css' //importando o CSS

ReactDOM.createRoot(document.getElementById('root')).render( //esse root está no index.html e erstarei renderizando o componenete App que está ali embaixo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
