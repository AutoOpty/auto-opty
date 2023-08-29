import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer}`}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>Privacy & Security</li>
          <li className={styles.footerItem}>Delivery & Payment</li>
          <li className={styles.footerItem}>Products</li>
          <li className={styles.footerItem}>Suppliers</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
