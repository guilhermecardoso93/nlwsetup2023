import { View, Text } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

export const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View>
        {weekDays.map((weekDay, i) => (
          <Text key={`${weekDay}-${i}`}>{weekDay}</Text>
        ))}
      </View>
      <HabitDay />
    </View>
  );
}
