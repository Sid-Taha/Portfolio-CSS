import React from "react";
import styles from "./Portfolio.module.css";
import { caveatFont, interFont } from "@/font";
import PortfolioCard from "./portfolio-cards/PortfolioCard";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
          <span>M</span>y <span>L</span>ast <span>W</span>ork
        </h1>

        <p className={interFont.className}>
          I take pride in crafting sleek, responsive web experiences that blend
          functionality with great design.
          <br />
          From interactive user interfaces to performant backend integrations,
          every project reflects my passion for clean code and modern
          development.
          <br />
          Check out some of my work below and see how I bring ideas to life on
          the web.
        </p>

        <div className={styles.myWork}>
          <PortfolioCard />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
