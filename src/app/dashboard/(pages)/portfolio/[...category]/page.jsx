import React from 'react'
import styles from './page.module.css'
import { notFound } from "next/navigation"

async function getData(){
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/portfolios`,{
    next: {
      revalidate: 10
    }
  })

  if(!res.ok){
    // This shit doesn't auto import, it's from next/navigation
    return notFound()
  }
  return res.json()
}

const PCategory = async ({params}) => {
  const data = await getData()
  const type = params.category;

  return (
    <div className={styles.container}>
        {data.map( (cat, index) => (
          cat.category === type+'' ? (
          <div key={index} className={styles.table}>
            {cat.title}
          </div>)
          :null
        ))}
    </div>
  )
}

export default PCategory