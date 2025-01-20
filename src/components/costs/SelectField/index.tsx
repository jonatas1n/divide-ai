import Select, { MultiValue } from "react-select";

export type OptionProps = {
  label: string | undefined,
  value: string,
}

type SelectFieldProps = {
  label: string;
  options: OptionProps[];
  onChange: (newValue: MultiValue<OptionProps>) => void;
  defaultValue?: OptionProps[];
};

export const SelectField = ({ label, options, onChange, defaultValue }: SelectFieldProps) => {
  return (
    <label>
      {label}
      <Select
        aria-label={label}
        onChange={onChange}
        isMulti
        defaultValue={defaultValue}
        options={options}
      />
    </label>
  );
};
