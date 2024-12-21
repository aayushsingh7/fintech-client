

import Page from "@/components/Page"
import AreaChartComponent from "@/components/charts/AreaChart"
import BarChartComponent from "@/components/charts/BarChart"
import ChartWithCustomAxisColors from "@/components/charts/LineChart"
import type { NextPage } from "next"
import styles from "../../styles/pages/DashboardPage.module.css"


interface DashboardPageProps {

}

const DashboardPage: NextPage<DashboardPageProps> = () => {

    return (
        <Page>
            <div className={styles.grid_container} style={{ padding: "20px" }}>
                {/* <div className={styles.seprator}> */}
                <div className={styles.grid_container}>

                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Sales</span>
                        </div>

                        <p className={styles.main}>₹ 23,243.00</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹240.00</span>
                        </div>
                    </div>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Number of Orders</span>
                        </div>

                        <p className={styles.main}>120</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+10 </span>
                        </div>
                    </div>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Total Sales from new customers</span>
                        </div>

                        <p className={styles.main}>₹ 2,400.00</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+1025</span>
                        </div>
                    </div>
                    <div className={`${styles.summary_box} ${styles.indicator_positive}`}>
                        <div className={styles.box_header}>
                            <span>Avrage Order Value</span>
                        </div>

                        <p className={styles.main}>₹ 1500</p>

                        <div className={styles.box_footer}>
                            <span>Previous Week</span>
                            <span style={{ color: "#00df00" }}>+₹220.00</span>
                        </div>
                    </div>
                </div>

                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Orders From Different Platforms</span>
                        </div>

                        <BarChartComponent />
                    </div>
                </div>

                {/* </div> */}
                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Total Sales Per Month (2024)</span>
                        </div>

                        {/* <BarChartComponent /> */}
                        <ChartWithCustomAxisColors />
                    </div>
                </div>

                <div className={styles.one_box}>
                    <div className={styles.summary_box} style={{ height: "100%" }}>
                        <div className={styles.box_header}>
                            <span>Total Sales Compared To Previous Week</span>
                        </div>
                        <AreaChartComponent />
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default DashboardPage