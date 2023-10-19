import React from 'react'
import {Images, SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants'
import {Image, View} from 'native-base'
import Heart from '@components/Heart'
import LoveTimeCarousel from '@components/LoveTimeCarousel'

const HomeContainer = () => {
  return (
    <View w={SCREEN_WIDTH} h={SCREEN_HEIGHT} justifyContent={'center'}>
      <View w={SCREEN_WIDTH} h={SCREEN_HEIGHT} position='absolute'>
        <Image
          w="full"
          h="full"
          source={Images.home_background}
          resizeMode="cover"
        />
      </View>
      {/* <Heart /> */}
      <LoveTimeCarousel />
    </View>
  )
}

export default HomeContainer
