import { Image, Text, View } from "react-native";
import { ClientAvatar } from "../components/ClientAvatar";
import clientsRaw from "../data/clients.json";
import type { Client } from "../data/types";

const clients = clientsRaw as Client[];

export default function ClientsPage() {
  return (
    <View className="flex-1 bg-blue-900 justify-between">
      {/* Logo Autoglass */}
      <View className="items-end">
        <Image
          resizeMode="contain"
          className="w-96 h-[60px]"
          source={require("../../assets/logo.png")}
        />
      </View>

      <View className="flex-1 items-center justify-center gap-20">
        <Text className="text-white font-boldOnest text-4xl">
          Escolha um cliente para atender:
        </Text>
        <View className="flex-row gap-8 items-center">
          {clients.map((client) => (
            <ClientAvatar
              key={client.id}
              name={client.key}
              label={client.name}
              id={client.id}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
