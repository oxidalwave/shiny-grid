export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getPokedex } from "~/lib/data/pokemon";

export const GET = async () => {
  const pokedex = await getPokedex();

  return NextResponse.json(pokedex);
};
