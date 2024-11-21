import type { CategoriesType, Product } from "@/constants/categories"

import { ResourceCard } from "./directory-product-card"

interface TailwindGridProps {
  filteredData: CategoriesType[]
}

export const TailwindGrid: React.FC<TailwindGridProps> = ({ filteredData }) => {
  return (
    <div className=" space-y-3 w-full  ">
      {filteredData?.map((data, index) => (
        <div key={`${index}-${data.id}`} className="">
          <span>{data.name}</span>
          <ResourceCard OneCategory={data} order={index} />
        </div>
      ))}
    </div>
  )
}
