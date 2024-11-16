'use client'
import React from "react";
import styles from "./portfolioCard.module.css";
import Image from "next/image";
import { portfolioCards } from "@/constant/portfolioCard";
import Link from 'next/link'
import {motion} from "framer-motion"

function PortfolioCard() {
  return (
    <>
      {portfolioCards.map((item, index) => {
        return (
          <motion.div className={styles.card} key={index}
            initial={{opacity:0, scale: 0}}
            whileInView={{opacity:1, scale: 1}}
            transition={{duration:1}}
          >
            <Link href={item.href}>
            <div className={styles.cardImage}>
              {item.type == "image" ? (
                <Image
                  src={item.src}
                  alt={"profile picture"}
                  width={407}
                  height={407}
                  className={styles.img}
                />
              ) : (
                <video src={item.src} controls loop muted></video>
              )}
            </div>
            </Link>
            <div className={styles.cardText}>{item.title}</div>
          </motion.div>
        );
      })}
    </>
  );
}

export default PortfolioCard;

