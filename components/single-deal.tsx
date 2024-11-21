"use client"

import { useOptimistic } from "react"
import Link from "next/link"
import type { Deal } from "@/constants/categories"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import MinimalCard, { MinimalCardTitle } from "@/components/cult/minimal-card"
import { incrementClickCount } from "@/app/actions/product"

export const getBasePath = (url: string) => {
  return new URL(url).hostname.replace("www.", "").split(".")[0]
}

export const getLastPathSegment = (url: string, maxLength: number): string => {
  try {
    const pathname = new URL(url).pathname
    const segments = pathname.split("/").filter(Boolean)
    const lastSegment = segments.pop() || ""

    return lastSegment.length > maxLength
      ? `/${lastSegment.substring(0, maxLength)}...`
      : `/${lastSegment}`
  } catch (error) {
    console.error("Invalid URL:", error)
    return ""
  }
}

export const SingleDeal: React.FC<{
  deal: Deal
  trim?: boolean
  order: any
}> = ({ deal, trim }) => {
  const [optimisticResource, addOptimisticUpdate] = useOptimistic<
    Deal,
    Partial<Deal>
  >(deal, (current, updates) => ({ ...current, ...updates }))

  const handleClick = () => {
    const newClickCount = (optimisticResource.view_count || 0) + 1
    addOptimisticUpdate({ view_count: newClickCount })
    incrementClickCount(deal.name)
  }

  return (
    <motion.div
      key={`resource-card-${deal.id}`}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-4"
    >
      <Link href={`/products/${deal.id}`} onClick={handleClick}>
        <MinimalCard className="flex flex-col sm:flex-row p-4 space-y-4 sm:space-y-0 sm:space-x-4 hover:bg-gray-50 transition-colors">
          {/* Image Section */}
          {deal.imageSrc && (
            <img
              src={deal.imageSrc}
              alt={deal.name}
              className="w-full sm:w-24 h-24 object-cover rounded-md"
            />
          )}

          <div className="flex flex-col justify-between flex-grow">
            <div>
              {/* Title */}
              <MinimalCardTitle
                className={cn(
                  " mt-0",
                  optimisticResource?.view_count > 100 ? "text-neutral-800" : ""
                )}
              >
                {deal.name}
              </MinimalCardTitle>
              {/* Description */}
              <p className="text-sm text-gray-600 mt-1">
                {trim
                  ? `${deal.description.slice(0, 80)}...`
                  : deal.description}
              </p>
            </div>
            {/* Footer */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium text-green-600">
                {deal.discount}
              </span>
              {/* <span className="text-xs text-gray-500">
                Views: {optimisticResource.view_count || 0}
              </span> */}
            </div>
          </div>
        </MinimalCard>
      </Link>
    </motion.div>
  )
}
