import {
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  RadioLabel,
} from "@gluestack-ui/themed";
import { Control, useController } from "react-hook-form";
interface Option {
  id: number;
  label: string;
  value: string;
}

export const RadioInput = ({
  options,
  name,
  control,
}: {
  name: string;
  options: Option[];
  control: Control;
}) => {
  const { field } = useController({ name, control });
  return (
    <RadioGroup value={field.value}>
      {options.map((option) => (
        <Radio
          key={option.id}
          value={option.value}
          size="md"
          isInvalid={false}
          onChange={(checked) => checked && field.onChange(option.value)}
          isDisabled={false}
        >
          <RadioIndicator mr="$2">
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>{option.label}</RadioLabel>
        </Radio>
      ))}
    </RadioGroup>
  );
};
