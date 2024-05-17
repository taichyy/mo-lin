"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"
// SWR
import useSWR from 'swr'
// ---- [Install] npm install swr
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { AiFillEdit, AiOutlineConsoleSql } from "react-icons/ai"
const Posts = () => {
  // Demonstrate how a client side component to fetch data using useEffect()
  // const [data,setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(()=>{
  //   const getData = async() => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //       next: {
  //         // Refetch data every visits
  //         revalidate: "no-store"
  //       }
  //     });
    
  //     if(!res.ok){
  //       throw new Error('Failed to fetch data')
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // },[])

  const session = useSession()

  // NextJS SWR hook
  // fetcher can be any asynchronous function which returns the data
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`, 
    fetcher
  )

  // Form hooks
  const formRef = useRef()
  const [formShow, setFormShow] = useState(false)
  const [method, setMethod] = useState(null)
  const [formTitle, setFormTitle] = useState('新增貼文')
  const [formBtnText, setFormBtnText] = useState('確定新增')

  const handleNavClick = (cat, id) => {
    if(cat == 'post'){
      setFormShow(true)
      setMethod(()=>handleSubmit)
      setFormTitle('新增貼文')
      setFormBtnText('確定新增')
    }else if(cat == 'edit'){
      setFormShow(true)
      setMethod(()=>handleEdit)
      setFormTitle('編輯貼文')
      setFormBtnText('確定編輯')
      const clickedData = data.filter((item)=>item._id == id)[0]
      formRef.current[0].value = clickedData.title
      formRef.current[1].value = clickedData.desc
      formRef.current[2].value = clickedData.img
      formRef.current[3].value = clickedData.content
    }

    // Define handleEdit here, so that handleEdit can access to id
    const handleEdit = async(e)=> {
      e.preventDefault()
      // Get values
      const title = e.target[0].value
      const desc = e.target[1].value
      const img = e.target[2].value
      const content = e.target[3].value
      try{
        await fetch(`/api/posts/${id}`,{
          method:"PUT",
          body: JSON.stringify({
            title, desc, img, content, username:session.data.user.name
          })
        })
        mutate()
        e.target.reset()
      }catch(err){
        console.log(err)
      }
    }
  }


  const handleDelete = async(id) => {
    if(confirm('確定要刪除嗎？')){
      try{
        await fetch(`/api/posts/${id}`, {
          method:"DELETE"
        })
        mutate()
      }catch(err){
        console.log(err)
      }
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try{
      await fetch("/api/posts",{
        method:"POST",
        body: JSON.stringify({
          title, desc, img, content, username:session.data.user.name
        })
      })
      mutate()
      e.target.reset()
    }catch(err){
      console.log(err)
    }
  }

  if(session.status === 'authenticated'){
    return (
      <>
        <div className={styles.cats}>
          <span onClick={()=>handleNavClick('post')}>新增</span>
        </div>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading ? "loading" : data?.map(post => 
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt="" width={200} height={100}/>
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <h3 className={styles.postDesc}>{post.desc}</h3>
                </div>
                <div className={styles.delBox}>
                  <AiFillEdit className={styles.edit}
                    onClick={()=>{
                      handleNavClick('edit', post._id);
                    }}
                  />
                  <span className={styles.delete} onClick={()=>handleDelete(post._id)}>X</span>
                </div>
              </div>
            )}
          </div>
          <form className={styles.new} onSubmit={method} style={formShow==false ? {display: "none"} : {display: "flex"}} ref={formRef}>
            <span className={styles.mobileBtn} onClick={()=>setFormShow(false)}>
              X
            </span>
            <h1>
              {formTitle}
            </h1>
            <input type="text" placeholder="標題" className={styles.input} />
            <input type="text" placeholder="副標題" className={styles.input} />
            <input type="text" placeholder="背景圖片連結" className={styles.input} />
            <textarea placeholder="內文" className={styles.textArea} cols="30" row="10"></textarea>
            <button className={styles.button}>
              {formBtnText}
            </button>
          </form>
        </div>
      </>
    )
  }
  
}

export default Posts