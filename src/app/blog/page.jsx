import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  return []
}

const Blog = async () => {  
  const data = await getData();

  if (data.length === 0){
    return <div>No Data</div>
  }

  return (
    <div className={styles.mainContainer}>
      {data.map((item, index) => {
        return (
          <Link href={`/blog/${item.id}`} className={styles.container} key={index}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt={item.title}
                width={320}
                height={180}
              ></Image>
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
