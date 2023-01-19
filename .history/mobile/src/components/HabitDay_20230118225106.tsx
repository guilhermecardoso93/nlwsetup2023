import { TouchableOpacity } from "react-native";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2 )/ 5

export const DAY_MARGIN_BETWEEN = 8

export function HabitDay() {
  return (
    <TouchableOpacity className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800" />
  );
}
