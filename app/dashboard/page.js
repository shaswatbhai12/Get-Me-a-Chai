"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()

    const router = useRouter()
    if(!session) {
        setTimeout(() => {
            router.push('/login')
        }, 0);
    }
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
