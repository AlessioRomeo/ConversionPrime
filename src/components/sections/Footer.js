import React from 'react';
import styles from '../../../styles/Footer.module.scss'

function Footer(props) {
    return (
        <div className={styles.container}>
                <div className={styles.labelContainer}>
                    <div className={styles.section}>
                        <h1>Image Converter</h1>
                        <p>JPG to PDF</p>
                        <p>PDF to JPG</p>
                        <p>HEIC to JPG</p>
                        <p>Image to PDF</p>
                        <p>Image Converter</p>
                    </div>
                    <div className={styles.section}>
                        <h1>Video Converter</h1>
                        <p>MOV to MP4</p>
                        <p>Video to GIF</p>
                        <p>MP4 Converter</p>
                        <p>VideoConverter</p>
                    </div>
                    <div className={styles.section}>
                        <h1>Audio Converter</h1>
                        <p>MP4 to MP3</p>
                        <p>Video to MP3</p>
                        <p>MP3 Converter</p>
                        <p>Audio Converter</p>
                    </div>
                    <div className={styles.section}>
                        <h1>Social Downloader</h1>
                        <p>Insta Downloader</p>
                        <p>TikTok Downloader</p>
                        <p>YouTube Downloader</p>
                    </div>
                    <div className={styles.section}>
                        <h1>Other Services</h1>
                        <p>Photo Editor</p>
                        <p>GPA Calculator</p>
                        <p>Package Tracker</p>
                    </div>
                </div>
                <div className={styles.rightsLabel}>
                    <p>2023 © ALL RIGHTS RESERVED</p>
                </div>
        </div>
    );
}

export default Footer;