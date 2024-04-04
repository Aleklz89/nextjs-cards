"use client"

import React from 'react'
import styles from './Sidebar.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Sidebar() {

  const pathname = usePathname();

  const isActive = (path) => {
    console.log(path)
    console.log(pathname)
    const isActivePath = pathname === path;
    console.log(`Путь: ${path}, Активен: ${isActivePath}`);
    return isActivePath;
  };
  console.log("Классы для '/cards':", isActive('/cards') ? `${styles.navItem} ${styles.navItem.active}` : styles.navItem);

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.navList}>
      <li className={isActive('/cards') ? styles.active : styles.navItem}>
          <Link href="/cards" passHref>
            <span className={styles.icon}></span>
            <span className={styles.icon}>
              <Image
                src="https://i.ibb.co/9GnbbJz/free-icon-dollar-sign-2769269.png"
                alt="Description"
                className="icon"
                width={28}
                height={28}

              />
            </span>
            Cards
          </Link>
        </li>
        <li className={isActive('/transactions') ? styles.active : styles.navItem}>
          <Link href="/transactions" passHref>
            <span className={styles.icon}></span>
            <span className={styles.icon}>
              <Image
                src="https://i.ibb.co/XtqQc1L/free-icon-time-and-calendar-8327630.png"
                alt="Description"
                className="icon"
                width={28}
                height={28}

              />
            </span>
            Transactions
          </Link>
        </li>
        <li className={isActive('/support') ? styles.active : styles.navItem}>
          <Link href="/support">
            <span className={styles.icon}></span>
            <span className={styles.icon}>
              <Image
                src="https://i.ibb.co/mSkBQM8/free-icon-question-mark-8426914.png"
                alt="Description"
                className="icon"
                width={28}
                height={28}

              />
            </span>
            Support
          </Link>
        </li>
        <li className={isActive('/settings') ? styles.active : styles.navItem}>
          <Link href="/settings">
            <span className={styles.icon}></span>
            <span className={styles.icon}>
              <Image
                src="https://i.ibb.co/zX5ftLw/free-icon-setting-4945808.png"
                alt="Description"
                className="icon"
                width={28}
                height={28}

              />
            </span>
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;