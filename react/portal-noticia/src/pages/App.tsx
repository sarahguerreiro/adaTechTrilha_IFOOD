import './App.css'
import Header from '../components/header/Header'
import ListaManchete from '../components/listaManchete/ListaManchete'
import { noticiasContants } from '../constants/noticiasConstants'

function App() {
  
  return (
    <div className='App'>
      <Header />
      <ListaManchete />
    </div>
  )
}

export default App
