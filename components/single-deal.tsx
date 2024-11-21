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
      className="group relative  break-inside-avoid w-full"
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
              "w-full"
            )}
          >
            {deal.imageSrc ? (
              <MinimalCardImage alt={deal.name} src={deal.imageSrc} />
            ) : null}

            <MinimalCardTitle
              className={cn(
                " font-semibold mb-0.5",
                optimisticResource?.view_count > 100 ? " text-neutral-800" : ""
              )}
            >
              {deal.name}
            </MinimalCardTitle>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs leading-3 mb-2 text-neutral-500"
            >
              {getLastPathSegment(deal.link, 10)}
            </motion.p>
            <MinimalCardDescription
              className={cn(
                "text-sm",
                optimisticResource?.view_count > 100 ? " text-neutral-700" : ""
              )}
            >
              {trim ? `${deal.description.slice(0, 82)}...` : deal.description}
            </MinimalCardDescription>

            <MinimalCardContent />

            <MinimalCardFooter>
              <div
                className={cn(
                  "p-1 py-1.5 px-1.5 rounded-md text-neutral-500 flex items-center gap-1  absolute bottom-2 right-2 rounded-br-[16px]",
                  optimisticResource?.view_count > 100
                    ? " text-neutral-800"
                    : ""
                )}
              >
                {/* <p className="flex items-center gap-1 tracking-tight text-neutral pr-1 text-xs">
                  {optimisticResource?.view_count || deal.view_count}
                </p> */}
              </div>
            </MinimalCardFooter>
          </MinimalCard>
        </div>
      </Link>
    </motion.div>
  )
}
