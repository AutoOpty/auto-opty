import React from 'react';
import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contact">
      <div className={styles.contactNav}>
        <h2 className={styles.contactTitle}>LOGO NAME</h2>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16803.066698879473!2d13.501204893204163!3d52.53916091123047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84dbe92d81c69%3A0xf97765d9a3fcd61d!2sBMW%20Branch%20Office%20Berlin%20Wei%C3%9Fensee!5e0!3m2!1suk!2sua!4v1693514207092!5m2!1suk!2sua"
            width="226"
            height="169"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Адреса на мапі"
          ></iframe>
        </div>
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
