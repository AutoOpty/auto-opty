import { currentLanguages } from '@/data';
import { useTranslation } from 'react-i18next';
import styles from './ProductDescription.module.scss';

const ProductDescription = ({ dataId }) => {
  const { i18n } = useTranslation();
  return (
    <p className={styles.description}>
      {i18n.language === currentLanguages.EN
        ? dataId?.descriptionEn
        : dataId?.description}
    </p>
  );
};

export default ProductDescription;
