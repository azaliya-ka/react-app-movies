import React from 'react';
import { Icon } from '../../components'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Icon />
        </footer>
    );
}

export { Footer }