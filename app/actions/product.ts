"use server"

import "server-only"
import { cache } from "react"
import { revalidatePath } from "next/cache"
import { Deal, data, type CategoriesType } from "@/constants/categories"

// import { createClient } from "@/db/supabase/server"

export async function getFilters() {
  // const db = createClient()
  // const { data: categoriesData, error: categoriesError } = await db
  //   .from("products")
  //   .select("categories")

  // const { data: labelsData, error: labelsError } = await db
  //   .from("products")
  //   .select("labels")

  // const { data: tagsData, error: tagsError } = await db
  //   .from("products")
  //   .select("tags")

  // if (categoriesError || labelsError || tagsError) {
  //   console.error(
  //     "Error fetching filters:",
  //     categoriesError,
  //     labelsError,
  //     tagsError
  //   )
  //   return { categories: [], labels: [], tags: [] }
  // }

  return {
    categories: categoriesData.map((item) => item.categories).filter(Boolean),
    labels: labelsData.map((item) => item.labels).filter(Boolean),
    tags: tagsData.map((item) => item.tags).filter(Boolean),
  }
}
export const getProducts = async (
  search?: string,
  category?: string,
  label?: string,
  tag?: string
): Promise<CategoriesType[]> => {
  // Normalize search term for case-insensitive comparison
  const normalizedSearch = search?.toLowerCase()

  // Filter each category's deals based on the provided criteria
  const filteredCategories: CategoriesType[] = data
    .map((categoryItem) => {
      // Filter deals within the current category
      const filteredDeals: Deal[] = categoryItem.deals.filter((deal) => {
        let isMatch = true

        // Apply search filter
        if (normalizedSearch) {
          const nameMatch = deal.name.toLowerCase().includes(normalizedSearch)
          const descriptionMatch = deal.description
            .toLowerCase()
            .includes(normalizedSearch)
          isMatch = isMatch && (nameMatch || descriptionMatch)
        }

        // Apply category filter
        if (category) {
          isMatch = isMatch && deal.category === category
        }

        // Apply label filter
        if (label) {
          isMatch = isMatch && deal.labels.includes(label)
        }

        // Apply tag filter
        if (tag) {
          isMatch = isMatch && deal.tags.includes(tag)
        }

        return isMatch
      })

      return {
        ...categoryItem,
        deals: filteredDeals,
      }
    })
    // Exclude categories that have no matching deals
    .filter((categoryItem) => categoryItem.deals.length > 0)

  return filteredCategories
}

export const getProductById = async (
  id?: string
): Promise<CategoriesType[]> => {
  console.log(data)
  return data
}

export async function incrementClickCount(id: string) {
  console.log("🚀 ~ incrementClickCount ~ incrementClickCount: incremented", id)
  // revalidatePath("/products")
}
