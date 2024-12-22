import { FC } from 'react'
import styles from '../styles/Layout/Navbar.module.css'
import Link from 'next/link'
import { SiCashapp } from "react-icons/si";

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <SiCashapp />
                    <p>FinSphere</p>
                </div>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"#features"}>Features</Link></li>
                    <li><Link href={"/login"} className={styles.high}>Login/Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar