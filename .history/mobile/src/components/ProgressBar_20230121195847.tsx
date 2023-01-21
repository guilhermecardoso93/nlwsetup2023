import { View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated"

interface ProgressBarProps {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <Animated.View
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </View>
  );
}