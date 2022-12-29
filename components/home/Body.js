import React, {useState} from 'react';
import styles from '../../styles/HomeBody.module.scss'
import {HiOutlineDocumentPlus} from "react-icons/hi2";
import Image from "next/image";
import {CgCloseO} from "react-icons/cg";
import {HiDocumentDuplicate, HiShieldCheck} from "react-icons/hi";
import {AiFillSetting} from "react-icons/ai";
import {BsCheckAll} from "react-icons/bs";

function Body(props) {

    const [isFileUploaded, setIsFileUploaded] = useState(false);

    return (
        <div style={styles.body}>
        <h1 className={styles.pageTitle}>IMAGE CONVERTER</h1>
        <div className={styles.mainContainer}>
            <div className={styles.sideContainer}></div>
            <div className={styles.middleContainer}>
                <div className={styles.edgeContainer}></div>
                <div className={styles.outerCenterContainer}>
                    {
                        isFileUploaded ? (
                                <div className={styles.uploadedCenterContainer}>
                                    <div className={styles.topContainer}>
                                        <div className={styles.fileContainer}>
                                            <div className={styles.file}>
                                                <Image className={styles.fileImage} src="/media/file.png" width={60} height={100} alt={"file"}/>
                                            </div>
                                            <div className={styles.file}>
                                                <Image className={styles.fileImage} src="/media/file.png" width={60} height={100} alt={"file"}/>
                                            </div>
                                            <div className={styles.file}>
                                                <button className={styles.fileAdd}><HiOutlineDocumentPlus className={styles.addIcon}/></button>
                                            </div>
                                        </div>
                                        <div className={styles.closeFileContainer}>
                                            <CgCloseO className={styles.closeIcon} onClick={()=>{
                                                setIsFileUploaded(false);
                                            }}/>
                                        </div>
                                    </div>
                                    <div className={styles.bottomContainer}>
                                        <div className={styles.topOfBottom}>
                                            <button className={styles.convertButton}>Convert</button>
                                        </div>
                                        <div className={styles.bottomOfBottom}>

                                        </div>
                                    </div>
                                    <div className={styles.fromToContainer}>
                                        <p>From</p>
                                        <button className={styles.convertBtn}>PNG</button>
                                        <p>To</p>
                                        <button className={styles.convertBtn}>...</button>
                                    </div>
                                </div>
                        ) :
                            (
                                <div className={styles.centerContainer}>
                                    <button onClick={()=>{
                                        setIsFileUploaded(true);
                                    }} className={styles.selectButton}><HiOutlineDocumentPlus className={styles.iconDocumentAdd}/>Select File</button>
                                </div>
                            )
                    }


                </div>
                <div className={styles.edgeContainer}></div>
            </div>
            <div className={styles.sideContainer}></div>
        </div>


        <div className={styles.bannerContainer}>

            <div className={styles.containerP}>
                <h1 className={styles.bannerTitle}>How to Convert Images?</h1>
                <p className={styles.bannerP}><span className={styles.number}>1.</span>&nbsp;&nbsp;Click "Select File" and upload an image</p>
                <p className={styles.bannerP}><span className={styles.number}>2.</span>&nbsp;&nbsp;Choose the wanted extension</p>
                <p className={styles.bannerP}><span className={styles.number}>3.</span>&nbsp;&nbsp;Click "Convert" and your job is done!</p>
            </div>
        </div>

            <div className={styles.bannerInfo}>
                <div className={styles.mainInfo}>
                <div className={styles.outerInfo}>
                    <div className={styles.innerInfo}>
                        <HiDocumentDuplicate className={styles.iconInfo}/>
                        <div className={styles.labelInfo}>
                            <h1>+200 Formats Supported</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis culpa deleniti ducimus ea error ex exercitationem id ipsum iure, mollitia nemo pariatur placeat quibusdam quis sit, unde vitae?</p>
                        </div>
                    </div>
                    <div className={styles.innerInfo}>
                        <HiShieldCheck className={styles.iconInfo}/>
                        <div className={styles.labelInfo}>
                            <h1>Data Security</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores maxime molestiae odit voluptas? Deserunt distinctio eveniet maiores nesciunt quo? Autem dicta dolorum eligendi et eum, laboriosam nobis qui temporibus.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.outerInfo}>
                    <div className={styles.innerInfo}>
                        <AiFillSetting className={styles.iconInfo}/>
                        <div className={styles.labelInfo}>
                            <h1>High-Quality Conversions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi doloribus et minima rerum, sunt tempore temporibus? Asperiores aspernatur aut distinctio eaque exercitationem id, itaque maiores modi nostrum praesentium saepe!</p>
                        </div>
                    </div>
                    <div className={styles.innerInfo}>
                        <BsCheckAll className={styles.iconInfo}/>
                        <div className={styles.labelInfo}>
                            <h1>Easy To Use</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at consequuntur, corporis dolor eligendi esse et harum maiores, neque nisi officia perferendis saepe tempora tenetur veritatis vitae? Fugit, vero.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Body;