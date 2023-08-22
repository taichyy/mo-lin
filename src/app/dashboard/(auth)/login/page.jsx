"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session  = useSession()
  const router = useRouter()

  const [err, setErr] = useState('')

  const handleSubmit = async (e) => {
    setErr(false)
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password, callbackUrl: '/dashboard/portfolio'})
  }

  if(session.status === 'loading') {
    return <p>Loading...</p>
  }
  if(session.status === 'authenticated'){
    router?.push('/dashboard')
  }
  if(session.status === 'unauthenticated'){
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
              <input type='text' placeholder='email' className={styles.input} required/>
              <input type='password' placeholder='password' className={styles.input} required/>
              <button className={styles.button}>Login</button>
          </form>
        {err && (<div>{err}</div>)}
      </div>
    )
  }
}

export default Login