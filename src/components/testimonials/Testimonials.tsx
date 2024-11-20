'use client'
import React from 'react'
import styles from './Testimonials.module.css'
import { caveatFont } from '@/font'
import useEmblaCarousel from 'embla-carousel-react'
import TestimonialCard from './testimonial-card/TestimonialCard'
import Autoplay from 'embla-carousel-autoplay'

function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])
  return (
    <>
      <section id='testimonial' className={styles.testimonials}>
        <h1 className={caveatFont.className}><span>W</span>hat {" "}
            <span>O</span>ther {" "}
            <span>P</span>eople {" "}
            <span>S</span>ay
        </h1>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <TestimonialCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials