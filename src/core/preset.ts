import { Preset } from "./calculate";

const presets: Preset[] = [
  {
    name: "IdentityV - EU",
    valueUnit: "echo",
    costUnit: "€",
    options: {
      "72+0": { value: 72 + 0, cost: 1.19 },
      "218+11": { value: 218 + 11, cost: 3.49 },
      "370+19": { value: 370 + 19, cost: 5.99 },
      "808+41": { value: 808 + 41, cost: 11.99 },
      "1619+78": { value: 1619 + 78, cost: 23.99 },
      "2428+122": { value: 2428 + 122, cost: 35.99 },
      "4030+205": { value: 4030 + 205, cost: 59.99 },
      "8100+415": { value: 8100 + 415, cost: 119.99 },
    },
  },
  {
    name: "IdentityV - US",
    valueUnit: "echo",
    costUnit: "$",
    options: {
      "72+0": { value: 72 + 0, cost: 0.99 },
      "218+11": { value: 218 + 11, cost: 2.99 },
      "370+19": { value: 370 + 19, cost: 4.99 },
      "808+41": { value: 808 + 41, cost: 9.99 },
      "1619+78": { value: 1619 + 78, cost: 19.99 },
      "2428+122": { value: 2428 + 122, cost: 29.99 },
      "4030+205": { value: 4030 + 205, cost: 49.99 },
      "8100+415": { value: 8100 + 415, cost: 99.99 },
    },
  },
];

export default presets;
