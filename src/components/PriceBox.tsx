import { FC } from 'react'
import styles from '@/styles/components/PriceBox.module.css'

interface PriceBoxProps {
    amount: number;
    text: string;
    changeColor?: boolean;
    income?: boolean;
}

const PriceBox: FC<PriceBoxProps> = ({ amount, text, income, changeColor }) => {
    return (
        <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
            <div className={styles.box_header}>
                <span>{text}</span>
            </div>
            <p className={`${styles.main} ${changeColor ? income ? styles.income : styles.expense : ""}`}>₹ {amount.toLocaleString()}.00</p>
            <div className={styles.box_footer}></div>
        </div>

    )
}

export default PriceBox