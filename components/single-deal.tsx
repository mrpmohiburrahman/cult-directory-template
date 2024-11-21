"use client"

import { useOptimistic } from "react"
import Link from "next/link"
import type { CategoriesType, Deal } from "@/constants/categories"
import { motion } from "framer-motion"
import { PersonStanding, Tag, View } from "lucide-react"

import { cn } from "@/lib/utils"
import MinimalCard, {
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/cult/minimal-card"
import { incrementClickCount } from "@/app/actions/product"

export const getBasePath = (url: string) => {
  return new URL(url).hostname.replace("www.", "").split(".")[0]
}

export const getLastPathSegment = (url: string, maxLength: number): string => {
  try {
    const pathname = new URL(url).pathname
    const segments = pathname.split("/").filter(Boolean)
    const lastSegment = segments.pop() || ""

    if (lastSegment.length > maxLength) {
      return `/${lastSegment.substring(0, maxLength)}`
    }

    return lastSegment ? `/${lastSegment}` : ""
  } catch (error) {
    console.error("Invalid URL:", error)
    return ""
  }
}

export const SingleDeal: React.FC<{
  deal: Deal
  trim?: boolean
  order: any
}> = ({ deal, trim, order }) => {
  const [optimisticResource, addOptimisticUpdate] = useOptimistic<
    Deal,
    Partial<Deal>
  >(deal, (currentResource, newProperties) => {
    return { ...currentResource, ...newProperties }
  })

  const handleClick = () => {
    const newClickCount = (optimisticResource.view_count || 0) + 1
    addOptimisticUpdate({ view_count: newClickCount })
    incrementClickCount(deal.name)
  }

  return (
    <motion.div
      key={`resource-card-${deal.id}-${deal.id}`}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative break-inside-avoid w-full mb-2"
    >
      <Link
        href={`/products/${deal.id}`}
        key={`/products/${deal.id}`}
        className=""
        onClick={handleClick}
      >
        <div className="w-full">
          <MinimalCard
            className={cn(
              optimisticResource.view_count > 350
                ? " text-neutral-900 hover:bg-[#666BFA] "
                : "",
              "w-full flex flex-row p-4 space-x-4"
            )}
          >
            {/* Image Section */}
            {deal.imageSrc ? (
              <MinimalCardImage
                alt={deal.name}
                src={deal.imageSrc}
                className="w-24 h-24 object-cover rounded-md flex-shrink-0"
              />
            ) : null}

            <div className="flex flex-col justify-between flex-grow">
              <div>
                {/* Name */}
                <MinimalCardTitle
                  className={cn(
                    "font-semibold mb-1",
                    optimisticResource?.view_count > 100
                      ? "text-neutral-800"
                      : ""
                  )}
                >
                  {deal.name}
                </MinimalCardTitle>
                {/* description */}
                <MinimalCardDescription
                  className={cn(
                    "text-sm",
                    optimisticResource?.view_count > 100
                      ? "text-neutral-700"
                      : ""
                  )}
                >
                  {trim
                    ? `${deal.description.slice(0, 82)}...`
                    : deal.description}
                </MinimalCardDescription>
              </div>

              {/* Discount and Footer */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-medium text-green-600">
                  {deal.discount}
                </span>
              </div>
            </div>
          </MinimalCard>
        </div>
      </Link>
    </motion.div>
  )
}
