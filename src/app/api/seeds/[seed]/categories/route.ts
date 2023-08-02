import { NextResponse } from "next/server";
import { getCategories } from "~/lib/getCategories";

export const GET = (
  request: Request,
  { params }: { params: { seed: string } }
) => {
  const cats = getCategories(params.seed)
  return NextResponse.json(cats)
};
