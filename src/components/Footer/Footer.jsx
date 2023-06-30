import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.parent}>
                    <div className={styles.details}>
                        <a className={styles.icons} href="https://www.linkedin.com/in/rathna-madhuri-b6b18921a/i" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
                        <a className={styles.icons} href="https://github.com/GRMadhuri-03" target="_blank"><i className="fab fa-github fa-lg"></i></a>
                        <a className={styles.icons} href="https://www.instagram.com/madhuri_9520/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
                    <div className={styles.details}>
                        <a href="mailto:gundabathulamadhuri2020@gmail.com"><i className="fas fa-envelope"></i> gundabathulamadhuri2020@gmail.com</a>
                    </div>
                    <div className={styles.details}>
                        <a href="#"><i className="fas fa-phone"></i> 7396439020</a>
                    </div>
            </div>
        </div>
    );
}

export default Footer;