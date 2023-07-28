import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";

export interface CorrectCellProps {
  guess: Pokemon;
}

export default function CorrectCell({ guess }: CorrectCellProps) {
  return (
    <div className="flex justify-center items-center">
      <Image alt={guess.Pokemon} src={guess.imageUrl} width={56} height={42} />
    </div>
  );
}
