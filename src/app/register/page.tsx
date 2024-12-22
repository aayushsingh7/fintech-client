"use client"

import { FC, useState } from 'react'
import styles from '@/styles/pages/LoginRegister.module.css'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/context/AppContext'

interface RegisterPageProps { }

const RegisterPage: FC<RegisterPageProps> = ({ }) => {
    const router = useRouter()
    const { setUser } = useAppContext()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [userDetails, setUserDetails] = useState<any>({
        name: "",
        email: "",
        password: ""
    })

    const handleUserInput = (e: any) => {
        let name = e.target.name;
        setUserDetails((data: any) => {
            return { ...data, [name]: e.target.value }
        })
    }

    const register = async () => {
        setLoading(true)
        try {
            const registerUser = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: userDetails.name,
                    email: userDetails.email,
                    password: userDetails.password
                })
            })
            let response = await registerUser.json()
            if (registerUser.status === 201) {
                setUser(response.user)
                router.push("/dashboard")
            } else {
                setError(response.message)
            }
        } catch (err: any) {
            console.log(err)
            setError(err.message)
        }
        setLoading(false)
    }
    return (
        <div className={styles.page}>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Join Us🎯</h2>
                <div className={styles.inputs}>
                    <Input name='name' type='text' onChange={(e) => handleUserInput(e)} placeholder='Enter Your Name' inputStyleDark="none" style={{ padding: "15px 20px", marginTop: "20px", background: "var(--secondary-background)", borderRadius: "10px" }} />
                    <Input name='email' type='email' onChange={(e) => handleUserInput(e)} placeholder='Enter Your Email' inputStyleDark="none" style={{ padding: "15px 20px", marginTop: "10px", background: "var(--secondary-background)", borderRadius: "10px" }} />
                    <Input name='password' type='password' onChange={(e) => handleUserInput(e)} placeholder='Enter Your Password' inputStyleDark="none" style={{ padding: "15px 20px", marginTop: "10px", background: "var(--secondary-background)", borderRadius: "10px" }} />
                    {
                        error && <p style={{ color: "red", fontSize: "15px", textAlign: "center" }}>{error}</p>
                    }
                    <Button disabled={loading} onClick={register} style={{ fontSize: "0.8rem", background: "var(--active-background)", padding: "15px 30px", marginTop: "40px", borderRadius: "10px", width: "100%" }}>{loading ? "Registering..." : "Register"}</Button>
                </div>
            </form>
            <p>Already have an account? <Link href={"/login"}>Login now</Link></p>
        </div>
    )
}

export default RegisterPage