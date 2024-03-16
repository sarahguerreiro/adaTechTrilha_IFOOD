import { TbTrash } from 'react-icons/tb'
import styles from './task.module.css'

function Task() {
    return (
        <div className={styles.task} >
            <button className={styles.checkContainer}>
              <div />
            </button>

            <p>Trocar a agua dos gatos</p>

            <button className={styles.deleteButton}>
                <TbTrash size={18} />
            </button>
        </div>
    )
}

export default Task
