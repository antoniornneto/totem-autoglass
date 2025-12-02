import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { Button } from "../components/Button";

export default function HomeTotem() {
  return (
    <View className="flex-1 bg-blue-900 justify-between">
      {/* Faixa azul diagonal */}
      <View className="absolute top-[103] left-[-20%] w-[140%] h-[250px] bg-blue-100 -rotate-[10deg]" />

      {/* Logo Autoglass */}
      <View className="items-end">
        <Image
          resizeMode="contain"
          className="w-4 h-10"
          source={require("../../assets/logo.png")}
        />
      </View>

      {/* Logo Qualidays */}
      <View className="items-center">
        <Image
          resizeMode="contain"
          className="w-[400px] h-[180px] -rotate-3"
          source={require("../../assets/backgrounds/bg-qualidays.png")}
        />
      </View>

      {/* Texto e botão */}
      <View className="items-center justify-center px-10 gap-3 mb-10">
        <Text className="text-white text-3xl w-[350px] text-center font-boldOnest mb-5">
          Como posso ser a solução para o meu cliente hoje?
        </Text>

        <Button
          title="Iniciar atendimento!"
          onPress={() => {
            router.push("/clientsPage");
          }}
        />

        <View className="border border-blue-400 mt-6 rounded-xl p-7 w-[90%]">
          <Text className="text-white text-2xl text-justify font-regularOnest">
            <Text className="font-boldOnest">
              A qualidade é um dos valores que nos guiam e um dos pilares que
              sustentam o jeito de ser do Grupo Autoglass.
            </Text>{" "}
            Ela está presente em cada detalhe e é o que garante a confiança
            construída ao longo dos anos. Mais do que um padrão a ser seguido, a
            qualidade{" "}
            <Text className="font-boldOnest">
              é um compromisso coletivo com a excelência em todas as operações,
            </Text>{" "}
            um reflexo direto da nossa cultura.
          </Text>
        </View>
      </View>
    </View>
  );
}
