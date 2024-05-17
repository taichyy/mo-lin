"use client"
import Link from 'next/link'
import styles from './layout.module.css'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }) {

  const pathName = usePathname().split('/');
  const [cat, setCat] = useState(pathName[pathName.length-1])
  console.log(cat)

  return (
    <div className={styles.container}>
        <div className={styles.subNav}>
          <Link href="/dashboard/portfolio/posts" onClick={()=>setCat("portfolio")} className={cat=="portfolio" ? `${styles.active}` : null}>
            <span>作品集管理</span>
          </Link>
          <Link href="/dashboard/posts" onClick={()=>setCat("posts")} className={cat=="posts" ? `${styles.active}` : null}>
            <span>最新消息管理</span>
          </Link>
        </div>
        {children}
    </div>
  )
}
