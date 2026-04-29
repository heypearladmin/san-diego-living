'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Tracking() {
  const pathname = usePathname()

 useEffect(() => {
  console.log('Tracking fired:', pathname)

  if (pathname.startsWith('/neighborhoods')) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        if ((window as any).fbq) {
          ;(window as any).fbq('trackCustom', 'ViewNeighborhood')
          console.log('Event sent: ViewNeighborhood')
        } else {
          console.log('fbq not ready')
        }
      }, 1000) // 1 second delay
    }
  }
}, [pathname])

  return null
}