import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";

export interface CorrectCellProps {
  guess: Pokemon;
}

export default function CorrectCell({ guess }: CorrectCellProps) {
  return (
    <div className="h-full flex justify-center items-center bg-green-500">
      <Image
        alt={guess.Pokemon}
        src={guess.imageUrl ?? ""}
        width={56}
        height={42}
      />
    </div>
  );
}
