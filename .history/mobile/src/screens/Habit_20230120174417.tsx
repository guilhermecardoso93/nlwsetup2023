import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { BackButton } from "../components/BackButton";


interface HabitProps {
  date: string;
}

export function Habit() {
  const route = useRoute()

  const { date } = route.params as HabitProps;

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
      </ScrollView>
    </View>
  )
}