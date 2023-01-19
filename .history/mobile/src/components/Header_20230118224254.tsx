import { TouchableOpacity, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import Logo from "../assets/logo.svg"

export function Header() {
  return (
    <View className='w-full flex-row items-center justify-between'>
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <Feather
          name='plus'
          size={20}
          color={colors.violet[500]}
        />
        <Text className="text-white ml-3 font text-base">

        </Text>
      </TouchableOpacity>

    </View> 
  )
}