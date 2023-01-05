import React, {useRef} from 'react';
import styles from 'styles/Sections/Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {RiArrowDownSFill, RiArrowDownSLine} from "react-icons/ri";

function Header(props) {

        const mobileMenuButton = useRef(null);
        const mobileMenu = useRef(null);

    return (

        <div className={styles.navbarContainer}>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>CONVERSION<span className={styles.accent}>PRIME</span></h1>
            </div>

            <div className={styles.menuContainer}>
                <button className={styles.dropButton}>Converters&nbsp;
                    <RiArrowDownSFill/>
                </button>
                <button className={styles.dropButton}>Downloaders&nbsp;
                    <RiArrowDownSFill/>
                </button>
                <button className={styles.dropButton}>Other Services&nbsp;
                    <RiArrowDownSFill/>
                </button>
                <Link className={styles.link} href={"/signup"}>
                    <button className={styles.signUpButton}>
                        Sign Up
                    </button>
                </Link>
            </div>

            <button ref={mobileMenuButton} className={styles.hamburger} onClick={()=>{
                mobileMenuButton.current.classList.toggle("isActive");
                mobileMenu.current.classList.toggle("isActive");
            }}>
                <div className={`${styles.hamburgerBar} ${styles.hamburgerBarTop}`}></div>
                <div className={`${styles.hamburgerBar} ${styles.hamburgerBarMiddle}`}></div>
                <div className={`${styles.hamburgerBar} ${styles.hamburgerBarBottom}`}></div>
            </button>

            <div ref={mobileMenu} className={styles.mobileMenuContainer}>

            </div>

        </div>
    );
}

export default Header;