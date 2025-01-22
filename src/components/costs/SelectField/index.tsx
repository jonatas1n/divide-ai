import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export type OptionProps = {
  label: string | undefined;
  value: string;
};

type SelectFieldProps = {
  label: string;
  options: OptionProps[];
  value: OptionProps[];
  onChange: (selectedOptions: OptionProps[]) => void;
  allOptions?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SelectField = ({
  label,
  options,
  onChange,
  value,
  allOptions,
}: SelectFieldProps) => {
  const finalOptions = allOptions
    ? [{ label: "Todos", value: "all" }, ...options]
    : options;

  const handleChange = (selectedOptions: OptionProps[]) => {
    if (!allOptions) return onChange(selectedOptions);

    const isAllSelected = selectedOptions.some(({ value }) => value === "all");
    const updatedOptions = isAllSelected
      ? selectedOptions.length === finalOptions.length
        ? []
        : options
      : selectedOptions;

    onChange(updatedOptions);
  };

  return (
    <Autocomplete
      noOptionsText={`Sem opções de ${label.toLowerCase()}`}
      size="small"
      multiple
      options={finalOptions}
      value={value}
      getOptionLabel={(option) => option.label ?? ""}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={(_, selectedOptions) => handleChange(selectedOptions)}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={
              option.value === "all"
                ? value.length === options.length
                : selected
            }
          />
          {option.label}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
