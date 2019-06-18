import React from 'react';
import burgerLogo from '../../assets/images/133 burger-logo.png';
import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="myBurger"/>
    </div>
);

export default logo;