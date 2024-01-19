import { prodactDetails } from '@/data/prodactDetails';
import styles from './ProductIdItem.module.scss';

const ProductsIdItem = ({ dataId }) => {
  return (
    <ul className={styles.container}>
      {prodactDetails.map((item) => (
        <li key={item.id}>
          <p className={styles.text}>
            {item.title} :{' '}
            {item.title !== 'Installed From - Until'
              ? dataId[item.info]
              : `${dataId.installedFrom} - ${dataId.installedUntil}`}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsIdItem;
