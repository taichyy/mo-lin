import React from "react"
import styles from './page.module.css'
import Link from "next/link"
import { dataPortfolio } from "@/data"

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>
        {dataPortfolio.smallText}
      </h1>
      <div className={styles.items}>
        {dataPortfolio.categories.map( (c, index) => (
          <Link href={`portfolio/${c.name}`} style={{backgroundImage: `url("${c.img}")`}} id={index} className={styles.item}>
            <span className={styles.title}>{c.text}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Contact