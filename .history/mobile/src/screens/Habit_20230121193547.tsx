import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Loading } from "../components/Loading";
import { ProgressBar } from "../components/ProgressBar";
import { HabitsEmpty } from "../components/HabitsEmpty";
import { api } from "../lib/axios";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";

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

  const habitsProgress = dayInfo?.possibleHabits?.length ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length) : 0

  async function fetchHabits() {
    try {
      setLoading(true);

      const response = await api.get("/day", { params: { date } });
      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits);
    } catch (err) {
      console.log(err);
      Alert.alert("Ops!", "Não foi possível buscar as informações");
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleHabit(habitId: string) {
    if (completedHabits.includes(habitId)) {
      setCompletedHabits((prevState) =>
        prevState.filter((habit) => habit !== habitId)
      );
    } else {
      setCompletedHabits((prevState) => [...prevState, habitId]);
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

        <ProgressBar progress={habitsProgress} />

        <View className="mt-6">
          {dayInfo?.possibleHabits ? 
            dayInfo.possibleHabits.map((habit) => (
              <Checkbox
                key={habit.id}
                title={habit.title}
                checked={completedHabits.includes(habit.id)}
                onPress={() => handleToggleHabit(habit.id)}
              />
            ))
              : <HabitsEmpty />
          }
        </View>
      </ScrollView>
    </View>
  );
}