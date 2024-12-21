"use client"


import { FC, ReactNode, useEffect } from 'react'
import styles from '@/styles/Page.module.css'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'

interface PageProps {
    children: ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
    const { user } = useAppContext()
    const router = useRouter()
    // useEffect(() => {
    //     if (!user._id) router.push("/login")
    // }, [])
    return (
        <div className="dashboard_page">
            {children}
        </div>
    )
}

export default Page