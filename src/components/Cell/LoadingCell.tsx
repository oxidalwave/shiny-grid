import { type Pokemon } from "~/lib/data/dex";
import CellImage from "./CellImage";

export default function LoadingCell({
  isSuccess,
  pokemon,
}: {
  isSuccess: boolean;
  pokemon: Pokemon;
}) {
  if (isSuccess) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-green-500">
        <CellImage pokemon={pokemon} />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center bg-red-500">
      <CellImage pokemon={pokemon} />
    </div>
  );
}
