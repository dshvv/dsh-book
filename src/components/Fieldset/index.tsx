//@ts-nocheck
import React from "react";
import styles from "./index.module.scss";

const Fieldset = (props) => {
    return <div className={styles.Fieldset}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.children}</div>
    </div>
}

export default Fieldset;
