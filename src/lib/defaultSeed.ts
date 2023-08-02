import { DateTime } from "luxon";

export const defaultSeed = () => DateTime.local().setZone("UTC-5").toISODate()!;
