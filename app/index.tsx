import {
  Heading,
  Center,
  Box,
  Image,
  Button,
  Text,
} from "@gluestack-ui/themed";
import { Palette } from "../const/Palette";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function AppEntry() {
  const router = useRouter();
  return (
    <Box bg={Palette.main} w="$full" h="$full" flexDirection="column" p="$5">
      <StatusBar backgroundColor={Palette.main} />
      <Image
        width={80}
        height={80}
        alt=""
        source={require("../assets/Icons/app-icon.png")}
      />
      <Heading color="white" size="3xl">
        Bem vindo ao Sindmercadista!
      </Heading>
      <Heading color="white" size="xs">
        O super app aonde você pode acompanhar nossas novidades, se associar e
        acompanhar ações do Sindmercadista.
      </Heading>
      <Box gap="$3" mt={"auto"}>
        <Button
          padding="$1"
          backgroundColor="$green800"
          onPress={() => router.replace("/auth/sign-in")}
        >
          <Text color="white" size="xs">
            ENTRAR
          </Text>
        </Button>
        <Button
          padding="$3"
          backgroundColor="$green800"
          h="auto"
          onPress={() => router.replace("/auth/sign-up")}
        >
          <Text color="white" size="xs">
            NÃO POSSUI CONTA? ASSOCIE-SE
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
