import React from 'react'
import Image from 'next/image'
import styles from './TestimonialCard.module.css'
import { interFont } from '@/font'
import { testimonialsCards } from '@/constant/testimonialCard'

function TestimonialCard() {
  return (
    <>
    {testimonialsCards.map((card, index)=>{return (
      <div className={`${styles.cards} ${interFont.className}`} key={index}>
              <div className={styles.cardImage}>
                <Image src={card.src} alt={"picture"} width={150} height={150}></Image>
              </div>

              <p>{card.name}</p>
              <p><span>{card.title}</span></p>
              <p style={{marginBottom: "0px"}}>{card.discription}</p>
      </div>
    )})}
    </>
  )
}

export default TestimonialCard