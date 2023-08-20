import React from "react"
import Image from "next/image"
import styles from './page.module.css'
import Button from "@/components/button/Button"
import { items } from './data.js'
import { notFound } from "next/navigation"

const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }

  return notFound()
}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      {/* 'category' comes from the path name */}
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
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