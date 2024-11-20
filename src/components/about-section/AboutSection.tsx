'use client'
import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/font'
import Button from '../button/Button'
import Image from 'next/image'
import {motion} from "framer-motion"

function AboutSection() {
  return (
    <>
      <section id='about' className={styles.about}>
        <motion.div className={styles.aboutLeftDiv}
          initial={{opacity:0, x: -100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 2, type: "spring"}}
        >
          <h1 className={caveatFont.className}>Taha Ahmed</h1>
          <p className={caveatFont.className}>Freelance Web Developer</p>
          <h2 className={`${styles.detailsText} ${interFont.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          dolorum odio magni possimus corrupti molestiae labore voluptatum
          ut autem deleniti facilis tempora commodi dolores debitis repellendus
          excepturi nisi? Quisquam suscipit iste facere molestiae saepe
          voluptates.</h2>
          <Button text={"Contact Me"}/>
        </motion.div>

        <motion.div className={styles.aboutRightDiv}
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 2, type: "spring"}}
        >
          <Image src={"/profile.png"} alt={"profile picture"} width={400} height={400} className={styles.img}></Image>
        </motion.div>
      </section>
    </>
  )
}

export default AboutSection