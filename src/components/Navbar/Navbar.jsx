"use client";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { links } from "./data";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const currentRoute = usePathname();

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Home</Link>
      <div className={styles.links}>
        <DarkModeToggle></DarkModeToggle>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={
            currentRoute === link.url ?
            styles.activeLink: 
            styles.link
          }>
            {link.title}
          </Link>
        ))}
         {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
