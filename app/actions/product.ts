"use server"

import "server-only"
import { cache } from "react"
import { revalidatePath } from "next/cache"
import { data, type CategoriesType } from "@/constants/categories"

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
export const getProducts = async (id?: string): Promise<CategoriesType[]> => {
  return data
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
