import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">Criar Hábito</Text>
        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 p-4 rounded-lg mt-3 bg-zinc-800
             text-white focus:border-2 focus:border-green-600 mb-4"
        />
        {availableWeekDays.map((day, index) => {
          return <Checkbox title={day}  key={day}/>;
        })}
      </ScrollView>
    </View>
  );
}
