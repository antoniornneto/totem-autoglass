import { Text, View } from "react-native";
import questions from "../data/questions.json";

type AnswerProps = {
  id: string;
  type: string;
  option: string;
};

export const AnswerCard = ({ id, type, option }: AnswerProps) => {
  const convertId = Number(id);
  const bgPositive =
    "bg-green h-52 w-48 items-center rounded-xl justify-center p-4";
  const bgNeutro =
    "bg-white h-52 w-48 items-center rounded-xl justify-center p-4";
  const bgNegative =
    "bg-red h-52 w-48 items-center rounded-xl justify-center p-4";

  const txtPositive = "font-boldOnest text-8xl text-blue-900";
  const txtNegative = "font-boldOnest text-8xl text-white";

  const optPositive = "font-boldOnest text-blue-900";
  const optNegative = "font-boldOnest text-white";
  return (
    <View className="flex-row justify-center items-center w-[500px] gap-12">
      <View
        className={
          type === "positive"
            ? bgPositive
            : type === "neutro"
              ? bgNeutro
              : bgNegative
        }
      >
        <Text className={`${type === "negative" ? txtNegative : txtPositive}`}>
          {option}
        </Text>
        <Text className={`${type === "negative" ? optNegative : optPositive}`}>
          Opção -{" "}
          {type === "positive"
            ? "Positiva"
            : type === "neutro"
              ? "Neutra"
              : "Negativa"}
        </Text>
      </View>
      {type === "positive" ? (
        <Text className="text-white font-regularOnest text-justify text-xl">
          {questions[convertId].positive.text}
        </Text>
      ) : type === "neutro" ? (
        <Text className="text-white font-regularOnest text-justify text-xl">
          {questions[convertId].neutro?.text ||
            questions[convertId].neutroNegative?.text}
        </Text>
      ) : (
        <Text className="text-white font-regularOnest text-justify text-xl">
          {questions[convertId].negative.text}
        </Text>
      )}
    </View>
  );
};
