import React from "react"
import styles from './page.module.css'
import Image from "next/image"
import { notFound } from "next/navigation"

// This is how to set up metadata for dynamic pages
export async function generateMetadata({params}){
  const post = await getData(params.id)
  return {
    title: `TaiCHe Demo | ${post.title}`,
  }
}

async function getData(id){
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    next: {
      // Refetch data every visits
      revalidate: "no-store"
    }
  });

  if(!res.ok){
    // This shit doesn't auto import, it's from next/navigation
    return notFound()
  }
  return res.json()
}


const BlogPost = async ({params}) => {
const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              {data.username}
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt="Land scape"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
