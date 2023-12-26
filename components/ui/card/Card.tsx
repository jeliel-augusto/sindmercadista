import { Box, VStack, Heading, Image, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Palette } from "../../../const/Palette";

export default function Card({
  date,
  title,
  paragraph,
}: {
  date: string;
  title: string;
  paragraph: string;
}) {
  return (
    <Box
      maxWidth={"$64"}
      marginRight={"$4"}
      borderColor="$borderLight200"
      borderRadius="$lg"
      borderWidth="$1"
      my="$4"
      overflow="hidden"
      $base-mx="$5"
      $dark-bg="$backgroundDark900"
      $dark-borderColor="$borderDark800"
    >
      <Box>
        <Image
          h={150}
          w={"$full"}
          alt=""
          source={{
            uri: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
          }}
        />
      </Box>
      <VStack px="$6" pt="$4" pb="$6">
        <Text $dark-color="$textLight200" fontSize="$sm" my="$1.5">
          {date}
        </Text>
        <Heading $dark-color="$textLight200" size="sm">
          {title}
        </Heading>
        <Text my="$1.5" isTruncated $dark-color="$textLight200" fontSize="$xs">
          {paragraph}
        </Text>

        <Link href={""}>
          <Text fontSize="$sm" color={Palette.main}>
            Ler mais
          </Text>
        </Link>
      </VStack>
    </Box>
  );
}
