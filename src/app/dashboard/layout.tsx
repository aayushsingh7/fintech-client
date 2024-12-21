"use client"

import Link from 'next/link';
import { FC, ReactNode, useEffect } from 'react';
import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaBoxesStacked, FaMapLocationDot } from "react-icons/fa6";
import { IoLogOut, IoSettings, IoStorefront } from "react-icons/io5";
import { MdInventory } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { TbCashRegister, TbMoneybag } from "react-icons/tb";
import { LuBookOpenText } from "react-icons/lu";
import { IoBarChartOutline } from "react-icons/io5";
import AddRecord from '@/layouts/AddRecord';

import styles from "../../styles/layout/DashboardLayout.module.css";
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import { SiCashapp } from 'react-icons/si';
// import { handleUserData } from '@/redux/slice/userSlice';
// import { useDispatch } from 'react-redux';


interface DashboardLayoutProps {
    children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    // const dispatch = useDispatch()
    const router = useRouter()
    // useEffect(() => {
    //     authenticateUser()
    // }, [])
    const { createRecord } = useAppContext()

    // const authenticateUser = async () => {
    //     try {
    //         const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, {
    //             method: "GET",
    //             credentials: "include",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         let data = await user.json()
    //         // dispatch(handleUserData(data.user))
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <div className={styles.page}>
            {
                createRecord && <AddRecord />
            }
            <nav className={styles.container}>
                <div className={styles.logo}>
                    <SiCashapp />
                    <p>FinSphere</p>
                </div>
                <div className={styles.split_children}>
                    <ul>
                        <li>
                            <Link href={"/dashboard"}>
                                <TiHomeOutline />
                                <span>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/dashboard/tracker"}>
                                <TbCashRegister />
                                <span>Expense Tracker</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/debt-manage"}>
                                <TbMoneybag />
                                <span>Debt Management</span>
                            </Link>
                        </li>



                        <li>
                            <Link href={"/dashboard/learn"}>
                                <LuBookOpenText />
                                <span>Learn</span>
                            </Link>
                        </li>

                    </ul>


                    <ul>
                        <li>
                            <Link href={"/dashboard"}>
                                <IoSettings />
                                <span>Settings</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/logout"}>
                                <IoLogOut />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default DashboardLayout