import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://static.gausszhou.top/data/image/learn/cheatsheet/boxmodel.png" width={320} height={180}></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Box Model</h1>
          <p className={styles.desc}>Desc</p>
        </div>  
      </Link>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://static.gausszhou.top/data/image/learn/cheatsheet/flexbox.png" width={320} height={180}></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Flex Box</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
