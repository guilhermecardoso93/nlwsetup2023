import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Loading } from "../components/Loading";
import { ProgressBar } from "../components/ProgressBar";
import { api } from "../lib/axios";

interface Params {
  date: string;
}

interface DayInfoProps {
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[];
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const route = useRoute();
  const { date } = route.params as Params;

  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format("dddd");
  const dayAndMonth = parseDate.format("DD/MM");

  async function fetchHabits() {
    try {
      setLoading(true);

      const response = await api.get("/day", { params: { date } });
      setDayInfo(response.data);
    } catch (err) {
      console.log(err);
      Alert.alert("Ops!", "Não foi possível buscar as informações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return <Loading />;
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
        <ProgressBar progress={30} />
        <View className="mt-6">
          {dayInfo?.possibleHabits &&
            dayInfo.possibleHabits.map((habit) => (
              <Checkbox 
                key={habit.id}
                title={habit.title} 
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
