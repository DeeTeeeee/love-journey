import React, { useEffect } from 'react'
import {Colors, Images, SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants'
import {Image, Text, View} from 'native-base'
import LoveTimeCarousel from '@components/LoveTimeCarousel'
import Wave from "react-native-waves"
import CoupleInformation from '@components/CoupleInformation'
import { useGetGeneralInformation } from '@hooks/generalInformation/useGetGeneralInformation'

const HomeContainer = () => {
  const {handleGetGeneralInformation} = useGetGeneralInformation()

  useEffect(() => {
    handleGetGeneralInformation()
  }, [])
  return (
    <View w={SCREEN_WIDTH} h={SCREEN_HEIGHT} justifyContent={'center'}>
      <View w={SCREEN_WIDTH} h={SCREEN_HEIGHT} position="absolute" bgColor={'red.600'}>
        {/* <Image
          w="full"
          h="full"
          source={Images.home_background}
          resizeMode="cover"
        /> */}
      </View>
      {/* <Heart /> */}
      {/* <LoveTimeCarousel /> */}
      <Wave placement="bottom" speed={5} maxPoints={5} delta={60} gap={30} color={Colors.white} />
      <CoupleInformation />
    </View>
  )
}

export default HomeContainer
