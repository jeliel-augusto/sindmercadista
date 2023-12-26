import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { Palette } from "../const/Palette";

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <StatusBar backgroundColor={Palette.main} />

      <GluestackUIProvider>
        <Slot />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
