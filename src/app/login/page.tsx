"use client"

import { FC, useState } from 'react'
import styles from '@/styles/pages/LoginRegister.module.css'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface LoginPageProps { }

const LoginPage: FC<LoginPageProps> = ({ }) => {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState<any>({
        email: "",
        password: ""
    })

    const handleUserInput = (e: any) => {
        let name = e.target.name;
        setUserDetails((data: any) => {
            return { ...data, [name]: e.target.value }
        })
    }

    const login = async () => {
        try {
            const loginUser = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userDetails.email,
                    password: userDetails.password
                })
            })
            let response = await loginUser.json()
            router.push("/dashboard")
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.page}>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Welcome Back🎉</h2>
                <div className={styles.inputs}>
                    <Input name='email' type='email' required onChange={(e) => handleUserInput(e)} placeholder='Enter Your Email' inputStyleDark="none" style={{ padding: "15px 20px", marginTop: "20px", background: "var(--secondary-background)", borderRadius: "10px" }} />
                    <Input name='password' type='password' required onChange={(e) => handleUserInput(e)} placeholder='Enter Your Password' inputStyleDark="none" style={{ padding: "15px 20px", marginTop: "10px", background: "var(--secondary-background)", borderRadius: "10px" }} />
                    <Button onClick={login} style={{ fontSize: "0.8rem", background: "var(--active-background)", padding: "15px 30px", marginTop: "40px", borderRadius: "10px", width: "100%" }}>Login</Button>
                </div>
            </form>
            <p>Doesn't have an account? <Link href={"/register"}>Register now</Link></p>
        </div>
    )
}

export default LoginPage