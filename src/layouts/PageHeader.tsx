import { FC, ReactNode } from 'react'
import styles from '@/styles/PageHeader.module.css'
import { IoAddCircle } from 'react-icons/io5'

interface PageHeaderProps {
    children: ReactNode;
    heading: string;
}

const PageHeader: FC<PageHeaderProps> = ({ heading, children }) => {
    return (
        <div className="page_header">
            <h2>{heading}</h2>
            {children}
        </div>
    )
}

export default PageHeader