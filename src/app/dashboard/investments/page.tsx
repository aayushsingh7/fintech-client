import { FC } from 'react'
import styles from '../../../styles/pages/Investments.module.css'
import Page from '@/components/Page'
import PageHeader from '@/layouts/PageHeader'
import Button from '@/components/ui/Button'

interface InvestmentsProps {

}

const Investments: FC<InvestmentsProps> = ({ }) => {
    return (
        <Page>
            <PageHeader heading='Investments'>"</PageHeader>
        </Page>
    )
}

export default Investments