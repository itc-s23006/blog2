import Link from 'next/link'
import styles from 'styles/nav.module.css'
import { useState } from 'react'

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen(prev => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        MENU
      </button>

      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href='/'>
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/about'>
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/blog'>
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
