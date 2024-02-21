import type Category from "~/lib/categories";

type CategoryProps = {
  category: Category;
}

export default function CategoryLabel({ category }: CategoryProps) {
  return (
    <div className="h-full flex justify-center items-center p-2">
      {category?.icon ?? category?.label}
    </div>
  );
}
