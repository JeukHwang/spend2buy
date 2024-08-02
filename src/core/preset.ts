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
      "60+0": { value: 60 + 0, cost: 0.99 },
      "185+9": { value: 185 + 9, cost: 2.99 },
      "305+15": { value: 305 + 15, cost: 4.99 },
      "690+33": { value: 690 + 33, cost: 9.99 },
      "1308+63": { value: 1308 + 63, cost: 19.99 },
      "2025+98": { value: 2025 + 98, cost: 29.99 },
      "3330+168": { value: 3330 + 168, cost: 49.99 },
      "6590+328": { value: 6590 + 328, cost: 99.99 },
    },
  },
];

export default presets;
