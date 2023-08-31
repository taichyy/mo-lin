"use client"
import React from 'react'
import styles from './page.module.css'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
// SWR
import useSWR from 'swr'

const PCategory = ({params}) => {

  // Type of works wanted to fetch
  const type = params.category;

  // Fetch portfolios data
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: works, mutate, error, isLoading } = useSWR(
    `/api/portfolios`, 
    fetcher
  )


  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.itemFirst}>
          <div className={styles.itemTitle}>
            標題
          </div>
          <div className={styles.itemBody}>
            內文
          </div>
          <div className={styles.itemImg}>
            圖片連結
          </div>
          <div className={styles.itemBtns}>
          </div>
        </div>
        {works && works.map( (item, index) => (
          item.category === type+'' ? (
          <div key={index} className={styles.item}>
            <div className={styles.itemTitle}>
              {item.title}
            </div>
            <div className={styles.itemBody}>
              {item.body}
            </div>
            <div className={styles.itemImg}>
              {item.img}
            </div>
            <div className={styles.itemBtns}>
              <AiFillEdit/>
              <AiOutlineClose/>
            </div>
          </div>)
          :null
        ))}
      </div>
        
    </div>
  )
}

export default PCategory