import { DateTime } from "luxon";

export const defaultSeed = () => DateTime.now().toISODate()!;
