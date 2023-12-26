import { Box, Heading, Button, Image, Text } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
import { Palette } from "../../const/Palette";

export default function SignIn() {
  const router = useRouter();
  return (
    <Box
      bg={Palette.main}
      w="$full"
      h="$full"
      flexDirection="column"
      p="$5"
      justifyContent="center"
      alignItems="center"
    >
      <StatusBar backgroundColor={Palette.main} />
      <Image
        width={80}
        height={80}
        alt=""
        source={require("../../assets/Icons/app-icon.png")}
      />
      <Heading color="white" size="2xl">
        Associe-se
      </Heading>
      <Heading color="white" size="sm">
        Associe-se para estar por dentro de tudo que o Sindmercadista oferece a
        você.
      </Heading>
      <Box gap="$3" mt={"auto"}>
        <Button
          padding="$1"
          backgroundColor="$blue800"
          onPress={() => router.replace("/auth/sign-in")}
        >
          <Text color="white" size="xs">
            Quero ser associado!
          </Text>
        </Button>
        <Button
          padding="$3"
          backgroundColor="$green800"
          h="auto"
          onPress={() => router.replace("/")}
        >
          <Text color="white" size="xs">
            Voltar à tela inicial
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
