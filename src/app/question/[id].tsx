import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import questions from "../../data/questions.json";

export default function QuestionPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const convertId = Number(id);
  return (
    <View className="flex-1 bg-white px-20">
      {/* Logo Autoglass */}
      <View className="items-end">
        <Image
          resizeMode="contain"
          className="w-96 h-[60px]"
          source={require("../../../assets/logo.png")}
        />
      </View>

      <View className="flex-1">
        <View
          key={questions[convertId].id}
          className="flex-1 gap-4 justify-evenly pb-10"
        >
          <Text className="font-regularOnest uppercase border border-blue-400 w-40 text-center rounded-full p-2">
            {questions[convertId].name}
          </Text>
          <View className="gap-2">
            <Text className="text-3xl text-blue-900 font-boldOnest">
              Contexto técnico:
            </Text>
            <View className="gap-2">
              {questions[convertId].question.map((q) => (
                <Text
                  key={q.id}
                  className="font-regularOnest tracking-wider text-justify text-2xl"
                >
                  {q.part}
                </Text>
              ))}
            </View>
          </View>
          <View className="gap-3">
            {questions[convertId].options.map((option) => (
              <TouchableOpacity
                key={option.id}
                className="font-regularOnest border border-blue-400 rounded-xl flex-row items-center justify-center p-2"
                onPress={() => {
                  router.push({
                    pathname: "/answer/[id]",
                    params: {
                      id: questions[convertId].id,
                      alternative: option.alternative,
                      option: option.id,
                    },
                  });
                }}
              >
                <Text className="font-boldOnest text-blue-900 text-4xl p-4">
                  {option.id}.
                </Text>
                <Text className="flex-1 font-regularOnest tracking-wide text-justify text-xl">
                  {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
