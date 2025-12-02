import { router } from "expo-router";
import { Image, View } from "react-native";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-900 gap-20">
      <View className="bg-white p-2 rounded-lg">
        <Image
          className="w-40 h-40"
          source={require("../../assets/icon.png")}
        />
      </View>
      <View className="gap-4">
        <Button title="Exportar Respostas" />
        <Button
          onPress={() => router.push("/homeTotem")}
          title="Iniciar Modo Totem"
        />
      </View>
    </View>
  );
}
