import React from 'react';
import styles from './History.module.css';

const History = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1>Transactions</h1>
                    <button className={styles.button}>Share</button>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}>History</button>
                    <button className={styles.button}>Create Statement</button>
                    <button className={styles.buy}>Saved statements</button>
                </div>
            </div>
            <input className={styles.search__input} type="text" placeholder="Search" />
            <input className={styles.search__input} type="text" placeholder="accounts" />

        </div>
    );
};

export default History;