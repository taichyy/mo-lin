import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import { dataFooter } from '@/data'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>{dataFooter.text}</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Facebook icon"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram icon"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter icon"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube icon"/>
      </div>
    </div>
  )
}

export default Footer