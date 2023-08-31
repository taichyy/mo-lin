"use client"
// Modules
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react'
import { dataNav } from '@/data'
// Data

// Components

// Styles
import styles from './Hamburger.module.css';

export default function Hamburger() {
    const session = useSession()

    return (
        <nav role="navigation" className={styles.nav}>
            <div className={styles.menuToggle}>
                {/* <!--
                A fake / hidden checkbox is used as click reciever,
                so you can use the :checked selector on it.
                --> */}
                <input type="checkbox" />
                {/* <!--
                Some spans to act as a hamburger.
                
                They are acting like a real hamburger,
                not that McDonalds stuff.
                --> */}
                <span></span>
                <span></span>
                <span></span>
                {/* <!--
                Too bad the menu has to be inside of the button
                but hey, it's pure CSS magic.
                --> */}
                <ul className={styles.menu}>
                    <Link href="/">
                        <li>
                            <h4 style={{fontWeight : "800"}}>回首頁</h4>
                        </li>
                    </Link>
                    {dataNav.map(link => (
                        <Link key={link.id} href={link.url} className={styles.link}>
                            <li>
                                <h4>{link.title}</h4>
                            </li>
                        </Link>
                    ))}
                    {session.status === 'authenticated' ? (
                        <button className={styles.logout} onClick={signOut}>
                            Logout
                        </button>
                    ): null}
                </ul>
            </div>
            </nav>
    )
}
