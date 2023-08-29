import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link href="/" className={styles.headerLogo}>
          Logo
        </Link>
        <div className={styles.headerNav}>
          <Link href="/products" className={styles.headerLink}>
            Products
          </Link>
          <Link href="/contact" className={styles.headerLink}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
