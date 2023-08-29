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
            <span className={styles.iconContainer}>
              <svg className={styles.icon}>
                <use href="symbol-defs.svg#icon-map-pin" />
              </svg>
              <p className={styles.contactSity}>Kiev</p>
            </span>

            <p className={styles.contactStreet}>st. Besarabska 32, 1st floor</p>

            <span className={styles.iconContainer}>
              <svg className={styles.icon}>
                <use href="symbol-defs.svg#icon-phone" />
              </svg>
              <p className={styles.contactTel}>+ 38 (9**) *** - ** - **</p>
            </span>
          </address>
        </div>
        <div className={styles.contactSocialLinks}>
          <span className={styles.iconContainer}>
            <svg className={styles.icon}>
              <use href="symbol-defs.svg#icon-instagram" />
            </svg>
            <p className={styles.SocialLink}>autoopty</p>
          </span>
          <span className={styles.iconContainer}>
            <svg className={styles.icon}>
              <use href="symbol-defs.svg#icon-mail" />
            </svg>
            <p className={styles.SocialLink}>autoopty@gmail.com</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
