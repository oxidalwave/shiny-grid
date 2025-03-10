import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";

export default function CellImage({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <Image
        alt={pokemon.name}
        src={pokemon.imageUrl ?? ""}
        width={128}
        height={128}
      />
      <div className="bg-slate-800 bg-opacity-60 px-2 rounded">
        {pokemon.name}
      </div>
    </>
  );
}
