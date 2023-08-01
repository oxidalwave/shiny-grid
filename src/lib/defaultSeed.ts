import moment from "moment";

export function defaultSeed() {
  return moment().format("YYYY-MM-DD");
}
