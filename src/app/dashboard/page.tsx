"use client"

import Page from "@/components/Page"
import AreaChartComponent from "@/components/charts/AreaChart"
import BarChartComponent from "@/components/charts/BarChart"
import ChartWithCustomAxisColors from "@/components/charts/LineChart"
import type { NextPage } from "next"
import styles from "../../styles/pages/DashboardPage.module.css"
import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react"
import calculateTotal from "@/utils/calculateTotal"


interface DashboardPageProps {

}

const DashboardPage: NextPage<DashboardPageProps> = () => {
    const { user } = useAppContext()

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
            <div className={styles.grid_container} style={{ padding: "20px" }}>
                {/* <div className={styles.seprator}> */}
                <div className={styles.grid_container}>

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

                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Expenses Growth Per Month</span>
                        </div>

                        <BarChartComponent />
                    </div>
                </div>

                {/* </div> */}
                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Income Growth Per Month (2024)</span>
                        </div>

                        {/* <BarChartComponent /> */}
                        <ChartWithCustomAxisColors />
                    </div>
                </div>

                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Income Compare to Expenses</span>
                        </div>
                        <AreaChartComponent />
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default DashboardPage