import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { Alert, ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { ProgressBar } from "../components/ProgressBar";

interface HabitProps {
  date: string;
}

export function Habit() {
  const [loading, setLoading ] = useState(true)

  const route = useRoute();
  const { date } = route.params as HabitProps;

  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format("dddd");
  const dayAndMonth = parseDate.format("DD/MM");

  async function fetchHabits() {
    try {
      setLoading(true)
    } catch (err) {
      console.log(err)
      Alert.alert('Ops!', "Não foi possível buscar as informações")
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="mt-6 text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>
        <ProgressBar progress={30}/>
        <View className="mt-6">
          <Checkbox 
            title="Beber 2l de água"
          />
           <Checkbox 
            title="Academia"
          />
        </View>
      </ScrollView>
    </View>
  );
}
