import { Header } from "./components/Header/Header"
import Tasks from "./components/Tasks/Tasks"
import useState from 'react'


function App() {
  const [tasks, setTasks] = useState([]);
  // funcao q permite adc tasks a minha lista de
  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
      <Header />
      <Tasks />
    </>
  )
}

export default App
