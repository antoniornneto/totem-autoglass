import { AnswerCard } from "@//components/AnswerCard";
import { Button } from "@//components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { Image, View } from "react-native";

export default function AnswerPage() {
  const { id, alternative, option } = useLocalSearchParams<{
    id: string;
    alternative: string;
    option: string;
  }>();

  return (
    <View className="flex-1 bg-blue-900 px-20">
      {/* Logo Autoglass */}
      <View className="items-end">
        <Image
          resizeMode="contain"
          className="w-96 h-[60px]"
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View className="flex-1 items-center justify-center">
        <AnswerCard id={`${id}`} type={alternative} option={option} />
        <Button
          onPress={() => router.push("/homeTotem")}
          className="mt-32"
          title="Iniciar novo atendimento"
        />
      </View>
    </View>
  );
}
