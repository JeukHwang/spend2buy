import Select from "react-select";
import { Preset } from "../../core/calculate";
import presets from "../../core/preset";
import { w } from "../../styles";

interface Props {
  onChange: (value: Preset) => void;
}

function PresetSelect({ onChange }: Props) {
  const options = presets.map((p) => ({ value: p, label: p.name }));
  return (
    <Select
      placeholder={"Find your game"}
      options={options}
      css={[w("hug")]}
      onChange={(option) => {
        if (option !== null) onChange(option.value);
      }}
    />
  );
}

export default PresetSelect;
