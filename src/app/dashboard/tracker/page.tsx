"use client"

import { FC, useEffect, useState } from 'react'
import styles from '../../../styles/pages/Tracker.module.css'
import Page from '@/components/Page'
import Input from '@/components/ui/Input'
import PageHeader from '@/layouts/PageHeader'
import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/AppContext'
import calculateTotal from '@/utils/calculateTotal'

interface TrackerProps {

}

const Tracker: FC<TrackerProps> = ({ }) => {
    const { setCreateRecord, setRecordType, user } = useAppContext()
    const [incomeRecords, setIncomeRecords] = useState([])
    const [expenseRecords, setExpenseRecords] = useState([])

    useEffect(() => {
        fetchIncomes()
        fetchExpenses()
    }, [])

    const fetchIncomes = async () => {
        try {
            const incomes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records?userId=6765c95740ce07da88eae032&&recordType=income`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await incomes.json()
            setIncomeRecords(data.data)
            console.log({ data })
        } catch (err) {
            console.log(err)
        }
    }

    const fetchExpenses = async () => {
        try {
            const incomes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records?userId=6765c95740ce07da88eae032&&recordType=expense`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await incomes.json()
            setExpenseRecords(data.data)
            console.log({ data })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Page>
            <PageHeader heading='Expense Tracker'> <Button onClick={() => { setCreateRecord(true); setRecordType("transaction") }} style={{ padding: "10px 20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Add New</Button></PageHeader>
            <div className={styles.container}>
                <div className={styles.summary}>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Amount</span>
                        </div>

                        <p className={styles.main}>₹ {calculateTotal(incomeRecords)}</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>

                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Remainings</span>
                        </div>

                        <p className={styles.main}>₹ {calculateTotal(incomeRecords) - calculateTotal(expenseRecords)}</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Spent</span>
                        </div>

                        <p className={styles.main}>₹ {calculateTotal(expenseRecords)}</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>

                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Savings</span>
                        </div>

                        <p className={styles.main}>₹ 0</p>

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
                        {
                            incomeRecords.map((record: any) => {
                                return (
                                    <div className={styles.box}>
                                        <div className={styles.box_details}>
                                            <h4>{record.title}</h4>
                                            <span>{record.createdAt}</span>
                                        </div>
                                        <span className={`${styles.amount} ${record.recordType == "income" ? styles.income : styles.expense}`}> {record.recordType == "income" ? "+" : "-"} ₹{record.amount}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={styles.seprator}>
                    <div className={styles.header}>
                        <h3>Expenses</h3>
                    </div>
                    <div className={styles.transactions_slider}>
                        {
                            expenseRecords.map((record: any) => {
                                return (
                                    <div className={styles.box}>
                                        <div className={styles.box_details}>
                                            <h4>{record.title}</h4>
                                            <span>{record.createdAt}</span>
                                        </div>
                                        <span className={`${styles.amount} ${record.recordType == "income" ? styles.income : styles.expense}`}> {record.recordType == "income" ? "+" : "-"} ₹{record.amount}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </Page >
    )
}

export default Tracker