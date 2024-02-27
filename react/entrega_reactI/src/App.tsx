import React, { useState } from "react";
import { Login } from "./pages/Login/Login.tsx"
import { Register } from './pages/Register/Register.tsx'
import './App.css'

function App() {
  const [formAtual, setFormAtual] = useState('login');

  const toggleForm = (formName) => {
     setFormAtual(formName)
  }

  return (
    <div className='App'>
      {
        formAtual === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }



    </div>

  )
}

export default App;
