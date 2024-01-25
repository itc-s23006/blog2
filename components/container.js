import styles from 'styles/container.module.css'

const Container = ({ children }) => {
  return <div className={styles.default}>{children}</div>
}

export default Container
