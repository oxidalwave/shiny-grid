import type Category from "~/lib/categories";

interface CategoryProps {
  category: Category;
}

export default function Category({ category }: CategoryProps) {
  return (
    <div className="flex justify-center items-center p-2">
      {category?.icon ?? category?.label}
    </div>
  );
}
