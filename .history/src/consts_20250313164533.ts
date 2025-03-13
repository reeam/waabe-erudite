export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'WAAbe',
  DESCRIPTION:
    'ワーっとなったことを共有するブログ！',
  EMAIL: 'renraku@waabe.net',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://waabe.net/',
}

export const NAV_LINKS: Link[] = [
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
  { href: '/contact', label: 'Contact' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://twitter.com/reeam_dora', label: 'X' },
  { href: 'renraku@waabe.net', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
