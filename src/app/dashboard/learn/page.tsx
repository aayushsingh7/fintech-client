import { FC } from 'react'
import styles from '../../../styles/pages/Learn.module.css'
import Page from '@/components/Page'
import PageHeader from '@/layouts/PageHeader'

interface LearnProps {

}

const Learn: FC<LearnProps> = ({ }) => {
    return (
        <Page>
            <PageHeader heading='Learn using AI'>"</PageHeader>
            <section className={styles.section}>
                <h3>Basic Financial Plan</h3>
                <div className={styles.slider}>
                    <figure className={styles.slider_box}>
                        <h5>Finance for begainners</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis veniam quam aperiam, repellendus cupiditate laudantium cumque odit nulla quibusdam?</p>

                        <span>12 users found this usefull</span>
                    </figure>

                    <figure className={styles.slider_box}>
                        <h5>Finance for begainners</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis veniam quam aperiam, repellendus cupiditate laudantium cumque odit nulla quibusdam?</p>

                        <span>12 users found this usefull</span>
                    </figure>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Advance Financial Plan</h3>
                <div className={styles.slider}>
                    <figure className={styles.slider_box}>
                        <h5>Advance Finanace Course</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis veniam quam aperiam, repellendus cupiditate laudantium cumque odit nulla quibusdam?</p>

                        <span>129 users found this usefull</span>
                    </figure>
                </div>
            </section>
        </Page>
    )
}

export default Learn