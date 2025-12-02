import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const avatars = {
  client1: require("../../assets/clients/client1.png"),
  client2: require("../../assets/clients/client2.png"),
  client3: require("../../assets/clients/client3.png"),
  client4: require("../../assets/clients/client4.png"),
};

type ClientProps = {
  label: string;
  name: keyof typeof avatars;
  id: number;
};

export const ClientAvatar = ({ label, name, id }: ClientProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/question/${id}`)}
      className="items-center gap-4"
    >
      <View className="rounded-full overflow-hidden">
        <Image
          resizeMode="cover"
          className="w-72 h-72 scale-110"
          source={avatars[name]}
        />
      </View>
      <Text className="text-white text-3xl font-boldOnest">{label}</Text>
    </TouchableOpacity>
  );
};
