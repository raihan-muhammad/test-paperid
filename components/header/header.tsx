"use client"
import { useState } from "react";
import Navbar from "../navbar/navbar";
import PaddingContainer from "../padding-container/padding-container";
import styles from './header.module.css';
import CurrencyInput from 'react-currency-input-field';
import AuroraBackground from '@/assets/images/aurora-background.svg';
import Image from "next/image";
import TextInteraction from "../text-interaction/text-interaction";

const Header = () => {
    const [isJumlahChanged, setIsJumlahChanged] = useState<any>();
    return (
        <section className={styles['header-wrapper']}>
            <PaddingContainer>
                <Navbar/>
                <header>
                    <section>
                        <h2>Simulasikan Pembayaran Lebih Cepat dengan</h2>
                        <h1>API Embeded <br/> Financing Paper!</h1>
                    </section>
                    <section>
                        <div>
                            <form>
                                <h1>Lihat Simulasi Pinjaman Anda</h1>

                                <label htmlFor="jumlah-pinjaman">Jumlah Pinjaman</label>

                                <CurrencyInput
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Rp 0"
                                    decimalsLimit={2}
                                    prefix="Rp "
                                    onValueChange={() => setIsJumlahChanged(true)}
                                />

                                <label htmlFor="estimasi-fee">Estimasi Fee</label>
                                <input className={styles['no-border-bottom']} disabled type="text" placeholder="0%" id="estimasi-fee" value={isJumlahChanged && "1%" } />

                                <button className={isJumlahChanged && styles['active']}>Daftar Sekarang!</button>
                            </form>
                            <Image src={AuroraBackground} alt="aurora background" className={styles['aurora-background']}  />
                        </div>
                        <TextInteraction/>
                        {/* <div className={styles['aurora-background']}/> */}
                    </section>
                </header>
            </PaddingContainer>
        </section>
    )
}

export default Header;