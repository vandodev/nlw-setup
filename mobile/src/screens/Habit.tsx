import { View, Text, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { api } from "../lib/axios";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/Progress.Bar";
import { Checkbox } from "../components/Checkbox";
import { Loading } from "../components/Loading";

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
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  async function fetchHabits() {
    try {
      setLoading(true);
      const response = await api.get("/day", { params: { date } });
      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits ?? []);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Ops",
        "Não foi possível carregar as informações dos hábitos."
      );
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

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30} />

        <View className="mt-6">
          {dayInfo?.possibleHabits &&
            dayInfo.possibleHabits?.map((habit) => (
              <Checkbox
                key={habit.id}
                title={habit.title}
                checked={completedHabits?.includes(habit.id)}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
