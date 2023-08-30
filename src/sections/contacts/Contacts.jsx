import React from 'react';
import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contact">
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
          <a
            href="https://www.instagram.com/web.every/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            className={styles.iconContainer}
          >
            <svg className={styles.icon}>
              <use href="symbol-defs.svg#icon-instagram" />
            </svg>
            <p className={styles.SocialLink}>autoopty</p>
          </a>
          <span className={styles.iconContainer}>
            <svg className={styles.icon}>
              <use href="symbol-defs.svg#icon-mail" />
            </svg>
            <a
              href="mailto:inbox.webevery@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className={styles.SocialLink}
            >
              autoopty@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
