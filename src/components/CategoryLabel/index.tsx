import { type CategoryId, categories } from "~/lib/revisedCategories";

interface CategoryProps {
  category: CategoryId;
}

export default function CategoryLabel({ category }: CategoryProps) {
  const cat = categories[category];
  return (
    <div className="flex h-full items-center justify-center p-2">
      {cat?.icon ?? cat?.label}
    </div>
  );
}
