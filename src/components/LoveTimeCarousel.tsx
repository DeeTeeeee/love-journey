import {anniversary, Colors, SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants'
import {calculateTimeFromAnniversary, calculateTotalDays} from '@utils'
import {Box, Text, View} from 'native-base'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const LoveTimeCarousel = () => {
  const totalDays = calculateTotalDays(anniversary)
  const {year, month, week, day} = calculateTimeFromAnniversary(anniversary)
  const renderLoveDay = () => (
    <Box w={'full'} h={'full'} justifyContent="center" alignItems="center">
      <Box
        w={200}
        h={200}
        rounded="full"
        justifyContent="center"
        alignItems="center"
        bgColor={Colors.pinkPastel}
      >
        <Text
          fontSize={'26px'}
          fontWeight={700}
          textAlign="center"
          color={Colors.white}
        >
          Bên nhau {totalDays} ngày
          {/* {totalDays} */}
        </Text>
      </Box>
    </Box>
  )

  const renderFullLoveTimeItem = (timeValue: number, time: string) => (
    <Box
      w={70}
      h={120}
      alignItems="center"
      justifyContent="center"
      bgColor={Colors.pinkPastel}
    >
      <Text
        fontSize={'26px'}
        fontWeight={700}
        fontFamily={'AllertaStencil-Regular'}
        color={Colors.white}
      >
        {timeValue}
      </Text>
      <Text fontSize={'20px'} fontWeight={700} color={Colors.white}>
        {time}
      </Text>
    </Box>
  )

  const renderFullLoveTime = () => (
    <Box
      w={'full'}
      h={'full'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      {renderFullLoveTimeItem(year, 'Năm')}
      {renderFullLoveTimeItem(month, 'Tháng')}
      {renderFullLoveTimeItem(week, 'Tuần')}
      {renderFullLoveTimeItem(day, 'Ngày')}
    </Box>
  )

  return (
    <View>
      <Carousel
        loop
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH / 2}
        data={[...new Array(2).keys()]}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) =>
          index === 0 ? renderLoveDay() : renderFullLoveTime()
        }
      />
    </View>
  )
}

export default LoveTimeCarousel
