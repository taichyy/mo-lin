import React from "react"
import Image from "next/image"
import styles from './page.module.css'
import Button from "@/components/button/Button"
import { notFound } from "next/navigation"
import Link from "next/link"

async function getData(cat){
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/portfolios?category=${cat}`,{
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

const Category = async ({params}) => {
  const data = await getData(params.category)
  return (
    <div className={styles.container}>
      {/* 'category' comes from the path name */}
      <h1 className={styles.catTitle}>{params.category}</h1>
      <Link href="/portfolio">{<><br/>{'<<返回'}</>}</Link>
      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
            {/* <Button text="See More" url="#" /> */}
          </div>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img}
              fill={true} alt=""
              src={item.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category