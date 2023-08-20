import React from "react"
import Image from "next/image"
import Button from "@/components/button/Button"
import styles from './page.module.css'

export const metadata = {
  title: "TaiCHe Demo | Contact",
  description: "Contact page"
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea 
            className={styles.textArea} 
            name="message" 
            cols="30" rows="10"
          />
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact