import { ReactNode} from 'react';
import styles from './padding-container.module.css';

const PaddingContainer = ({children}: {children: ReactNode}) => {
    return (
        <section className={styles['padding-container']}>{children}</section>
    )
}

export default PaddingContainer;