type Option = { value: number; cost: number };
export type Preset = {
  name: string;
  valueUnit: string;
  costUnit: string;
  options: { [key in string]: Option };
  updatedAt: Date;
};
type Memo = [number, string, number, number]; //  [base, option_name, sum_cost, counter] while index = sum_value
type Testcase = [Preset["options"], number, { [key in string]: number }];

export class Calculator {
  private static gcd2(a: number, b: number): number {
    return a === 0 ? b : this.gcd2(b % a, a);
  }
  private static gcd(array: number[]): number {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = this.gcd2(array[i], result);
      if (result === 1) return 1;
    }
    return result;
  }

  static naiveDP(
    options: Preset["options"],
    x: number,
  ): { value: number; cost: number; choice: { [key in string]: number } } {
    // deep-copy options
    options = JSON.parse(JSON.stringify(options));

    // reduce
    const fraction = Math.max(
      ...Object.values(options).map((option) => {
        const f = option.value.toString().split(".");
        return f[1] ? f[1].length : 0;
      }),
    );
    const gcd = this.gcd(
      Object.values(options).map((option) => option.value * 10 ** fraction),
    );
    x *= 10 ** fraction / gcd;
    for (const option of Object.values(options)) {
      option.value *= 10 ** fraction / gcd;
    }
    x = Math.ceil(x);

    // dp
    const data: Memo[] = Array(
      x + Math.max(...Object.values(options).map((option) => option.value)),
    );
    data[0] = [0, "", 0, 0];
    for (let i = 0; i < x; i++) {
      if (data[i] === undefined) continue;
      for (const [name, option] of Object.entries(options)) {
        const cost = data[i][2] + option.cost;
        const value = i + option.value;
        const counter = data[i][3] + 1;
        if (
          data[value] === undefined ||
          cost < data[value][2] ||
          (cost === data[value][2] && data[value][3] > counter)
        ) {
          data[value] = [i, name, cost, counter];
        }
      }
    }

    // find optimal while sum_value >= x
    let optimal: number | null = null;
    for (let i = x; i < data.length; i++) {
      if (data[i] === undefined) continue;
      if (
        optimal === null ||
        data[i][2] < data[optimal][2] ||
        (data[i][2] === data[optimal][2] && i > optimal)
      ) {
        optimal = i;
      }
    }

    // backtracking
    const choice: { [key in string]: number } = Object.fromEntries(
      Object.keys(options).map((name) => [name, 0]),
    );
    let index = optimal!;
    while (index > 0) {
      const [base, name] = data[index];
      choice[name]++;
      index = base;
    }

    // calculate cost
    const precision = Math.max(
      ...Object.values(options).map((option) => {
        const f = option.cost.toString().split(".");
        return f[1] ? f[1].length : 0;
      }),
    );
    const cost = parseFloat(
      (data[optimal!][2] / (10 ** fraction / gcd)).toFixed(precision),
    );
    return { value: optimal!, cost, choice };
  }

  static test() {
    let flag = true;
    for (const problem of this.problems) {
      const t = Date.now();

      const result = Calculator.naiveDP(problem[0], problem[1]);
      const dt = Date.now() - t;
      if (JSON.stringify(result.choice) !== JSON.stringify(problem[2])) {
        console.log("failed");
        console.log(problem[0]);
        console.log(problem[1]);
        console.log(result);
        console.log(problem[2]);
        flag = false;
      }
      if (dt > 100) {
        console.log("too slow");
        console.log(problem[0]);
        console.log(problem[1]);
        console.log(result);
        console.log(problem[2]);
        flag = false;
      }
    }
    if (flag) console.log("passed");
  }

  private static get problems(): Testcase[] {
    const options = {
      1: { value: 4, cost: 4 },
      2: { value: 5, cost: 5 },
      3: { value: 8, cost: 7 },
    };
    const query = [
      { 1: 0, 2: 0, 3: 0 },
      { 1: 1, 2: 0, 3: 0 },
      { 1: 1, 2: 0, 3: 0 },
      { 1: 1, 2: 0, 3: 0 },
      { 1: 1, 2: 0, 3: 0 },
      { 1: 0, 2: 1, 3: 0 },
      { 1: 0, 2: 0, 3: 1 },
      { 1: 0, 2: 0, 3: 1 },
    ];
    return [
      ...query.map((q, i): Testcase => [options, i, q]),
      [
        {
          1: { value: 5, cost: 2 },
          2: { value: 3, cost: 1.5 },
        },
        16,
        { 1: 2, 2: 2 },
      ],
      [
        {
          1: { value: 2, cost: 1 },
          2: { value: 4, cost: 2 },
        },
        16,
        { 1: 0, 2: 4 },
      ],
      [
        {
          1: { value: 4, cost: 4 },
          2: { value: 5, cost: 5 },
          3: { value: 8, cost: 7 },
        },
        17,
        { 1: 1, 2: 1, 3: 1 },
      ],
      [
        {
          1: { value: 40000000, cost: 4 },
          2: { value: 50000000, cost: 5 },
          3: { value: 80000000, cost: 7 },
        },
        170000000,
        { 1: 1, 2: 1, 3: 1 },
      ],
      [
        {
          1: { value: 6, cost: 6 },
          2: { value: 4, cost: 4 },
          3: { value: 3, cost: 3 },
        },
        13,
        { 1: 1, 2: 1, 3: 1 },
      ],
    ];
  }
}
