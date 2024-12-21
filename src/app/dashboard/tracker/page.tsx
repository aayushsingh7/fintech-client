"use client"

import { FC, useEffect, useState } from 'react'
import styles from '../../../styles/pages/Tracker.module.css'
import Page from '@/components/Page'
import Input from '@/components/ui/Input'
import PageHeader from '@/layouts/PageHeader'
import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/AppContext'
import calculateTotal from '@/utils/calculateTotal'
import PriceBox from '@/components/PriceBox'
import { useRouter } from 'next/navigation'
import formatDate from '@/utils/formatDate'

interface TrackerProps {

}

const Tracker: FC<TrackerProps> = ({ }) => {
    const { setCreateRecord, setRecordType, setSavingPlanRequired, setDeleteRecordsFunc, user, incomeRecords, setIncomeRecordsFunc, expenseRecords, setExpenseRecordsFunc } = useAppContext()
    const router = useRouter()

    useEffect(() => {
        if (incomeRecords.length == 0) {
            fetchIncomes()
        }
        if (expenseRecords.length == 0) {
            fetchExpenses()
        }
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
            setIncomeRecordsFunc(data.data)
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
            setExpenseRecordsFunc(data.data)
            console.log({ data })
        } catch (err) {
            console.log(err)
        }
    }

    const deleteRecords = async (id: any, type: string) => {
        setDeleteRecordsFunc(type, id)
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/delete`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ recordId: id })
            })
            let response = await data.json()

            console.log({ data })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Page>
            <PageHeader heading='Expense Tracker'>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button onClick={() => { router.push("/dashboard/learn"); setSavingPlanRequired(true) }} style={{ padding: "10px 20px", background: "var(--secondary-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Create a Saving Plan (AI)</Button>
                    <Button onClick={() => { setCreateRecord(true); setRecordType("transaction") }} style={{ padding: "10px 20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Add New</Button>
                </div>
            </PageHeader>
            <div className={styles.container}>
                <div className={styles.summary}>
                    <PriceBox text="Total Amount" amount={calculateTotal(incomeRecords)} />
                    <PriceBox changeColor={true} income={true} text="Total Remainings" amount={calculateTotal(incomeRecords) - calculateTotal(expenseRecords)} />
                    <PriceBox changeColor={true} income={false} text="Total Spent" amount={calculateTotal(expenseRecords)} />
                    <PriceBox text="Savings" amount={0} />

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
                                    <div className={styles.box_container}>
                                        <div key={Math.random() * 100000} className={styles.box}>
                                            <div className={styles.box_details}>
                                                <h4>{record.title}</h4>
                                                <span>Created on {formatDate(record.createdAt)}</span>
                                            </div>
                                            <span className={`${styles.amount} ${record.recordType == "income" ? styles.income : styles.expense}`}> {record.recordType == "income" ? "+" : "-"} ₹{record.amount}</span>
                                        </div>
                                        <p onClick={() => deleteRecords(record._id, "income")} className={styles.delete_btn}>Delete Record</p>
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
                                    <div className={styles.box_container}>
                                        <div key={Math.random() * 100000} className={styles.box}>
                                            <div className={styles.box_details}>
                                                <h4>{record.title}</h4>
                                                <span>Created on {formatDate(record.createdAt)}</span>
                                            </div>
                                            <span className={`${styles.amount} ${record.recordType == "income" ? styles.income : styles.expense}`}> {record.recordType == "income" ? "+" : "-"} ₹{record.amount}</span>
                                        </div>
                                        <p onClick={() => deleteRecords(record._id, "expense")} className={styles.delete_btn}>Delete Record</p>
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