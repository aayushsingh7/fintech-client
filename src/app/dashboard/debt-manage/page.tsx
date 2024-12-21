import { FC } from 'react'
import styles from "../../../styles/pages/DebtManage.module.css"
import Page from '@/components/Page'
import PageHeader from '@/layouts/PageHeader'
import Button from '@/components/ui/Button'
import ChartWithCustomAxisColors from '@/components/charts/LineChart'

interface DebtManageProps {

}

const DebtManage: FC<DebtManageProps> = ({ }) => {
    return (
        <Page>
            <PageHeader heading='Debt Management'> <Button style={{ padding: "10px 20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>Start a New Plan</Button></PageHeader>
            <section className={styles.container}>
                <h2>Current Plan(s)</h2>
                <div className={styles.slider}>


                    <figure className={styles.box}>
                        <div className={styles.box_header}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className={styles.bg} style={{ marginRight: "15px" }}></div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h4>SBI loan</h4>
                                    <span>Created on 23 January 2025</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px" }}>
                                <Button style={{ fontSize: "0.6rem", padding: "3px 18px", borderRadius: "10px", border: "2px solid green", color: "#00ce00" }}>Paid for Jan</Button>
                                <Button style={{ background: "var(--secondary-background)", fontSize: "0.6rem", padding: "5px 20px", borderRadius: "10px" }}>Expand</Button>
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
                                        <td>$15,000</td>
                                        <td>5</td>
                                        <td>$50,000</td>
                                        <td>$2,500</td>
                                        <td>$5,000</td>
                                        <td>6%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className={styles.estimation}>Based on above data, the best amount to pay per month is <span>$534.00</span></p>


                            {/* <section className={styles.charts_details}>
                                {/* <div className={ }> */}
                            {/* <ChartWithCustomAxisColors /> */}
                            {/* </div> */}
                            {/* </section> */}
                        </figcaption>
                    </figure>



                </div>
            </section>
        </Page >
    )
}

export default DebtManage