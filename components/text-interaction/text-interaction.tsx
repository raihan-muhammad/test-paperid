import styles from './text-interaction.module.css';
import ArrowUpIcon from '@/assets/images/arrow-up.svg';
import Image from 'next/image'

const TextInteraction = () => {
    return (
        <div className={styles['text-interaction']}>
            <Image src={ArrowUpIcon} alt="Arrow Up" />
            <p>Anda dapat berinteraksi pada tampilan ini</p>
        </div>
    )
}

export default TextInteraction;