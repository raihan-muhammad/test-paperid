import Image from "next/image";
import Logo from '@/assets/images/paper-logo.svg';
import Link from "next/link";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <>
            <section className={styles['navbar-wrapper']}>
                <div>
                    <Image src={Logo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link href='/'>Produk</Link></li>
                        <li><Link href='/'>Solusi Bisnis</Link></li>
                        <li><Link href='/'>Cara Kerja</Link></li>
                        <li><Link href='/'>Harga</Link></li>
                        <li><Link href='/'>Perusahaan</Link></li>
                    </ul>
                </nav>
                <section className={styles['cta-section']}>
                    <button>Login</button>
                    <button>Daftar</button>
                </section>
            </section>
        </>
    )
}

export default Navbar;