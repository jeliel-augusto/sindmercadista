import { Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import { Control, useController } from "react-hook-form";
import { Palette } from "../../../const/Palette";

export const InputText = ({
  control,
  name,
  placeholder,
}: {
  control: Control;
  name: string;
  placeholder: string;
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <VStack space="xs" marginVertical={"$2"}>
      <Text color="$black" fontWeight="$bold" lineHeight="$xs">
        {placeholder}
      </Text>
      <Input
        variant="outline"
        size="xl"
        isDisabled={field.disabled}
        isInvalid={fieldState.invalid}
      >
        <InputField
          cursorColor={Palette.main}
          placeholder={placeholder}
          value={field.value}
          onBlur={field.onBlur}
          onChangeText={field.onChange}
        />
      </Input>
    </VStack>
  );
};
