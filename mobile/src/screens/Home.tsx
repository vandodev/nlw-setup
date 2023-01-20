import { View, Text } from "react-native";
import { HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";

export function Home() {
    return(
        <View className='flex-1 bg-background px-8 pt-16'>
            <Header/>
            <HabitDay />
        </View>
    )
}