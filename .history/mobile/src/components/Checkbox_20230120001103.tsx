import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface CheckboxProps {
  checked?: boolean;
  title: string;
}

export function Checkbox({ checked = false, title }: CheckboxProps) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row mb-2 items-center"
      >
        {checked ? (
          <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
            <Feather name="check" size={30} color={colors.white} />
          </View>
        ) : (
          <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
        )}
        <Text className="text-white text-base ml-3">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
