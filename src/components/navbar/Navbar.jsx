"use client"
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { dataNav } from '@/data'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = () => {
    const session = useSession()
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>MO LIN</Link>
            <Hamburger/>
            <div className={styles.links}>
                <DarkModeToggle/>
                {dataNav.map(link => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {session.status === 'authenticated' ? (
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                ): null}
                
            </div>
        </div>
    )
}

export default Navbar