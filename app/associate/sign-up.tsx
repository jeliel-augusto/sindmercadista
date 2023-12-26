import {
  Box,
  Heading,
  Text,
  Image,
  ScrollView,
  Button,
} from "@gluestack-ui/themed";
import { InputText } from "../../components/ui/input/Input";
import { useForm } from "react-hook-form";
import { useCompaniesFromSyndicate } from "../../hooks/companies/useCompaniesFromSyndicate";
import { DropdownInput } from "../../components/ui/dropdown/Dropdown";
import { RadioInput } from "../../components/ui/radio/Radio";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
const SignUpAsAssociate = () => {
  const { control } = useForm();
  const { companies } = useCompaniesFromSyndicate();
  return (
    <ScrollView p={"$4"}>
      <Box flexDirection="row" marginVertical={"$4"} alignItems="center">
        <Feather
          onPress={() => router.replace("/main/")}
          name="arrow-left"
          size={32}
        />
        <Image
          width={80}
          marginLeft={"auto"}
          height={80}
          alt=""
          source={require("../../assets/Icons/app-icon.png")}
        />
      </Box>
      <Heading color="$black" fontSize={23} size="md">
        Associe-se e tenha nossos benefícios
      </Heading>
      <Text>Preencha a ficha de filiação abaixo para continuar</Text>
      <Box p={"$2"}>
        <InputText name="name" control={control} placeholder="Nome completo" />
        <InputText name="rg" control={control} placeholder="RG" />
        <InputText
          name="number"
          control={control}
          placeholder="Número para contato"
        />
        <DropdownInput
          name="company"
          control={control}
          placeholder="Empresa"
          options={companies.map((company) => ({
            label: company.name,
            value: company.id.toString(),
            id: company.id,
          }))}
        />
        <InputText
          name="companyRegistration"
          control={control}
          placeholder="Matrícula da empresa"
        />
        <InputText name="companyRole" control={control} placeholder="Cargo" />
        <RadioInput
          name="civilState"
          control={control}
          options={[
            {
              id: 1,
              label: "Solteiro(a)",
              value: "solteiro(a)",
            },
            {
              id: 2,
              label: "Casado(a)",
              value: "casado(a)",
            },
            {
              id: 3,
              label: "Divorciado(a)",
              value: "divorciado(a)",
            },
            {
              id: 4,
              label: "Separado(a)",
              value: "separado(a)",
            },
            {
              id: 5,
              label: "Viúvo(a)",
              value: "viúvo(a)",
            },
          ]}
        />
        <InputText
          name="dependents"
          control={control}
          placeholder="Número de dependentes"
        />
      </Box>
      <Box h={120}>
        <Button
          h={40}
          p={4}
          rounded={"$full"}
          onPress={() => {}}
          marginVertical={"$1"}
          bgColor="$blue500"
        >
          <Text textAlign="center" color="$white">
            Cadastrar-se
          </Text>
        </Button>
        <Button
          h={40}
          p={4}
          rounded={"$full"}
          onPress={() => {}}
          marginVertical={"$1"}
          bgColor="$red500"
        >
          <Text textAlign="center" color="$white">
            Voltar
          </Text>
        </Button>
      </Box>
    </ScrollView>
  );
};
export default SignUpAsAssociate;
