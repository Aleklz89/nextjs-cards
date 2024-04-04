import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1>Dashboard</h1>
                    <button className={styles.button}>Share</button>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}>Order a card</button>
                    <button className={styles.button}>Manage tags</button>
                    <button className={styles.buy}>Reset filters</button>
                </div>
            </div>
            <div className={styles.totalWorth}>
                <span>Balance</span>
                <h2>$0</h2>
            </div>


        </div>
    );
};

export default Dashboard;
