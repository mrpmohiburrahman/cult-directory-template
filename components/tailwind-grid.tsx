import type { Product } from "@/constants/categories"

import { ResourceCard } from "./directory-product-card"

interface TailwindGridProps {
  filteredData: Product[]
}

export const TailwindGrid: React.FC<TailwindGridProps> = ({ filteredData }) => {
  return (
    <div className=" space-y-3 w-full  ">
      {filteredData?.map((data, index) => (
        <div key={`${index}-${data.id}`} className="">
          <ResourceCard data={data} order={index} />
        </div>
      ))}
    </div>
  )
}
