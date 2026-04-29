'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Tracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith('/neighborhoods')) {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'ViewNeighborhood')
      }
    }
  }, [pathname])

  return null
}