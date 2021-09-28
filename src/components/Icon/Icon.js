import React from 'react';
import styles from './Icon.css'

const Icon = () => {
    return (
        <div>
            <span className={styles.icon__bold}>netflix</span>
            <span className={styles.icon__norm}>roulette</span>
        </div>
    );
}

export { Icon }