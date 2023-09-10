import styles from "./footer.module.css";
import Image from "next/image";
import Lady from "@/assets/images/Lady 2.svg";
import PaddingContainer from "../padding-container/padding-container";
import Logo from '@/assets/images/paper-logo.svg';
import AddressIcon from "@/assets/images/address-icon.svg"
import PhoneIcon from "@/assets/images/phone-icon.svg"
import EmailIcon from "@/assets/images/email-icon.svg"
import Kan from "@/assets/images/download-icon/kan_logo.png"
import Security from "@/assets/images/download-icon/secure-white.svg"
import BVcertification from "@/assets/images/download-icon/bv_certification.png"
import PlayStore from "@/assets/images/download-icon/playstore-icon.png"
import Facebook from "@/assets/images/sosmed-icon/facebook-icon.svg"
import Linkedin from "@/assets/images/sosmed-icon/linkedin-icon.svg"
import Instagram from "@/assets/images/sosmed-icon/instagram-icon.svg"
import Youtube from "@/assets/images/sosmed-icon/youtube-icon.svg"

const Footer = () => {
    return (
        <>
            <section className={styles['footer-wrapper']}>
                <PaddingContainer>
                <div className={styles['register-wrapper']}>
                    <Image src={Lady} alt="lady"/>   
                    <div>
                        <h2>
                        Solusi Pembayaran untuk Kelancaran 
                        Cashflow Bisnis via Paper id 
                        </h2>
                        <button>Daftar Gratis Sekarang</button>
                    </div>     
                </div>
                <footer>
                    <section className={styles['navigator-wrapper']}>   
                    <div className={styles['contact-wrapper']}>
                        <Image src={Logo} alt="logo"/>
                        <section>
                            <div className={styles['contact-list']}>
                                <p>Hubungi Kami</p>
                                <div className={styles['contact-item']}>
                                    <Image src={PhoneIcon} alt="phone-icon"/>
                                    <div>
                                        <p>+62 821 1767 9137</p>
                                        <p>+62 811 1098 746 (WA)</p>
                                    </div>
                                </div>
                                <div className={styles['contact-item']}>
                                    <Image src={EmailIcon} alt="email-icon"/>
                                    <div>
                                        <p>support@paper.id</p>
                                    </div>
                                </div>
                                <div className={styles['contact-item']}>
                                    <Image src={AddressIcon} alt="address-icon"/>
                                    <div>
                                        <p>Jl. Sunter Garden Raya No.5D, RT.6/RW.12, Sunter Agung, Tj. Priok, Kota Jkt Utara, DKI Jakarta 14350</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['operational-wrapper']}>
                                <p>Jam Operasional</p>
                                <div className={styles['operational-item']}>
                                    <p>Senin-Jumat</p>
                                    <p>: 07.00 - 22.00 WIB</p>
                                </div>
                                <div className={styles['operational-item']}>
                                    <p>Sabtu & Libur Nasional</p>
                                    <p>: 08.00 - 17.00 WIB</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={styles['navigator-list']}>

                        <div className={styles['navigator-item']}>
                            <p>Fitur Lainnya</p>
                            <div className={styles['list-wrapper']}>
                                <ul>
                                    <li>Order dan Penawaran</li>
                                    <li>Akuntansi Gratis</li>
                                    <li>Digital Payment</li>
                                    <li>Manajemen Stok</li>
                                    <li>Laporan Keuangan</li>
                                    <li>One Click Share</li>
                                    <li>Template Invoice</li>
                                </ul>
                                <ul>
                                    <li>Billing</li>
                                    <li>Financing</li>
                                    <li>PaperChain</li>
                                    <li>PaperTrade</li>
                                    <li>Enterprise Solution</li>
                                    <li>PayPer</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles['navigator-item']}>
                            <p>Solusi</p>
                            <div className={styles['list-wrapper']}>
                                <ul>
                                    <li>Jual Beli</li>
                                    <li>Jasa</li>
                                    <li>F&B</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles['navigator-item']}>
                            <p>Perusahaan</p>
                            <div className={styles['list-wrapper']}>
                                <ul>
                                    <li>Tentang Kami</li>
                                    <li>Cara Kerja</li>
                                    <li>Karir</li>
                                    <li>Pricing</li>
                                    <li>Blog</li>
                                    <li>Help Center</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className={styles['download-wrapper']}>
                        <div className={styles['download-item']}>
                            <p>Download Paper.id apps</p>
                            <div className={styles['icon-wrapper']}>
                                <Image src={PlayStore} alt="play-store-icon"/>
                            </div>
                        </div>
                        <div className={styles['download-item']}>
                            <p>Keamanan</p>
                            <div className={styles['icon-wrapper']}>
                                <Image src={Security} alt="secure-white"/>
                                <Image src={Kan} alt="kan-logo"/>
                                <Image src={BVcertification} alt="bv-certification"/>
                            </div>
                        </div>
                    </section>
                    <section className={styles["notes-wrapper"]}>
                        <p className={styles['copyright']}>Copyright &copy; 2023 Paper.id (PT Pakar Digital Global)</p>
                        <div className={styles['sosmed-icon']}>
                            <Image src={Youtube} alt="youtube-icon"/>
                            <Image src={Facebook} alt="facebook-icon"/>
                            <Image src={Linkedin} alt="linkedin-icon"/>
                            <Image src={Instagram} alt="instagram-icon"/>
                        </div>
                        <div className={styles['privacy-wrapper']}>
                            <p>Privacy Policy</p>
                            <p>Terms & Condition</p>
                            <p>Sitemap</p>
                        </div>
                    </section>
                </footer>
                </PaddingContainer>
                
            </section>
        </>
    )
}
export default Footer;