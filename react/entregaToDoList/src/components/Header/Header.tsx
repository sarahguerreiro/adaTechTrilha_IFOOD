import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <form className={styles.newTaskForm}>
        <input placeholder='Adicione uma tarefa' type='text' />
        <button>
          Adicionar
        </button>
      </form>
    </header>
  )
}
