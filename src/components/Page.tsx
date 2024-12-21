import { FC, ReactNode } from 'react'
import styles from '@/styles/Page.module.css'

interface PageProps {
    children: ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
    return (
        <div className="dashboard_page">
            {children}
        </div>
    )
}

export default Page