import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Illustration from 'public/illustration.png'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Illustration} width={500} height={500}></Image>
      </div>
      <div className={styles.textContainer}></div>
    </div>
  )
}

export default About