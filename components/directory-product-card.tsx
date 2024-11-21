import type { CategoriesType } from "@/constants/categories"

import { SingleDeal } from "./single-deal"

export const ResourceCard: React.FC<{
  trim?: boolean
  OneCategory: CategoriesType
  order: any
}> = ({ trim, OneCategory, order }) => {
  console.log("🚀 ~ OneCategoryResourceCard:", OneCategory)

  return (
    <div>
      {OneCategory?.deals.map((item) => (
        <>
          <SingleDeal key={item.id} deal={item} trim={trim} order={order} />
        </>
      ))}
    </div>
  )
}
