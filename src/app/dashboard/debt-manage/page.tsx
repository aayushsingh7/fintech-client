"use client"


import Page from '@/components/Page'
import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/AppContext'
import PageHeader from '@/layouts/PageHeader'
import formatDate from '@/utils/formatDate'
import { FC, useEffect, useState } from 'react'
import styles from "../../../styles/pages/DebtManage.module.css"

interface DebtManageProps {

}

const DebtManage: FC<DebtManageProps> = ({ }) => {
    const { setCreateRecord, setRecordType, user, debtPlans, setDebtPlansFunc, setDeleteRecordsFunc } = useAppContext()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (user._id) {
            if (!debtPlans || debtPlans?.length == 0) {
                fetchDebtsPlans()
            }
        }
    }, [])

    const fetchDebtsPlans = async () => {
        setLoading(true)
        try {
            const debts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/?userId=${user._id}&&recordType=debt`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await debts.json()
            setDebtPlansFunc(data.data)
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
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
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <Page>
            <PageHeader heading='Debt Management'> <Button onClick={() => { setCreateRecord(true); setRecordType("debt") }} style={{ padding: "10px 20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Start a New Plan</Button></PageHeader>
            <section className={styles.container}>
                <h2>Current Plan(s)</h2>
                {
                    loading ? <div className="loader_2" style={{ marginTop: "20px" }}></div> :
                        <div className={styles.slider}>


                            {
                                debtPlans && debtPlans.map((debt: any) => {
                                    return (
                                        <figure key={debt._id} className={styles.box}>
                                            <div className={styles.box_header}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <div className={styles.bg} style={{ marginRight: "15px" }}></div>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <h4>{debt.title}</h4>
                                                        <span>Created on {formatDate(debt.createdAt)}</span>
                                                    </div>
                                                </div>

                                                <div style={{ display: "flex", gap: "10px" }}>
                                                    {/* <Button style={{ fontSize: "0.6rem", padding: "3px 18px", borderRadius: "10px", border: "2px solid green", color: "#00ce00" }}>Paid for Jan</Button> */}
                                                    <Button onClick={() => deleteRecords(debt._id, "debt")} style={{ background: "var(--secondary-background)", fontSize: "0.6rem", padding: "5px 20px", borderRadius: "10px" }}>Delete</Button>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Total Debt</th>
                                                            <th>Repayment Period (Years)</th>
                                                            <th>Annual Income</th>
                                                            <th>Monthly Expenses</th>
                                                            <th>Savings</th>
                                                            <th>Interest Rate (%)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>₹{debt.totalDebt}</td>
                                                            <td>{debt.repaymentPeroid}</td>
                                                            <td>₹{debt.annualIncome}</td>
                                                            <td>₹{debt.expensePerMonth}</td>
                                                            <td>₹{debt.savings}</td>
                                                            <td>{debt.interest}%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <p className={styles.estimation}>Based on above data, the best amount to pay per month is <span>₹{debt.amountToBePayedPerMonth}.00</span></p>


                                                {/* <section className={styles.charts_details}>
                                    {/* <div className={ }> */}
                                                {/* <ChartWithCustomAxisColors /> */}
                                                {/* </div> */}
                                                {/* </section> */}
                                            </figcaption>
                                        </figure>
                                    )
                                })
                            }



                        </div>
                }
            </section>
        </Page >
    )
}

export default DebtManage