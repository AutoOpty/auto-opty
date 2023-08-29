import React from 'react';
import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactNav}>
        <h2 className={styles.contactTitle}>LOGO NAME</h2>
        <div className={styles.map}></div>
      </div>
      <div className={styles.contactAddressBox}>
        <div className={styles.contactAddressContainer}>
          <h3 className={styles.contactSubtitle}>Central office in Ukraine</h3>
          <address className={styles.contactAddress}>
            <p className={styles.contactSity}>Kiev</p>
            <p className={styles.contactStreet}>st. Besarabska 32, 1st floor</p>
            <p className={styles.contactTel}>+ 38 (9**) *** - ** - **</p>
          </address>
        </div>
        <div className={styles.contactSocialLinks}>
          <p className={styles.SocialLink}>autoopti</p>
          <p className={styles.SocialLink}>autoopti@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
