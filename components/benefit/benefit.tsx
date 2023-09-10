import Image from "next/image";
import PaddingContainer from "../padding-container/padding-container";
import styles from './benefit.module.css'
import BenefitHero from '@/assets/images/benefit-hero.png';
import Checklist from '@/assets/images/checklist.svg';

const Benefit = () => {
    return (
        <PaddingContainer>
            <section className={styles['benefit-section']}>
                <h1>Manfaat yang Bisa Anda Rasakan</h1>
                <div>
                    <section>
                        <div className={styles['line']} />
                        <div>
                            <Image src={Checklist} alt="Checklist Icon" />
                            <div>
                                <h1>One Time Integration</h1>
                                <p>Menyediakan solusi pembiayaan dengan cara yang nyaman dan efisien bagi bisnis melalui satu proses integrasi.</p>
                            </div>
                        </div>
                        <div>
                            <Image src={Checklist} alt="Checklist Icon" />
                            <div>
                                <h1>Seamless User Experience</h1>
                                <p>Proses pengajuan pinjaman dengan lebih mudah tanpa harus berinteraksi atau menelepon pihak pemberi pinjaman.</p>
                            </div>
                        </div>
                        <div>
                            <Image src={Checklist} alt="Checklist Icon" />
                            <div>
                                <h1>One Submission for Multiple Financial Institutions</h1>
                                <p>Cukup dengan satu kali pendaftaran, Anda dapat langsung diproses secara otomatis ke beberapa lembaga keuangan.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Image src={BenefitHero} alt="Benefit Hero"/>
                    </section>
                </div>
            </section>
        </PaddingContainer>
    )
}

export default Benefit;