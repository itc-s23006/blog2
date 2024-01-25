import styles from 'styles/two-column.module.css'

const TwoColumn = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

export { TwoColumn }
