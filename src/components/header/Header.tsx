'use client'
import React from 'react'
import styles from './Header.module.css' 
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import { AnimatePresence, motion } from 'framer-motion'

function Header() {
 const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>Taha Ahmed</h1>
          
          <AnimatePresence>
          {isOpen ? (
            <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}
              key={"active"}
              initial={{opacity:0, width: 0}}
              animate={{opacity:1, width: "40%"}}
              exit={{opacity:0, width: 0}} 
              transition={{duration: 2, type: "spring"}}
            >
              <CgCloseR size={30} className={styles.close} onClick={()=>setIsOpen(false)}/>
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"#about"}>About</Link></li>
              <li><Link href={"#portfolio"}>Portfolio</Link></li>
              <li><Link href={"#service"}>Services</Link></li>
              <li><Link href={"#testimonial"}>Testimonials</Link></li>
              <li><Link href={"#contact"}>Contact</Link></li>
            </motion.ul>
          ) 
          : 
          (
            <ul className={`${interFont.className} ${styles.navUl}`}>
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"#about"}>About</Link></li>
              <li><Link href={"#portfolio"}>Portfolio</Link></li>
              <li><Link href={"#service"}>Services</Link></li>
              <li><Link href={"#testimonial"}>Testimonials</Link></li>
              <li><Link href={"#contact"}>Contact</Link></li>
            </ul>
          ) }
          </AnimatePresence>

          <TiThMenu size={30} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
        </nav>
      </header>
    </>
  )
}

export default Header