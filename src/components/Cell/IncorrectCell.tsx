import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";

export interface IncorrectCellProps {
  guess: Pokemon;
}

export default function IncorrectCell({ guess }: IncorrectCellProps) {
  return (
    <div className="flex justify-center items-center bg-red-700">
      <Image
        alt={guess.Pokemon}
        src={guess.imageUrl ?? ""}
        width={56}
        height={42}
      />
    </div>
  );
}
