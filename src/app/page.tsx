'use client'

import { motion } from 'motion/react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/8bit/avatar'
import { Badge } from '@/components/ui/8bit/badge'
import { Button } from '@/components/ui/8bit/button'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/8bit/card'
import { Icon } from '@/components/pouf/Icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { profile, socials, links } from '@/lib/links'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } },
}

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-6 px-4 py-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <motion.div initial="hidden" animate="show" variants={container}>
        <Card className="mx-1.5">
          <CardHeader className="flex flex-col items-center gap-3 text-center">
            <motion.div variants={item}>
              <Avatar className="size-24">
                {profile.avatar && <AvatarImage src={profile.avatar} alt={profile.name} />}
                <AvatarFallback className="retro text-lg" style={{ backgroundColor: 'var(--purple)', color: 'var(--on-accent)' }}>
                  {profile.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div variants={item} className="flex flex-col items-center gap-2">
              <h1 className="retro text-lg leading-relaxed">{profile.name}</h1>
              <Badge variant="secondary" style={{ backgroundColor: 'var(--yellow)', borderColor: 'var(--yellow)', color: 'var(--on-accent)' }}>
                {profile.handle}
              </Badge>
              <p className="retro text-xs leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            </motion.div>
            <motion.div variants={item} className="flex gap-3 pt-2">
              {socials.map((s, i) => (
                <motion.div key={s.label} whileHover={{ scale: 1.12, rotate: [-2, 2, 0] }} whileTap={{ scale: 0.92 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={s.label}
                    style={{ color: SOCIAL_TONES[i % SOCIAL_TONES.length] }}
                    onClick={() => window.open(s.url, '_blank', 'noopener,noreferrer')}
                  >
                    <Icon name={s.icon} size="sm" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </CardHeader>

          <CardContent className="flex flex-col gap-5 pt-4 pb-2">
            {links.map((link) => (
              <motion.div
                key={link.url}
                variants={item}
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="default"
                  className="retro h-auto w-full justify-center py-3 text-xs"
                  style={{ backgroundColor: `var(--${link.tone})`, color: 'var(--on-accent)' }}
                  onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                >
                  {link.label}
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

const SOCIAL_TONES = ['var(--pink)', 'var(--blue)', 'var(--mint)', 'var(--orange)']
