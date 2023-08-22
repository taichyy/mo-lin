"use client"
import React from "react"
import styles from './page.module.css'
import Link from "next/link"
import { dataPortfolio } from "@/data"
import useSWR from 'swr'
import Loading from "@/components/Loading/Loading"

const Contact = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/categories`, 
    fetcher
  )

  return (
    <>
      {isLoading ? <Loading/> : (
        <div className={styles.container}>
          <h1 className={styles.selectTitle}>
            {dataPortfolio.smallText}
          </h1>
          <div className={styles.items}>
            {data?.map( (c, index) => (
              <Link href={`portfolio/${c.category}`} style={{backgroundImage: `url("${c.img}")`}} key={index} className={styles.item}>
                <span className={styles.title}>{c.categoryCH}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Contact