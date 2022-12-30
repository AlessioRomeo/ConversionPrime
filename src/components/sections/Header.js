import React from 'react';
import styles from 'styles/Header.module.scss'
import Image from "next/image";

function Header(props) {
    return (
        <div className={styles.container}>
            <Image className={styles.logo} src="/media/logo.png" width={450} height={55} alt={"file"}/>
        </div>
    );
}

export default Header;