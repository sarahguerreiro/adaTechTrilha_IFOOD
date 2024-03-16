import Task from '../Task/Task'
import styles from './tasks.module.css'

function Tasks() {
  return (
    <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Create Tasks</p>
                <span>10</span>
            </div>

            <div>
                <p className={styles.textPurple} >Completed Tasks</p>
                <span>1/10</span>
            </div>
        </header>

        <div className={styles.list} >
           <Task/>
        </div>
    </section>
  )
}

export default Tasks