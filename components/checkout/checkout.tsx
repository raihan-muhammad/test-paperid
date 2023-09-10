'use client'
import Slider, { Settings } from 'react-slick';
import styles from './checkout.module.css'
import PaddingContainer from '../padding-container/padding-container';
import Image from 'next/image';
import Product1 from '@/assets/images/card-product/product1.png'
import Product2 from '@/assets/images/card-product/product2.png'
import Product3 from '@/assets/images/card-product/product3.png'
import TextInteraction from '../text-interaction/text-interaction';


const sliderSettings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    centerMode: true
};

const Checkout = () => {
      
    return (
        <section className={styles['checkout-section']}>
            <PaddingContainer>
                <h1 className={styles['title']}>Lihat Simulasi Penggunaan Limit yang Diberikan!</h1>
                <div>
                    <Slider {...sliderSettings}>
                        <div className={styles['card-checkout']}>
                            <Image src={Product2} alt='Product' />
                            <h1>Soleil Kursi Ayun 2</h1>
                            <div>
                                <p>Rp10.000.000</p>
                                <div className={styles['counter']}>
                                    <button>-</button>
                                    <input type="number" placeholder='1' />
                                    <button>+</button>
                                </div>
                            </div>
                            <section className={styles['button-bayar']}>
                                <button>Bayar Sekarang</button>
                            </section>
                        </div>
                        <div className={styles['card-checkout']}>
                            <Image src={Product1} alt='Product' />
                            <h1>EVEDAL Night Lamp</h1>
                            <div>
                                <p>Rp5.000.000</p>
                                <div className={styles['counter']}>
                                    <button>-</button>
                                    <input type="number" placeholder='50' />
                                    <button>+</button>
                                </div>
                            </div>
                            <section className={styles['button-bayar']}>
                                <button>Bayar Sekarang</button>
                            </section>
                        </div>
                        <div className={styles['card-checkout']}>
                            <Image src={Product3} alt='Product' />
                            <h1>Soleil Kursi Lipat</h1>
                            <div>
                                <p>Rp5.000.000</p>
                                <div className={styles['counter']}>
                                    <button>-</button>
                                    <input type="number" placeholder='50' />
                                    <button>+</button>
                                </div>
                            </div>
                            <section className={styles['button-bayar']}>
                                <button>Bayar Sekarang</button>
                            </section>
                        </div>
                    </Slider>
                    <TextInteraction/>
                </div>
            </PaddingContainer>
        </section>
    )
}

export default Checkout;