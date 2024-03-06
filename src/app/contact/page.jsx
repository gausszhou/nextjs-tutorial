import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import LinkButton from "@/components/LinkButton/LinkButton";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image className={styles.image} src="/contact.png" width={600} height={500} alt="1"></Image>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea name="message" placeholder="message" className={styles.textarea} id="1" cols="30" rows="10"></textarea>
        <LinkButton url="#" text="Send"></LinkButton>
      </form>
      </div>
    </div>
  );
};

export default Contact;
