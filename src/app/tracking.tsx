'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Tracking() {
  const pathname = usePathname()

useEffect(() => {
  console.log('Tracking fired:', pathname)

  if (pathname.startsWith('/neighborhoods')) {
    if (typeof window !== 'undefined') {
      const checkFbq = setInterval(() => {
        if ((window as any).fbq) {
          ;(window as any).fbq('trackCustom', 'ViewNeighborhood')
          console.log('Event sent: ViewNeighborhood')
          clearInterval(checkFbq)
        }
      }, 300) // check every 300ms
    }
  }
}, [pathname])

  return null
}