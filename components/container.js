import styles from 'styles/container.module.css'

const Container = ({ children }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
