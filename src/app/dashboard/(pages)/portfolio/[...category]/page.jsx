"use client"
// Hooks
import { useState } from 'react'
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

  // Contorl popup
  const [pop, setPop] = useState(false)
  const [popTitle, setPopTitle] = useState('編輯')

  const handleDelete = async(id) => {
    if(confirm('確定要刪除嗎？')){
      try{
        await fetch(`/api/portfolios/${id}`, {
          method:"DELETE"
        })
        mutate()
      }catch(err){
        console.log(err)
      }
    }
  }


  const handleNavClick = (mode, id) => {
    // Set title
    if(mode == "edit"){
      setPopTitle("編輯")
    }else{
      setPopTitle("新增")
    }

    // Call form
    setPop(true)
  }


  return (
    <div className={styles.container}>
      {/* popUp menu */} 
      <div className={`${pop? styles.popClose : styles.popOpen} ${styles.pop} `}>
        <h2 className={styles.popTitle}>{popTitle}</h2>
      </div>
      {/* New portfolio item button */}
      <span>
        新增作品
      </span>
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
            <div className={styles.delBox}>
              <AiFillEdit className={styles.edit}
                onClick={()=>{
                  handleNavClick('edit', item._id);
                }}
              />
              <span className={styles.delete} 
                onClick={()=>{
                  handleDelete(item._id)
                }}
              >X</span>
            </div>
          </div>)
          :null
        ))}
      </div>
        
    </div>
  )
}

export default PCategory