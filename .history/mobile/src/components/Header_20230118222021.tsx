import { View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import Logo from "../../assets/logo.svg"

export function Header() {
  return (
    <View className='w-full flex-row items-center justify-between'>
      <Logo />
      <Feather
        name='plus'
        size={20}
        color={colors.violet[500]}
      />

    </View> 
  )
}