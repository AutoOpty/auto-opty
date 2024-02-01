import { useTranslation } from "react-i18next";
import styles from "./OrderForm.module.scss";

const Select = (props) => {
    const {t}=useTranslation();
    return (
        <select {...props} className={styles.select}>
            {/* <input type='text' {...field} {...props} />
        {touched[field.name] && errors[field.name] && (
            <div className='error'>{errors[field.name]}</div>
        )} */}
            <option className={styles.paymentMethod} hidden value=''>
                {t('Form.PaymentMethodPlaceholder')}
            </option>
            <option value='privat' className={styles.paymentMethod}>
            {t('Form.PaymentInPrivatBank')}
            </option>
            <option value='mono' className={styles.paymentMethod}>
            {t('Form.PaymentInMonobank')}
            </option>
            <option value='postOffice' className={styles.paymentMethod}>
            {t('Form.PaymentInPostOffice')}
            </option>
        </select>
    );
};

export default Select;
