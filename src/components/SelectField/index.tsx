import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export type OptionProps = {
  label?: string;
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
  const finalOptions =
    allOptions && options.length > 0
      ? [{ label: "Todos", value: "all" }, ...options]
      : options;

  const handleChange = (selectedValues: string[]) => {
    if (!allOptions) {
      const updatedOptions = selectedValues
        .map((val) => options.find((opt) => opt.value === val))
        .filter(Boolean) as OptionProps[];
      return onChange(updatedOptions);
    }

    const isAllSelected = selectedValues.includes("all");
    const updatedOptions = isAllSelected
      ? selectedValues.length === finalOptions.length
        ? []
        : options
      : (selectedValues
          .map((val) => options.find((opt) => opt.value === val))
          .filter(Boolean) as OptionProps[]);

    onChange(updatedOptions);
  };

  return (
    <Select
      multiple
      displayEmpty
      value={value.map((v) => v.value)}
      onChange={(event) => handleChange(event.target.value as string[])}
      renderValue={(selected) =>
        selected.length === 0
          ? `Sem opções de ${label.toLowerCase()}`
          : selected
              .map((val) => options.find((opt) => opt.value === val)?.label)
              .join(", ")
      }
      size="small"
    >
      {finalOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Checkbox
            checked={
              option.value === "all"
                ? value.length === options.length
                : value.some((v) => v.value === option.value)
            }
            icon={icon}
            checkedIcon={checkedIcon}
          />
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
