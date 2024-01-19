// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import styles from "./OrderForm.module.scss";

// const CustomDatePicker = (props) => {
//     console.log("props:", props);
//     return (
//         <div {...props} className={styles.input}>
//             {/* <input {...props} className={styles.input} /> */}
//             {({ form, field }) => {
//                 const { setFieldValue } = form;
//                 const { value } = field;

//                 return (
//                     <DatePicker
//                         id='sendDate'
//                         autoComplete='off'
//                         dateFormat='dd/MM/yyyy'
//                         selectsStart
//                         className={
//                             errors.sendDate && touched.sendDate
//                                 ? `${styles.input} ${styles.inputError}`
//                                 : styles.input
//                         }
//                         placeholderText='Дата відправки'
//                         {...field}
//                         selected={value}
//                         onFocus={(e) => e.target.blur()}
//                         onChange={(val) => setFieldValue("sendDate", val)}
//                     />
//                 );
//             }}
//         </div>
//     );
// };

// export default CustomDatePicker;
