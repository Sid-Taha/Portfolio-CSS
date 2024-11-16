'use client'
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./ServicesCard.module.css";
import { interFont } from "@/font";
import { servicesCards } from "@/constant/servicesCard";
import {motion, useMotionValue, useTransform} from "framer-motion"

function ServicesCard() {
  return (
    <>
      {servicesCards.map((item, index) => {
        return (
          <Card item={item} key={index}/>
        );
      })}
    </>
  );
}


// card component
  function Card({item}:{item:{src:string, title:string, discription:string}}){
    const cardRef = useRef<HTMLDivElement | null>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-100, 100], [30, -30])
    const rotateY = useTransform(mouseX, [-100, 100], [-20, 20])
    
    const handleMouseMove = (e: React.MouseEvent) =>{
      if(!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }


    return(
        <motion.div className={`${styles.card} ${interFont.className}`}
          ref={cardRef}
          style={{perspective: 1000, rotateX: rotateX, rotateY: rotateY}}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.cardImage}>
            <Image
              src={item.src}
              alt={"picture"}
              width={60}
              height={60}
            ></Image>
          </div>

          <h1>{item.title}</h1>

          <p>{item.discription}</p>
      </motion.div>
      )
  }













export default ServicesCard;
