import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image
                    src="https://i.ibb.co/FWQ7tRc/Screenshot-1043-removebg-preview.png"
                    alt="GFG logo served with static path of public directory"
                    height="45"
                    width="55"
                    
                />
                <span className={styles.logoText}>
                    <span className={styles.logoTextCard}>Card</span>
                    <span className={styles.logoTextShop}>Shop</span>
                </span>
            </div>
            <nav className={styles.nav}>

                <a className={styles.navLink} href="/account-level">
                    <span>Account level</span>
                    <span className={styles.navLinkUnderline}></span>
                </a>

            </nav>
            <div className={styles.controlGroup}> {/* Общий контейнер для элементов управления */}
                <div className={styles.controls}>
                    <Image
                        src="https://i.ibb.co/x7vcf4Z/8801434.png"
                        alt="Settings icon"
                        height="25"
                        width="25"
                        
                    />
                </div>
                <div className={styles.divider}></div> {/* Разделительная линия */}
                <div className={styles.controls}>
                    <Image
                        src="https://i.ibb.co/K048YRF/png-transparent-settings-gear-icon-gear-configuration-set-up-thumbnail-removebg-preview.png"
                        alt="Settings icon"
                        height="25"
                        width="25"
                        
                    />
                </div>

            </div>
        </header>
    );
};

export default Header;
