import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  View,
} from "@gluestack-ui/themed";
import { Control, useController } from "react-hook-form";
interface Option {
  id: number;
  label: string;
  value: string;
}

export const DropdownInput = ({
  options,
  name,
  control,
  placeholder,
}: {
  name: string;
  placeholder: string;
  options: Option[];
  control: Control;
}) => {
  const { field } = useController({ name, control });

  return (
    <Select onValueChange={(value) => field.onChange(value)}>
      <SelectTrigger variant="outline" size="xl">
        <SelectInput placeholder={placeholder} />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop h={"$full"} />
        <SelectContent h={"$full"}>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {options.map((option) => (
            <SelectItem
              label={option.label}
              value={option.value}
              key={option.id}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
