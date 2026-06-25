export interface Skill {
  id: string
  emoji: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  icon: string
  label: string
  href: string
}
