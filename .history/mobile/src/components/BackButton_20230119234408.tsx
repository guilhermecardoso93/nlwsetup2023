import { TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const { navigate } = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
    >
      <Feather 
        name='arrow-left'
        size={30}
        color={colors.zinc[400]}
      />
    </TouchableOpacity>
  )
}