import type { Preset } from "../../core/calculate";
import { w } from "../../styles";

interface Props {
  preset: Preset;
  choice: { [key in string]: number };
}
function Table({ preset, choice }: Props) {
  return (
    <table css={[w("hug")]} style={{ borderSpacing: "8px 8px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value{`(${preset.valueUnit})`}</th>
          <th>Price{`(${preset.costUnit})`}</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(preset.options)
          .sort((a, b) => a[1].value - b[1].value)
          .map(([name, option]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{option.value}</td>
              <td>{option.cost}</td>
              <td>{choice[name] ?? "-"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
