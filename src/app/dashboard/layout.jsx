"use client"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import React, { useEffect, useState } from 'react'

const DashboardLayout = ({ children }) => {
    const session = useSession()
    const router = useRouter()
    const path = usePathname()
    const [page, setPage] = useState('')

    useEffect(()=>{
        let temp = path.split('/')
        setPage(temp[temp.length-1])
    },[[path]])

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            router?.push("/dashboard/login")
        }
    }, [session.status, router])

    if (session.status === 'loading') {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated' && page === 'login'){
        return (
            <>
                {children}
            </>
        )
    }

    if(session.status === 'authenticated'){
        return (
            <>
                {children}
            </>
        )
    }
    
}

export default DashboardLayout
