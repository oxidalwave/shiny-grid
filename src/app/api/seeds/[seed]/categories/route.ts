export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getCategories } from "~/lib/getCategories";

export const GET = (
  request: Request,
  { params }: { params: { seed: string } }
) => {
  return NextResponse.json(getCategories(params.seed));
};
