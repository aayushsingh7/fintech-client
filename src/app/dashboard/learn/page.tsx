"use client"

import { FC, useEffect, useState } from 'react'
import styles from '../../../styles/pages/Learn.module.css'
import Page from '@/components/Page'
import PageHeader from '@/layouts/PageHeader'
import Input from '@/components/ui/Input'
import { FaUserTie } from "react-icons/fa";
import Link from 'next/link'
import { useAppContext } from '@/context/AppContext'
import MarkdownPreview from '@uiw/react-markdown-preview';

interface LearnProps {

}

interface MessageType {
    role: string;
    msg: string;
}

const Learn: FC<LearnProps> = ({ }) => {
    const { incomeGrowth, expenseGrowth, savingPlanRequired, setSavingPlanRequired, incomeRecords, expenseRecords } = useAppContext()
    const [userMessages, setUserMessages] = useState<MessageType[]>([{ role: "assistent", msg: "Hey! how can i help you today?" }])
    const [message, setMessage] = useState<string>("")
    const [aiLoading, setAiLoading] = useState<boolean>(false)
    // const [permission, setPermission] = useState<boolean>(false)
    let prompt = `Based on my current income and expense for current month, tell me what is the most sutable amount of savings i can do in order to maximize my savings, please give me response in details for better understanding
    
    details:- 
    Income: ${incomeGrowth[incomeGrowth?.length - 1]?.totalAmount}
    Expense: ${expenseGrowth[expenseGrowth?.length - 1]?.totalAmount}
    Debts: Not Considered
    `

    const newMessage = async (e: any) => {
        if (e.key == "Enter" || savingPlanRequired) {
            const msg = {
                role: "user",
                msg: savingPlanRequired ? prompt : message
            }

            setMessage("")
            setSavingPlanRequired(false)
            setUserMessages((messages: any) => {
                return [...messages, msg]
            })

            try {
                setAiLoading(true)
                let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/ask`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt: msg.msg
                    })
                })
                let response = await data.json()
                console.log({ response })
                setUserMessages((messages: any) => {
                    return [...messages, {
                        role: "assistent",
                        msg: response.response
                    }]
                })
            } catch (err) {
                console.log(err)
            }
            setAiLoading(false)
        }

    }

    useEffect(() => {
        if (savingPlanRequired) {
            newMessage("")
            setSavingPlanRequired(false)
        }
    }, [])

    return (
        <Page>
            <PageHeader heading='Learn using AI'>"</PageHeader>
            <div className={styles.container}>
                <section className={styles.section_1}>
                    <section className={styles.section}>
                        <h3>Basic Financial Plan</h3>
                        <div className={styles.slider}>
                            <Link style={{ textDecoration: "none" }} href={"https://www.investopedia.com/terms/p/personalfinance.asp"} target='_blank' className={styles.slider_box}>
                                <h5>Personal Finance Basics</h5>
                                <p>In this article you will learn about personal finance and why its very important for anyone to understand.</p>
                                <span>12 users found this usefull</span>
                            </Link>
                            <Link style={{ textDecoration: "none" }} href={"https://www.investopedia.com/terms/p/personalfinance.asp"} target='_blank' className={styles.slider_box}>
                                <h5>8 Financial Tips for Young Adults</h5>
                                <p>Learn how you can manage your money and resources for future and build wealth overtime without being overwhelmed</p>
                                <span>12 users found this usefull</span>
                            </Link>

                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Win Quizes and Earn Prices</h3>
                        <div className={styles.slider}>
                            <figure style={{ textDecoration: "none" }} className={styles.slider_box}>
                                <h5>Personal Finance Basics Quiz</h5>
                                <p>Show how much you have gained knowledge after reading above articles & earn prices</p>
                                <span style={{ color: "red" }}>Currently Unavailable</span>
                            </figure>
                        </div>
                    </section>
                </section>
                <section className={styles.section_2}>
                    <div className={styles.header}>
                        <FaUserTie style={{ marginRight: "15px", color: "var(--primary-color)", fontSize: "20px" }} />
                        <h4 style={{ display: "flex", alignItems: "center" }}>Ask AI  {aiLoading && <div style={{ marginLeft: "10px" }} className="loader"></div>} </h4>
                    </div>
                    <div className={styles.chat_interface}>
                        {
                            userMessages.map((message) => {
                                return (
                                    <div key={Math.random() * 1000000} className={styles.bubble} style={{ display: "flex", alignContent: "center", justifyContent: message.role == "user" ? "flex-end" : "flex-start" }}>
                                        <MarkdownPreview style={{ background: message.role == "user" ? "var(--active-background)" : "#222222", color: message.role == "user" ? "var( --primary-color-light)" : "var(--primary-color)", padding: "10px", maxWidth: "80%", borderRadius: "10px" }}
                                            source={message.msg}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.input}>
                        <Input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => newMessage(e)} inputStyleDark='none' type="text" placeholder='Ask AI Anything (eg: important financial terms)' style={{ padding: "20px", fontSize: "0.7rem" }} />
                    </div>
                </section>
            </div>
        </Page>
    )
}

export default Learn