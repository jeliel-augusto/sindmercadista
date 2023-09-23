import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <GluestackUIProvider>
        <Slot />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
