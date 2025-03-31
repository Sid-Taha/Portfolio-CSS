import React from "react";
import styles from "./Services.module.css";
import { caveatFont, interFont } from "@/font";
import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <>
      <section id="service" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
          I help clients bring their ideas to life through custom design and
          development solutions. Whether its building a responsive website,
          crafting a unique brand identity, or optimizing user experience,
          <br />I focus on creating impactful digital experiences that drive
          results.
        </p>

        <div className={styles.servicesCardDiv}>
          <ServicesCard />
        </div>
      </section>
    </>
  );
}

export default Services;
