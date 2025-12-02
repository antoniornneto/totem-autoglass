import { useFonts } from "@expo-google-fonts/onest";
import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import "../styles/global.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Onest-Regular": require("../../assets/fonts/Onest-Regular.ttf"),
    "Onest-Medium": require("../../assets/fonts/Onest-Medium.ttf"),
    "Onest-Bold": require("../../assets/fonts/Onest-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return <Slot />;
}
