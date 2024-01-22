import styles from './ProductDescription.module.scss';

const ProductDescription = ({ dataId }) => {
  return <p className={styles.description}>{dataId?.description}</p>;
};

export default ProductDescription;
