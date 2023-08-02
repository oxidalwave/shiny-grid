import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";

export interface IncorrectCellProps {
  guess: Pokemon;
}

export default function IncorrectCell({ guess }: IncorrectCellProps) {
  return (
    <div className="h-full flex justify-center items-center bg-red-500">
      <Image
        alt={guess.name}
        src={guess.imageUrl ?? ""}
        width={128}
        height={128}
      />
    </div>
  );
}
