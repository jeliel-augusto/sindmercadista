import {
  Box,
  Button,
  Heading,
  LinkText,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";
import { Palette } from "../../const/Palette";
import { Image } from "@gluestack-ui/themed";
import { useNewsFromSyndicate } from "../../hooks/news/useNewsFromSyndicate";
import { NewsItem } from "../../components/news/NewsItem";
import { useAssociateNumbers } from "../../hooks/associations/useAssociateNumber";
import { router } from "expo-router";
export default function Index() {
  const { news } = useNewsFromSyndicate();
  const { associatesNumber } = useAssociateNumbers();
  return (
    <ScrollView backgroundColor="$white" padding={"$4"} nestedScrollEnabled>
      <Heading size="xl" color="$black">
        Bem vindo, comece por aqui!
      </Heading>

      <Heading size="lg" paddingVertical="$1" color="$black">
        Últimas notícias
      </Heading>
      <ScrollView nestedScrollEnabled horizontal>
        {news.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </ScrollView>
      <Button
        h={60}
        p={4}
        onPress={() => router.push("/associate/sign-up")}
        marginVertical={"$1"}
        bgColor="$blue500"
      >
        <Text textAlign="center" color="$white">
          Não é associado ainda? Associe-se, já somos {associatesNumber}!
        </Text>
      </Button>
      <LinkText size="sm" textAlign="center" marginVertical={"$2"}>
        Não nos conhece? Conheça nossa história
      </LinkText>
    </ScrollView>
  );
}
