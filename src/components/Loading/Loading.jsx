import React from "react";
import styles from "./Loading.module.scss";

const Loading = ({ className }) => {
  return <h3 className={`${styles.loading} ${className}`}>Loading...</h3>;
};

export default Loading;
