import React from 'react'

// This is for server component only
export const metadata = {
  title: "MO LIN | About",
  description: "About page"
}

const AboutLayout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default AboutLayout