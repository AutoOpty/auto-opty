'use client';
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const session = useSession();
  // console.log("session header", session);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link href="/">
          <svg className={styles.headerLogo}>
            <use href="symbol-defs.svg#icon-logo" />
          </svg>
        </Link>
        <div className={styles.headerNav}>
          <Link href="/products" className={styles.headerLink}>
            Products
          </Link>
          <Link href="/contact" className={styles.headerLink}>
            Contact
          </Link>
          <Link href="/dashboard" className={styles.headerLink}>
            Dashboard
          </Link>
          {session.status === 'authenticated' && (
            <button onClick={signOut} style={{ padding: '5px' }}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
