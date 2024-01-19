import React from "react";
import styles from "./style.module.css";

export default function Loading() {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}>
                <div className="after:bg-white after:dark:bg-black"></div>
                <div className="after:bg-white after:dark:bg-black"></div>
                <div className="after:bg-white after:dark:bg-black"></div>
                <div className="after:bg-white after:dark:bg-black"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
                <div className="after:bg-white after:dark:bg-white"></div>
            </div>
        </div>
    );
}