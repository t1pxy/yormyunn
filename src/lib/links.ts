import type { IconName } from '@/components/pouf/Icon'
import type { Tone } from '@/components/pouf/tone'

export const profile = {
  name: 'YormYunn',
  handle: '@YormYunn',
  bio: 'YormYunn Family',
  // Placeholder avatar (generated) — drop a real photo in /public and point
  // this at it, e.g. '/profile.jpg'. Leave empty to show initials instead.
  avatar: 'https://cdn.discordapp.com/attachments/1106955094362161173/1542057561350733864/Yorm_1.png?ex=6a8fd884&is=6a8e8704&hm=9c143cfda520c5e6a0cbfd98b6adfddeb807d4adcf7f45b02289daf3335b7ffb&',
}

export const socials: { icon: IconName; label: string; url: string }[] = [
  { icon: 'music', label: 'TikTok', url: 'https://www.tiktok.com/@yormyunnfam' },
  { icon: 'photo', label: 'Instagram', url: 'https://www.instagram.com/yormyunn/' },
  { icon: 'card', label: 'Donate', url: 'https://ezdn.app/yormyunn' },
]

export const links: { label: string; url: string; icon: IconName; tone: Tone }[] = [
  { label: 'TikTok', url: 'https://www.tiktok.com/@yormyunnfam', icon: 'music', tone: 'purple' },
  { label: 'Instagram', url: 'https://www.instagram.com/yormyunn/', icon: 'photo', tone: 'pink' },
  { label: 'Donate Live Stream', url: 'https://ezdn.app/yormyunn', icon: 'card', tone: 'orange' },
]
