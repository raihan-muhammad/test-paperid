'use client'
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import styles from './how-to.module.css'
import PaddingContainer from '../padding-container/padding-container';
import Slide1 from '@/assets/images/slider-how-to/slide-pendaftaran.svg';
import Slide2 from '@/assets/images/slider-how-to/slide-dua.svg';
import Slide3 from '@/assets/images/slider-how-to/slide-tiga.svg';
import Slide4 from '@/assets/images/slider-how-to/slide-empat.svg';

const renderPagination = (i: number) => {
  switch(i){
    case 0:
      return (
        <>
          <h1>1</h1>
          <p>Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan, dll) pada halaman Pendaftaran.</p>
        </>
      )
    case 1: {
      return (
        <>
          <h1>2</h1>
          <p>Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan penyedia pembayaran.</p>
        </>
      )
    }
    case 2: {
      return (
        <>
          <h1>3</h1>
          <p>Tanda tangan dokumen secara digital.</p>
        </>
      )
    }
    case 3: {
      return (
        <>
          <h1>4</h1>
          <p>Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.</p>
        </>
      )
    }
  }
}

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  touchThreshold: 200,
  arrows: false,
  autoplay: true,
  vertical: true,
  verticalSwiping: false,
  customPaging: (i) => {
    return (
      <div className={styles['dot-item']}>
        {renderPagination(i)}
      </div>
    )
  },
};

const HowTo = () => {
      
    return (
      <PaddingContainer>
        <section className={styles['how-to-section']}>
           <h1>Proses Pendaftaran SmartCart Pay Later</h1> 
           {/* @ts-ignore */}
           <Slider {...sliderSettings}>
            <div>
              <Image src={Slide1} width={572} height={472} alt='slide Pendaftaran' />
            </div>
            <div>
              <Image src={Slide2} width={572} height={472} alt='slide Pendaftaran' />
            </div>
            <div>
              <Image src={Slide3} width={572} height={472} alt='slide Pendaftaran' />
            </div>
            <div>
              <Image src={Slide4} width={572} height={472} alt='slide Pendaftaran' />
            </div>
          </Slider>
        </section>
      </PaddingContainer>
    )
}

export default HowTo;