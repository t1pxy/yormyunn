'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/8bit/button'
import { Icon } from '@/components/pouf/Icon'

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Reads the class set by the inline script in layout.tsx before hydration,
    // so state can never diverge from the actual DOM without a page reload.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => {
        const next = !dark
        setDark(next)
        applyTheme(next)
      }}
    >
      <Icon name={dark ? 'sun' : 'moon'} size="sm" />
    </Button>
  )
}
