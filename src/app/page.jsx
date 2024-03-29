import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design in here.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptate veniam exercitationem facilis placeat voluptas blanditiis, deserunt dolorum cumque, pariatur vero corrupti consequatur impedit, repudiandae quaerat illo accusamus ipsam. Molestiae!
        </p>
        <LinkButton url="/portfolio" text="See Our Works"></LinkButton>
      </div>
      <div className={styles.item}>
        <Image className={styles.image} width={500} height={500} src={Hero} alt="1"></Image>
      </div>
    </div>
  );
}
