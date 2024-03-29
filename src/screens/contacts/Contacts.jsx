'use client';

import BreadCrumbs from '@/components/share/BreadCrumbs/BreadCrumbs';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './contacts.module.scss';
import seoStyles from '@/app/seoStyles.module.css';

const Contacts = () => {

  const {t}=useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири Суми. Сумы квартиры. Квартири подобово.
      </h1>
      <figure className={styles.toBackContainer}>
        <BreadCrumbs title={t('Navigation.Contacts')} />
      </figure>
        <div className={styles.contactContainer}>
        <article className={styles.titleContainer}>
          {!isLoading && (
            <>
              <h2 className={styles.title}>{t('ContactsPage.Title')}</h2>
              <h3 className={styles.text}>
              {t('ContactsPage.Text')}
              </h3>
            </>
          )}
        </article>
        <article className={styles.content}>
          <h4 className={seoStyles.titleHidden}>Contact information</h4>
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
            {!isLoading &&<><svg className={styles.citySvg}>
                <use href="symbol-defs.svg#icon-flag-ukraine" />
              </svg>
               
                <figcaption className={styles.city}>{t('ContactsPage.CountryAndSity')}</figcaption></>
              }
            </figure>
            <a
              href="https://maps.app.goo.gl/NTDTgDfgvo4h1nPj7"
              target="_blank"
              className={styles.address}
            >
              {!isLoading &&<><figure className={styles.imgContainer}>
                <Image
                  src="/Google Maps Old.png"
                  alt="google maps"
                  fill={true}
                  className={styles.img}
                  title="Icon google map"
                  sizes="36px"
                />
              </figure>
              <figcaption>{t('ContactsPage.Adress')}</figcaption></>}
            </a>

            <figure className={styles.cityContainerMobile}>
              <svg width="36" height="36" className={styles.citySvg}>
                <use href="symbol-defs.svg#icon-flag-ukraine" />
              </svg>
              {!isLoading && (
                <figcaption className={styles.city}>
                  Суми,
                  <a
                    href="https://maps.app.goo.gl/NTDTgDfgvo4h1nPj7"
                    target="_blank"
                    className={styles.addressMobile}
                  >
                    {!isLoading && (
                      <figcaption>вул.Степана Бандери, 3</figcaption>
                    )}
                  </a>
                </figcaption>
              )}
            </figure>
            <address className={styles.telContainer}>
              <svg className={styles.svg}>
                <use href="symbol-defs.svg#icon-phone" />
              </svg>
              <figure className={styles.telContent}>
                <a href="tel:+380966058605" className={styles.tel}>
                  +38 096 605 86 05
                </a>
                <a href="tel:+380966058605" className={styles.tel}>
                  +38 096 605 86 05
                </a>
              </figure>
            </address>
            <address className={styles.mailContainer}>
              <svg className={styles.svg}>
                <use href="symbol-defs.svg#icon-mail" />
              </svg>
              <a href="mailto:AutoOpti23@gmail.com" className={styles.mail}>
                AutoOpti23@gmail.com
              </a>
            </address>
            <div>
              <SocialLinks
                className={styles.socialLinksContainer}
                iconSocialLink={styles.socialLinks}
              />
            </div>
          </address>
        </article>
      </div>
    </section>
  );
};

export default Contacts;
