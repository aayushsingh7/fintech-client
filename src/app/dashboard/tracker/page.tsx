import { FC } from 'react'
import styles from '../../../styles/pages/Tracker.module.css'
import Page from '@/components/Page'
import Input from '@/components/ui/Input'
import PageHeader from '@/layouts/PageHeader'
import Button from '@/components/ui/Button'

interface TrackerProps {

}

const Tracker: FC<TrackerProps> = ({ }) => {
    return (
        <Page>
            <PageHeader heading='Expense Tracker'> <Button style={{ padding: "10px 20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Add New</Button></PageHeader>
            <div className={styles.container}>
                <div className={styles.summary}>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Amount</span>
                        </div>

                        <p className={styles.main}>₹ 30,000</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>

                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Remainings</span>
                        </div>

                        <p className={styles.main}>₹10,000</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Spent</span>
                        </div>

                        <p className={styles.main}>₹ 10,000</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>

                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Savings</span>
                        </div>

                        <p className={styles.main}>₹ 10,000</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>

                </div>
            </div>

            <section className={styles.transactions}>
                <div className={styles.seprator}>
                    <div className={styles.header}>
                        <h3>Incomes</h3>
                    </div>
                    <div className={styles.transactions_slider}>

                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.income}`}>- ₹990</span>
                        </div>
                    </div>
                </div>

                <div className={styles.seprator}>
                    <div className={styles.header}>
                        <h3>Expenses</h3>
                    </div>
                    <div className={styles.transactions_slider}>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.expense}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.expense}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.expense}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.expense}`}>- ₹990</span>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_details}>
                                <h4>Purchased cloths online</h4>
                                <span>23 January 2025</span>
                            </div>
                            <span className={`${styles.amount} ${styles.expense}`}>- ₹990</span>
                        </div>
                    </div>
                </div>

            </section>
        </Page>
    )
}

export default Tracker