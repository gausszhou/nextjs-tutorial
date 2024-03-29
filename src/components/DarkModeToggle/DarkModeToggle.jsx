"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const { toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }}></div>
    </div>
  );
};

export default DarkModeToggle;
