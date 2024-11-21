export type ToolCategories = {
  [key: string]: DeveloperTools
}

export type DeveloperTools = {
  name: string
  subcategories: Subcategory[]
}

export type Subcategory = {
  name: string
  deals: Deal[]
}

export type Deal = {
  id: string
  name: string
  description: string
  discount: string
  link: string
  logoSrc: string
  category: string
  subcategory: string
  tags: string[]
  labels: string[]
  imageSrc: string
}
