"use client"
import React from 'react'
import styles from './page.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err,setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    setErr(false)
    e.preventDefault()

    // e.target[0] represents the first input, and so on
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try{
      const res = await fetch("/api/auth/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      })

      res.status === 201 && router.push('/dashboard/login?success=Account has been created')
    }catch(err){
      setErr(true)
    }

  }

  return (
    <div className={styles.container}>
        {/* <form className={styles.form} onSubmit={handleSubmit}>
            <input type='text' placeholder='username' className={styles.input} required/>
            <input type='text' placeholder='email' className={styles.input} required/>
            <input type='text' placeholder='password' className={styles.input} required/>
            <button className={styles.button}>Register</button>
        </form>
        {err && "Something went wrong!"}
        <Link href="/dashboard/login">Login with an existing account</Link> */}
    </div>
  )
}

export default Register