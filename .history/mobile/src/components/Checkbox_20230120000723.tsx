import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export function Checkbox() {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row mb-2 items-center"
      >
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={30} color={colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
}