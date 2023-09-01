"use client"
import React from "react"
import Image from "next/image"
import styles from './page.module.css'
import { dataContact } from "@/data"
import { useState } from "react"

const Contact = () => {

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // values
    const name = e.target[0].value
    const contact = e.target[1].value
    const context = e.target[2].value

    try{
      await fetch("/api/contacts",{
        method:"POST",
        body: JSON.stringify({
          name, contact, context
        })
      })
      e.target.reset()
      setLoading(false)
      window.alert('已經收到您的訊息，將盡速回復您！')
    }catch(err){
      setLoading(false)
      window.alert('出錯了！')
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      {loading && <div className={styles.loadingBox}>傳送中......</div>}
      {!loading && (
        <>
        <h1 className={styles.title}>
          {dataContact.bigText}
        </h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/contact.png"
              alt="Contact image"
              fill={true}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder={dataContact.nameText} className={styles.input}/>
            <input type="text" placeholder={dataContact.contactText} className={styles.input}/>
            <textarea 
              className={styles.textArea}
              placeholder={dataContact.contextText}
              name="message" 
              cols="30" rows="10"
            />
            <button className={styles.button}>
              {dataContact.btnText}
            </button>
          </form>
        </div>
        </>
      )}
    </div>
  )
}

export default Contact