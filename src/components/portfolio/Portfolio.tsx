import React from 'react'
import styles from './Portfolio.module.css'
import { caveatFont, interFont } from '@/font'
import PortfolioCard from './portfolio-cards/PortfolioCard'

function Portfolio() {
  return (
    <>
      <section id='portfolio' className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
          <span>M</span>y {" "}
          <span>L</span>ast {" "} 
          <span>W</span>ork
        </h1>

        <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in 
          <br />numquam dolor libero explicabo, inventore aperiam, commodi et! Quia iste tempora aut, illum culpa ipsum possimus saepe
          <br />eligendi.
        </p>

        <div className={styles.myWork}>
          <PortfolioCard/>
        </div>
      </section>
    </>
  )
}

export default Portfolio