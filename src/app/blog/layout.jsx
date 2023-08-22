import React from 'react'

// This is for server component only
export const metadata = {
  title: "MO LIN | Blog",
  description: "Blog page"
}

const BlogLayout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default BlogLayout