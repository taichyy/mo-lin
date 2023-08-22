import React from 'react'

// This is for server component only
export const metadata = {
  title: "MO LIN | Dashboard",
  description: "Dashboard page"
}

const DashboardLayout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default DashboardLayout