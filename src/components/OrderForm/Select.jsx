import styles from "./OrderForm.module.scss";

const Select = (props) => {
    return (
        <select {...props} className={styles.select}>
            {/* <input type='text' {...field} {...props} />
        {touched[field.name] && errors[field.name] && (
            <div className='error'>{errors[field.name]}</div>
        )} */}
            <option className={styles.paymentMethod} hidden value=''>
                Оплата під час отримання товару
            </option>
            <option value='privat' className={styles.paymentMethod}>
                Переказ на карту Приватбанк
            </option>
            <option value='mono' className={styles.paymentMethod}>
                Переказ на карту Монобанк
            </option>
            <option value='postOffice' className={styles.paymentMethod}>
                Оплата у відділенні пошти
            </option>
        </select>
    );
};

export default Select;
