"use server"

// Import statements (you can remove unused imports if necessary)
import "server-only"
import { unstable_cache } from "next/cache"
import { data } from "@/constants/categories"

// Define your data types
type FilterData = {
  categories: string[]
  labels: string[]
  tags: string[]
}

type CategoryData = {
  name: string
}

type LabelData = {
  name: string
}

type TagData = {
  name: string
}

// Mock data
const mockCategories: CategoryData[] = [
  { name: "Electronics" },
  { name: "Books" },
  { name: "Clothing" },
]

const mockLabels: LabelData[] = [
  { name: "New Arrival" },
  { name: "Sale" },
  { name: "Popular" },
]

const mockTags: TagData[] = [
  { name: "Smartphone" },
  { name: "Laptop" },
  { name: "T-Shirt" },
]

// Mock implementation of getFilters
async function getFilters(): Promise<FilterData> {
  // Simulate asynchronous operation with a delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 100)) // 100ms delay

  // Function to extract unique names
  const unique = (array: string[]) => [...new Set(array)]

  const categories = unique(
    mockCategories.map((item) => item.name).filter(Boolean)
  )

  const labels = unique(mockLabels.map((item) => item.name).filter(Boolean))

  const tags = unique(mockTags.map((item) => item.name).filter(Boolean))

  return { categories, labels, tags }
}

// Mock implementation of getCachedFilters using unstable_cache
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

// Example usage (for testing purposes)
async function displayFilters() {
  const filters = await getCachedFilters()
  console.log("Categories:", filters.categories)
  console.log("Labels:", filters.labels)
  console.log("Tags:", filters.tags)
}

// Call the example usage function
displayFilters()
