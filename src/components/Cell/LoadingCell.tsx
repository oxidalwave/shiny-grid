import { type Pokemon } from "~/lib/data/dex";
import CellImage from "./CellImage";

export default function LoadingCell({
  success,
  pokemon,
}: {
  success: boolean;
  pokemon: Pokemon;
}) {
  if (success) {
    return (
      <div className="h-full flex flex-col justify-center items-center bg-green-500">
        <CellImage pokemon={pokemon} />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-center items-center bg-red-500">
      <CellImage pokemon={pokemon} />
    </div>
  );
}
