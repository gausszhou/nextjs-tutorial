import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.imgContainer}>
          <Image alt="1"></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
