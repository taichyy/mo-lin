"use client"
import styles from './layout.module.css'
import useSWR from 'swr'
import Link from 'next/link'

const DPortfolioLayout = ({children}) => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/categories`,
    fetcher
  )

  return (
    <div className={styles.container}>
      <div className={styles.cats}>
        {data && data.map( cat => (
          <Link href={`/dashboard/portfolio/${cat.category}`} key={cat._id}>
            {cat.categoryCH}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}

export default DPortfolioLayout