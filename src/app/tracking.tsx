'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Tracking() {
  const pathname = usePathname()

 useEffect(() => {
  console.log('Tracking fired:', pathname)

  if (pathname.startsWith('/neighborhoods')) {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('trackCustom', 'ViewNeighborhood')
    }
  }
}, [pathname])

  return null
}