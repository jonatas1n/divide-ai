import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export type OptionProps = {
  label: string | undefined;
  value: string;
};

type SelectFieldProps = {
  label: string;
  options: OptionProps[];
  value: OptionProps[];
  onChange: (selectedOptions: OptionProps[]) => void;
};

export const SelectField = ({
  label,
  options,
  onChange,
  value,
}: SelectFieldProps) => {
  return (
    <Autocomplete
      noOptionsText={`Sem opções de ${label.toLowerCase()}`}
      size="small"
      multiple
      options={options}
      value={value}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label ?? ""}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={(_, selectedOptions) => onChange(selectedOptions)}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.label}
          </li>
        );
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
