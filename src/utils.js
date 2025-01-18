import isEmpty from "lodash/isEmpty";

export const getImageName = (string = "") => {
  return !isEmpty(string)
    ? string
        .split(" ")
        .map((word) => word?.[0]?.toUpperCase())
        ?.join("")
    : "NA";
};
