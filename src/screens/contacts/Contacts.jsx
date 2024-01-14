'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './contacts.module.scss';

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      {/* <h1 className={seoStyles.titleHidden}>
        Оренда квартири Суми. Сумы квартиры. Квартири подобово.
      </h1> */}
      <nav className={styles.toBackContainer}>
        {!isLoading && (
          <article className="textLink">
            {/* <h2 className={seoStyles.titleHidden}>Navigation</h2> */}
            {/* <Link href="/" prefetch={false} className="textLinkAnimation">
              {t('Navigation.MainPage')}
            </Link> */}
            {/* / <span className="active">{t('Navigation.Contacts')}</span> */}
          </article>
        )}
      </nav>

      <div className={styles.contactContainer}>
        <article className={styles.titleContainer}>
          {!isLoading && (
            <>
              <h2 className={styles.title}>Контакти</h2>
              <h3 className={styles.text}>
                Сміливо телефонуй нам або пиши у будь-яку з соцмереж. Будемо
                раді допомогти і потеревенити з тобою!
              </h3>
            </>
          )}
        </article>
        <article className={styles.content}>
          {/* <h4 className={seoStyles.titleHidden}>Contact information</h4> */}
          <figure className={styles.mapImgContainer}>
            <Image
              src="/BasemapAutoOpty.webp"
              alt="Image map"
              fill={true}
              priority={true}
              className={styles.mapImg}
              title="Image google map"
              sizes="(min-width: 1920px) 800px, (min-width: 1380px) 712px, (min-width: 1040px) 474px, (min-width: 780px) calc(7.5vw + 328px), 328px"
            />
          </figure>
          <address className={styles.addressContainer}>
            <figure className={styles.cityContainer}>
              <svg width="36" height="36" className={styles.citySvg}>
                <use href="symbol-defs.svg#icon-flag-ukraine" />
              </svg>
              {!isLoading && (
                <figcaption className={styles.city}>Україна, Суми</figcaption>
              )}
            </figure>
            <a
              href="https://maps.app.goo.gl/NTDTgDfgvo4h1nPj7"
              target="_blank"
              className={styles.address}
            >
              <figure className={styles.imgContainer}>
                <Image
                  src="/Google Maps Old.png"
                  alt="google maps"
                  fill={true}
                  className={styles.img}
                  title="Icon google map"
                  sizes="36px"
                />
              </figure>

              {!isLoading && <figcaption>вул.Степана Бандери, 3</figcaption>}
            </a>
            <address className={styles.telContainer}>
              <a href="tel:+380357960808" className={styles.tel}>
                +38 035 796 08 08
              </a>
              <a href="tel:+380357960808" className={styles.tel}>
                +38 035 796 08 08
              </a>
            </address>
            <address className={styles.box}>
              <div className={styles.socialLinks}>{/* <SocialLinks /> */}</div>
              <a href="mailto:AutoOpti23@gmail.com" className={styles.mail}>
                AutoOpti23@gmail.com
              </a>
            </address>
          </address>
        </article>
      </div>
    </section>
  );
};

export default Contacts;
