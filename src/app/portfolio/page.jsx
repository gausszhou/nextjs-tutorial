import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Illustrations from "public/illustrations.png";
import Websites from "public/websites.jpg";
import Apps from "public/apps.jpg";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectTitle}>Choose a gallery</div>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <Image className={styles.image} src={Illustrations} width={300} height={400} alt="illustrations"></Image>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <Image className={styles.image} src={Websites} width={300} height={400} alt="websites"></Image>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <Image className={styles.image} src={Apps} width={300} height={400} alt="application"></Image>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
