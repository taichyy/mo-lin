import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import { dataFooter } from '@/data'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>{dataFooter.text}</div>
      <div className={styles.social}>
        {dataFooter.links.map( (link, index) => (
          <a href={link.link}target='_new' key={index} >
            <Image src={link.img} width={15} height={15} className={styles.icon} alt={link.alt}/>
          </a>
        ))}
        {/* <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter icon"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube icon"/> */}
      </div>
    </div>
  )
}

export default Footer