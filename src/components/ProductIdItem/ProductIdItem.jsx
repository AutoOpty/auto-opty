import { prodactDetails } from '@/data/prodactDetails';
import styles from './ProductIdItem.module.scss';
import { useTranslation } from 'react-i18next';
import { currentLanguages } from '@/data';

const ProductsIdItem = ({ dataId }) => {
  const { i18n } = useTranslation();
  return (
    <ul className={styles.container}>
      {prodactDetails.map((item) => (
        <li key={item.id}>
          <p className={styles.text}>
            {i18n.language === currentLanguages.EN ? item.titleEN : item.title}:{' '}
            {item.title !== 'Встановлено з - до'
              ? item.info !== 'titleEn'
                ? dataId[item.info]
                : i18n.language === currentLanguages.EN
                ? dataId[item.info]
                : dataId[item.infoEN]
              : `${dataId.installedFrom} - ${dataId.installedUntil}`}{' '}
            {item.titleEN === 'Price' && <span>₴</span>}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsIdItem;

// {
//   i18n.language === currentLanguages.EN ? el.titleEN : el.title;
// }
