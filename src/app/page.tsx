import { FC } from 'react'
import styles from '../styles/pages/Home.module.css'
import Button from '@/components/ui/Button'
import Navbar from '@/layouts/Navbar'
import Link from 'next/link'

interface HomePageProps { }

const HomePage: FC<HomePageProps> = ({ }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <section className={styles.hero_section}>
        <h1>
          A <span>360°</span> Financial Management and Education Platform
        </h1>
        <p>Empowering individuals to master personal finance, build financial literacy, and make smarter investments.</p>

        <Button style={{ fontSize: "1rem", background: "var(--active-background)", padding: "15px 30px", marginTop: "40px", borderRadius: "10px" }}><Link style={{ color: "var(--primary-color)", textDecoration: "none" }} href={"/dashboard"}>Go To Dashboard</Link></Button>
      </section>

      <section id='features'>

      </section>
    </div>
  )
}

export default HomePage