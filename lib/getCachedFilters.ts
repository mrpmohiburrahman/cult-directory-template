// actions/cached_actions.ts

import { data, type CategoriesType } from "@/constants/categories"

// Adjust the import path as necessary

// Adjust the import path based on where you placed the data

export async function getCachedFilters(): Promise<{
  categories: string[]
  labels: string[]
  tags: string[]
}> {
  // Extract category names
  const categories = data.map((category) => category.name)
  const tagsSet = new Set<string>()

  // Iterate through each category and its deals to collect labels and tags
  data.forEach((category: CategoriesType) => {
    category.deals.forEach((deal) => {
      console.log("🚀 ~ category.deals.forEach ~ deal.labels:", deal.labels)
      console.log("🚀 ~ category.deals.forEach ~ deal.tags:", deal.tags)
      if (deal?.tags?.length > 0) deal.tags.forEach((tag) => tagsSet.add(tag))
    })
  })

  // Convert Sets to Arrays
  const tags = Array.from(tagsSet)

  return {
    categories,
    tags,
  }
}
