import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./OrderForm.module.scss";

const CustomDatePicker = ({ name, value, onChange, placeholder }) => {
    return (
        <DatePicker
            id='sendDate'
            autoComplete='off'
            dateFormat='dd/MM/yyyy'
            placeholderText={placeholder}
            selected={value}
            onFocus={(e) => e.target.blur()}
            onChange={(val) => {
                onChange(name, val);
            }}
            className={styles.input}
        />
    );
};

export default CustomDatePicker;
