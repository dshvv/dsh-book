//@ts-nocheck
import React from "react";
import styles from "./index.module.scss";

const BilibiliPlayer = (props) => {
    const iframeCfg = {
        frameBorder:"no" ,
        scrolling:"no" ,
        width:"320" ,
        height:"240",
        src: props.src
    }
    return <div className={styles.BilibiliPlayer}>
        <iframe className={styles.ifrm} {...iframeCfg} />
    </div>
}

export default BilibiliPlayer;
