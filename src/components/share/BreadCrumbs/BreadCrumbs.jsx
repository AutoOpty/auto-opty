'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const {t}=useTranslation()
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <nav className={styles.toBackContainer}>
      <button
        type="button"
        className={styles.buttonToBack}
        onClick={() => router.back()}
      >
        <svg className={styles.toBackSvg}>
          <use href="symbol-defs.svg#icon-arrow-left-circle" />
        </svg>
      </button>
      {!isLoading && (
        <article className={styles.textLink}>
          {/* <h2 className={seoStyles.titleHidden}>Navigation</h2>  */}
          <Link href="/" prefetch={false} className={styles.textLinkAnimation}>
            {t('Navigation.MainPage')}
          </Link>
          / <span className={styles.active}>{title}</span>
        </article>
      )}
    </nav>
  );
};

export default BreadCrumbs;
