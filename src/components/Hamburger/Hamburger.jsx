"use client"
// Modules
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { signOut, useSession } from 'next-auth/react'

// Data
import { dataNav } from '@/data'

// Components

// Styles
import styles from './Hamburger.module.css';

export default function Hamburger() {
    const session = useSession()
    const menuRef = useRef()

    const [door, setDoor] = useState(false)

    const style = {transform: "translate(-100vw, 0)"}
    const styleClose = {transform: "translate(0vw, 0)"}

    const handleClick = () => {
        door == true ? setDoor(false) : setDoor(true)
    }

    return (
        <nav role="navigation" className={styles.nav}>
            <div className={styles.menuToggle} onClick={()=>handleClick()}>
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
                <ul className={styles.menu} ref={menuRef} style={door ? style : styleClose} >
                    {dataNav.map(link => (
                        <Link href={link.url} key={link.id} className={styles.link} onClick={handleClick}>
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
