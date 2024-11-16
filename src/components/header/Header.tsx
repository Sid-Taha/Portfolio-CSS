import React from 'react'
import styles from './Header.module.css' 
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>Taha Ahmed</h1>

          <ul className={interFont.className}>
            <li><Link href={"#!"}>Home</Link></li>
            <li><Link href={"#!"}>About</Link></li>
            <li><Link href={"#!"}>Portfolio</Link></li>
            <li><Link href={"#!"}>Services</Link></li>
            <li><Link href={"#!"}>Testimonials</Link></li>
            <li><Link href={"#!"}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header